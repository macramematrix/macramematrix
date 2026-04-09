import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog - Macrame Tips, Guides & Inspiration",
  description:
    "Learn about macrame knots, care tips, styling ideas, and the story behind Macrame Matrix. Your guide to handmade macrame in India.",
  alternates: {
    canonical: "https://macramematrix.com/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-body text-sage-dark text-sm uppercase tracking-[0.2em] mb-3">
            Stories & Guides
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Blog
          </h1>
          <p className="font-body text-charcoal-light text-base max-w-lg mx-auto">
            Tips, tutorials, and the stories behind our craft
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-body text-charcoal-light text-lg mb-4">
              Our blog is coming soon!
            </p>
            <p className="font-body text-charcoal-light text-sm">
              In the meantime, follow us on{" "}
              <a
                href="https://www.instagram.com/macramematrix"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-dark underline"
              >
                Instagram
              </a>{" "}
              and{" "}
              <a
                href="https://www.youtube.com/@MacrameMatrix"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-dark underline"
              >
                YouTube
              </a>{" "}
              for tutorials and behind-the-scenes content.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <p className="font-body text-xs text-sage-dark uppercase tracking-wider">
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h2 className="font-heading text-xl font-bold text-charcoal group-hover:text-sage-dark transition-colors">
                    {post.title}
                  </h2>
                  <p className="font-body text-charcoal-light text-sm line-clamp-2">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
