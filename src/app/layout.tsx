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
    images: [{ url: "/images/brand/logo-trimmed.png", width: 800, height: 600, alt: "Macrame Matrix" }],
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
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
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
    "@id": "https://macramematrix.com",
    name: "Macrame Matrix",
    description:
      "Handcrafted macrame products made with cotton cord in Pune, India. Wall hangings, torans, earrings, bags, diya holders & gifts.",
    url: "https://macramematrix.com",
    telephone: "+918262995455",
    image: "https://macramematrix.com/images/brand/logo-trimmed.png",
    logo: "https://macramematrix.com/images/brand/logo-trimmed.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.5204,
      longitude: 73.8567,
    },
    sameAs: [
      "https://www.instagram.com/macramematrix",
      "https://www.youtube.com/@MacrameMatrix",
      "https://www.facebook.com/macramematrix",
    ],
    priceRange: "₹129 - ₹4,377",
    currenciesAccepted: "INR",
    paymentAccepted: "UPI, Bank Transfer, Cash",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    founder: {
      "@type": "Person",
      name: "Monika A. Fernandes",
    },
    knowsAbout: ["Macrame", "Handmade Crafts", "Macrame Wall Hangings", "Macrame Torans", "Macrame Earrings"],
  };

  return (
    <html lang="en" className={`${lora.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
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
