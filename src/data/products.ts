export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: string;
  categorySlug: string;
  description: string;
  images: string[];
  materials: string;
  dimensions?: string;
  badge?: string;
  featured?: boolean;
  inStock: boolean;
  type: "ready-to-ship" | "made-to-order";
  careInstructions?: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
  seoTitle: string;
  seoDescription: string;
}

export const categories: Category[] = [
  {
    slug: "home-decor",
    name: "Home Decor",
    description:
      "Handknotted wall hangings, torans, coasters, and diya holders that transform your space with warmth and texture.",
    image: "/images/products/toran-red.png",
    seoTitle: "Macrame Home Decor — Wall Hangings, Torans & More | Macrame Matrix",
    seoDescription:
      "Shop handmade macrame wall hangings, torans, coasters, and diya holders. Made with organic materials in Pune, India.",
  },
  {
    slug: "wearables",
    name: "Wearables",
    description:
      "Handcrafted macrame earrings and bags that add a touch of boho elegance to any outfit.",
    image: "/images/products/earrings-teal.jpg",
    seoTitle: "Macrame Earrings & Bags — Handmade Wearable Art | Macrame Matrix",
    seoDescription:
      "Shop handmade macrame earrings, hoop earrings, and boho bags. Crafted with precision in Pune, India.",
  },
  {
    slug: "accessories",
    name: "Accessories",
    description:
      "Colorful macrame keychains, friendship bands, and small gifts — perfect for everyday joy or thoughtful gifting.",
    image: "/images/products/keychains.jpg",
    seoTitle: "Macrame Keychains & Accessories | Macrame Matrix",
    seoDescription:
      "Shop handmade macrame keychains, friendship bands, and accessories. Affordable handmade gifts from Pune, India.",
  },
  {
    slug: "gifts-festive",
    name: "Gifts & Festive",
    description:
      "Celebrate every occasion with handmade macrame — from Diwali diya holders to flower bouquets and wedding return gifts.",
    image: "/images/products/diya-holders.jpg",
    seoTitle:
      "Macrame Gifts for Diwali, Christmas, Rakhi & Weddings | Macrame Matrix",
    seoDescription:
      "Handmade macrame gifts for every Indian festival. Diwali diya holders, Rakhi, Christmas ornaments & wedding return gifts from Pune.",
  },
];

export const products: Product[] = [
  // Home Decor
  {
    id: "hd-001",
    slug: "macrame-elephant-toran-yellow",
    name: "Elephant Toran — Yellow",
    price: 1459,
    category: "Home Decor",
    categorySlug: "home-decor",
    description:
      "A vibrant yellow macrame toran featuring handcrafted leaf patterns and a decorative wooden elephant pendant with colorful cross-stitch detail. Perfect as a door hanging for your home entrance or festive decor.",
    images: ["/images/products/toran-yellow.jpg"],
    materials: "Cotton cord, wooden elephant pendant, wooden ring",
    dimensions: "Length: ~24 inches",
    featured: true,
    inStock: true,
    type: "ready-to-ship",
    careInstructions:
      "Dust gently with a soft brush. Spot clean with mild soap if needed. Keep away from direct rain.",
  },
  {
    id: "hd-002",
    slug: "macrame-elephant-toran-set-of-4",
    name: "Elephant Toran — Set of 4",
    price: 5499,
    category: "Home Decor",
    categorySlug: "home-decor",
    description:
      "A stunning set of four macrame torans in yellow, dark pink, and light pink — each featuring intricate leaf knotwork and a hand-painted wooden elephant. Transform your doorway with these vibrant handcrafted pieces.",
    images: ["/images/products/toran-set.jpg"],
    materials: "Cotton cord, wooden elephant pendants, wooden rings",
    dimensions: "Each ~24 inches long",
    badge: "Bestseller",
    featured: true,
    inStock: true,
    type: "made-to-order",
    careInstructions:
      "Dust gently with a soft brush. Spot clean with mild soap if needed.",
  },
  {
    id: "hd-003",
    slug: "macrame-heart-wall-hanging-lavender",
    name: "Heart Wall Hanging — Lavender",
    price: 380,
    category: "Home Decor",
    categorySlug: "home-decor",
    description:
      "A delicate lavender heart wall hanging with a wooden bead accent and soft tassel. A lovely addition to any room — nursery, bedroom, or living space.",
    images: ["/images/products/heart-lavender.jpg"],
    materials: "Cotton cord, wooden bead",
    dimensions: "Height: ~8 inches",
    inStock: true,
    type: "ready-to-ship",
  },
  {
    id: "hd-004",
    slug: "macrame-heart-wall-hanging-yellow",
    name: "Heart Wall Hanging — Yellow",
    price: 380,
    category: "Home Decor",
    categorySlug: "home-decor",
    description:
      "A cheerful yellow heart wall hanging with a wooden bead accent and soft tassel. Handknotted with precision to add a warm pop of color to any wall.",
    images: ["/images/products/heart-yellow.jpg"],
    materials: "Cotton cord, wooden bead",
    dimensions: "Height: ~8 inches",
    inStock: true,
    type: "ready-to-ship",
  },
  {
    id: "hd-005",
    slug: "macrame-red-leaf-toran",
    name: "Red Leaf Toran",
    price: 749,
    category: "Home Decor",
    categorySlug: "home-decor",
    description:
      "A striking red macrame toran with cascading leaf motifs and wooden beads. A beautiful traditional door hanging that blends heritage with modern macrame artistry.",
    images: ["/images/products/toran-red.png"],
    materials: "Cotton cord, wooden beads",
    dimensions: "Length: ~30 inches",
    featured: true,
    inStock: true,
    type: "ready-to-ship",
  },
  {
    id: "hd-006",
    slug: "macrame-spiral-coasters-set-of-3",
    name: "Spiral Coasters — Set of 3",
    price: 449,
    category: "Home Decor",
    categorySlug: "home-decor",
    description:
      "A vibrant set of three macrame coasters in mustard, coral pink, and hot pink. Each coaster features a mesmerizing spiral pattern with fringed edges — functional art for your table.",
    images: ["/images/products/coasters.jpg"],
    materials: "Cotton cord",
    dimensions: "Diameter: ~5 inches each",
    inStock: true,
    type: "ready-to-ship",
  },
  // Gifts & Festive
  {
    id: "gf-001",
    slug: "macrame-flower-diya-holder-red",
    name: "Flower Diya Holder — Red",
    price: 449,
    category: "Gifts & Festive",
    categorySlug: "gifts-festive",
    description:
      "A stunning red macrame flower-shaped tea light holder. Perfect for Diwali decor, pujas, or as a year-round decorative accent. Holds a standard tea light candle securely.",
    images: ["/images/products/diya-holders.jpg"],
    materials: "Cotton cord",
    dimensions: "Diameter: ~6 inches",
    badge: "Festive",
    featured: true,
    inStock: true,
    type: "ready-to-ship",
  },
  {
    id: "gf-002",
    slug: "macrame-flower-bouquet",
    name: "Macrame Flower Bouquet",
    price: 1249,
    category: "Gifts & Festive",
    categorySlug: "gifts-festive",
    description:
      "A one-of-a-kind macrame flower bouquet wrapped in jute — featuring handknotted lavender, yellow, and cream blooms. A gift that will never wilt. Perfect for birthdays, housewarmings, or just because.",
    images: ["/images/products/bouquet.png"],
    materials: "Cotton cord, jute wrapping",
    dimensions: "Height: ~12 inches",
    badge: "Unique Gift",
    inStock: true,
    type: "made-to-order",
  },
  // Wearables
  {
    id: "wr-001",
    slug: "macrame-scallop-hoop-earrings-teal",
    name: "Scallop Hoop Earrings — Teal",
    price: 200,
    category: "Wearables",
    categorySlug: "wearables",
    description:
      "Striking teal macrame hoop earrings with a scalloped loop pattern. Lightweight, bold, and handcrafted — the perfect statement accessory for a boho-chic look.",
    images: ["/images/products/earrings-teal.jpg"],
    materials: "Cotton cord, gold-plated hooks",
    featured: true,
    inStock: true,
    type: "ready-to-ship",
  },
  {
    id: "wr-002",
    slug: "macrame-scallop-hoop-earrings-pink",
    name: "Scallop Hoop Earrings — Pink",
    price: 200,
    category: "Wearables",
    categorySlug: "wearables",
    description:
      "Elegant pink macrame hoop earrings with a delicate scalloped loop pattern. Lightweight and comfortable for all-day wear.",
    images: ["/images/products/earrings-pink.jpg"],
    materials: "Cotton cord, gold-plated hooks",
    inStock: true,
    type: "ready-to-ship",
  },
  {
    id: "wr-003",
    slug: "macrame-tassel-drop-earrings-maroon",
    name: "Tassel Drop Earrings — Maroon & Cream",
    price: 180,
    category: "Wearables",
    categorySlug: "wearables",
    description:
      "Elegant macrame drop earrings featuring a twisted rope design with a maroon accent wrap and flowing cream tassels. Handcrafted for a bohemian yet refined look.",
    images: ["/images/products/earrings-tassel.jpg"],
    materials: "Cotton cord, gold-plated hooks",
    inStock: true,
    type: "ready-to-ship",
  },
  {
    id: "wr-004",
    slug: "macrame-boho-fringe-sling-bag",
    name: "Boho Fringe Sling Bag — Cream",
    price: 1299,
    category: "Wearables",
    categorySlug: "wearables",
    description:
      "A stunning cream macrame sling bag with a chevron weave pattern and fringe detail. Features a braided rope strap with gold hardware. Spacious enough for essentials, stylish enough for any occasion.",
    images: ["/images/products/sling-bag.jpg"],
    materials: "Cotton cord, gold hardware, inner lining",
    dimensions: "Width: ~9 inches, Height: ~6 inches",
    badge: "New",
    featured: true,
    inStock: true,
    type: "ready-to-ship",
  },
  {
    id: "wr-005",
    slug: "macrame-net-phone-bag-silver",
    name: "Net Phone Bag — Silver",
    price: 1529,
    category: "Wearables",
    categorySlug: "wearables",
    description:
      "A chic silver macrame net phone bag with a lattice design. Carries your phone in style — perfect for concerts, markets, or a hands-free day out.",
    images: ["/images/products/phone-bag.jpg"],
    materials: "Polyester cord, rhinestones",
    inStock: true,
    type: "ready-to-ship",
  },
  // Accessories
  {
    id: "ac-001",
    slug: "macrame-flower-keychains-assorted",
    name: "Flower Keychains — Assorted Colors",
    price: 160,
    category: "Accessories",
    categorySlug: "accessories",
    description:
      "Colorful handmade macrame flower keychains with tassels. Available in multiple vibrant color combinations. The perfect small gift or a little something to brighten your everyday carry.",
    images: ["/images/products/keychains.jpg"],
    materials: "Cotton cord, lobster clasp",
    badge: "Gift Idea",
    featured: true,
    inStock: true,
    type: "ready-to-ship",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllCategories(): Category[] {
  return categories;
}
