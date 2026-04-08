import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | Macrame Matrix Blog`,
      description: post.description,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Macrame Matrix",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 font-body text-sm text-charcoal-light">
            <Link href="/" className="hover:text-charcoal">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-charcoal">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-charcoal">{post.title}</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-body text-xs bg-sage/10 text-sage-dark px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-charcoal leading-snug mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 font-body text-sm text-charcoal-light">
              <span>By {post.author}</span>
              <span>&middot;</span>
              <time>
                {new Date(post.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </header>

          {/* Featured image */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-10">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none font-body text-charcoal [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-charcoal-light [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-charcoal-light [&_li]:mb-2 [&_strong]:text-charcoal [&_a]:text-sage-dark [&_a]:underline">
            <MDXRemote source={post.content} />
          </div>

          {/* Author box */}
          <div className="mt-12 border-t border-cream pt-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-sage/10 flex items-center justify-center shrink-0">
                <span className="font-heading text-sage text-xl font-bold">M</span>
              </div>
              <div>
                <p className="font-body font-semibold text-charcoal text-sm">
                  {post.author}
                </p>
                <p className="font-body text-charcoal-light text-xs">
                  Macrame Artist, Pune &middot; Founder of Macrame Matrix
                </p>
              </div>
            </div>
          </div>

          {/* Back to blog */}
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-block border-2 border-charcoal text-charcoal font-body font-medium px-6 py-2.5 rounded-full hover:bg-charcoal hover:text-white transition-colors text-sm"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
