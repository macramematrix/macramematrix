import type { Metadata } from "next";
import { Lora, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Macrame Matrix - Handmade Macrame Products from Pune, India",
    template: "%s | Macrame Matrix",
  },
  description:
    "Shop handcrafted macrame wall hangings, earrings, bags, torans & gifts. Handmade with cotton cord in Pune, India. Knotted with Precision.",
  keywords: [
    "macrame",
    "handmade macrame India",
    "macrame wall hanging",
    "macrame Pune",
    "buy macrame online India",
    "macrame earrings",
    "macrame toran",
    "handmade home decor India",
    "macrame gifts",
    "handcrafted macrame",
  ],
  authors: [{ name: "Monika A. Fernandes" }],
  creator: "Macrame Matrix",
  metadataBase: new URL("https://macramematrix.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://macramematrix.com",
    siteName: "Macrame Matrix",
    title: "Macrame Matrix - Handmade Macrame Products from Pune, India",
    description:
      "Handcrafted macrame wall hangings, earrings, bags, torans & gifts. Handmade with cotton cord in Pune. Knotted with Precision.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Macrame Matrix - Handmade Macrame from Pune, India",
    description:
      "Handcrafted macrame wall hangings, earrings, bags & gifts. Handmade with cotton cord in Pune.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Macrame Matrix",
    description:
      "Handcrafted macrame products made with cotton cord in Pune, India.",
    url: "https://macramematrix.com",
    telephone: "+918262995455",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.instagram.com/macramematrix",
      "https://www.youtube.com/@MacrameMatrix",
      "https://www.facebook.com/macramematrix",
    ],
    priceRange: "₹160 - ₹5,499",
  };

  return (
    <html lang="en" className={`${lora.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
