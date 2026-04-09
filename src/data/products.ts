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
    seoTitle: "Macrame Home Decor - Wall Hangings, Torans & More | Macrame Matrix",
    seoDescription:
      "Shop handmade macrame wall hangings, torans, coasters, and diya holders. Handcrafted with cotton cord in Pune, India.",
  },
  {
    slug: "wearables",
    name: "Wearables",
    description:
      "Handcrafted macrame earrings and bags that add a touch of boho elegance to any outfit.",
    image: "/images/products/earrings-teal.jpg",
    seoTitle: "Macrame Earrings & Bags - Handmade Wearable Art | Macrame Matrix",
    seoDescription:
      "Shop handmade macrame earrings, hoop earrings, and boho bags. Crafted with precision in Pune, India.",
  },
  {
    slug: "accessories",
    name: "Accessories",
    description:
      "Colorful macrame keychains, friendship bands, and small gifts - perfect for everyday joy or thoughtful gifting.",
    image: "/images/products/keychains.jpg",
    seoTitle: "Macrame Keychains & Accessories | Macrame Matrix",
    seoDescription:
      "Shop handmade macrame keychains, friendship bands, and accessories. Affordable handmade gifts from Pune, India.",
  },
  {
    slug: "gifts-festive",
    name: "Gifts & Festive",
    description:
      "Celebrate every occasion with handmade macrame - from Diwali diya holders to flower bouquets and wedding return gifts.",
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
    name: "Macrame Toran - Golden Yellow",
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
    slug: "macrame-elephant-toran-set-of-3",
    name: "Macrame Toran - Baby Pink, Rani & Golden Yellow",
    price: 4377,
    category: "Home Decor",
    categorySlug: "home-decor",
    description:
      "A stunning set of three macrame torans in baby pink, rani, and golden yellow - each featuring intricate leaf knotwork and a hand-painted wooden elephant. Transform your doorway with these vibrant handcrafted pieces.",
    images: ["/images/products/toran-set.jpg"],
    materials: "Cotton cord, wooden elephant pendants, wooden rings",
    dimensions: "Each ~24 inches long (set of 3 pairs)",
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
    name: "Macrame Heart Ornament - Lavender",
    price: 480,
    category: "Home Decor",
    categorySlug: "home-decor",
    description:
      "A delicate lavender heart wall hanging with a wooden bead accent and soft tassel. A lovely addition to any room - nursery, bedroom, or living space.",
    images: ["/images/products/heart-lavender.jpg"],
    materials: "Cotton cord, wooden bead",
    dimensions: "Height: ~8 inches",
    inStock: true,
    type: "ready-to-ship",
  },
  {
    id: "hd-004",
    slug: "macrame-heart-wall-hanging-yellow",
    name: "Macrame Heart Ornament - Yellow",
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
    name: "Macrame Wall Hanging Toran - Red (Set of 2)",
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
    slug: "macrame-coaster",
    name: "Macrame Coaster (Set of 2)",
    price: 450,
    category: "Home Decor",
    categorySlug: "home-decor",
    description:
      "A beautifully handknotted macrame coaster featuring a mesmerizing spiral pattern with fringed edges - functional art for your table. Set of 2 pieces. Available in multiple colors.",
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
    name: "Macrame Tea Light Diya Holder - Red",
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
      "A one-of-a-kind macrame flower bouquet wrapped in jute - featuring handknotted lavender, yellow, and cream blooms. A gift that will never wilt. Perfect for birthdays, housewarmings, or just because.",
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
    name: "Macrame Hoop Earrings - Teal Green",
    price: 200,
    category: "Wearables",
    categorySlug: "wearables",
    description:
      "Striking teal macrame hoop earrings with a scalloped loop pattern. Lightweight, bold, and handcrafted - the perfect statement accessory for a boho-chic look.",
    images: ["/images/products/earrings-teal.jpg"],
    materials: "Cotton cord, gold-plated hooks",
    featured: true,
    inStock: true,
    type: "ready-to-ship",
  },
  {
    id: "wr-002",
    slug: "macrame-scallop-hoop-earrings-pink",
    name: "Macrame Hoop Earrings - Baby Pink",
    price: 180,
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
    name: "Macrame Tassel Earrings - Off White with Maroon",
    price: 170,
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
    name: "Macrame Sling Bag with Fringes - Off White",
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
    name: "Macrame Rhinestone Phone Bag - Silver",
    price: 1529,
    category: "Wearables",
    categorySlug: "wearables",
    description:
      "A chic silver macrame net phone bag with a lattice design. Carries your phone in style - perfect for concerts, markets, or a hands-free day out.",
    images: ["/images/products/phone-bag.jpg"],
    materials: "Polyester cord, rhinestones",
    inStock: true,
    type: "ready-to-ship",
  },
  // Accessories
  {
    id: "ac-001",
    slug: "macrame-flower-keychains-assorted",
    name: "Macrame Flower Keychain",
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
  // Gifts & Festive - Christmas
  {
    id: "gf-003",
    slug: "macrame-christmas-bell-ornament",
    name: "Macrame Christmas Bell Ornament",
    price: 149,
    category: "Gifts & Festive",
    categorySlug: "gifts-festive",
    description:
      "A charming red macrame bell ornament, handknotted with intricate detail. Perfect for Christmas tree decoration or festive home decor.",
    images: ["/images/products/christmas-bell.jpg"],
    materials: "Cotton cord",
    badge: "Festive",
    inStock: true,
    type: "ready-to-ship",
  },
  {
    id: "gf-004",
    slug: "macrame-christmas-mini-wreath",
    name: "Macrame Christmas Mini Wreath",
    price: 129,
    category: "Gifts & Festive",
    categorySlug: "gifts-festive",
    description:
      "A delightful mini macrame wreath in red and pink with a decorative bow and wooden bead accent. A beautiful hanging ornament for Christmas trees or festive decor.",
    images: ["/images/products/christmas-wreath.jpg"],
    materials: "Cotton cord, wooden bead",
    badge: "Festive",
    inStock: true,
    type: "ready-to-ship",
  },
  {
    id: "gf-005",
    slug: "macrame-christmas-santa-gnome",
    name: "Macrame Christmas Santa Gnome",
    price: 159,
    category: "Gifts & Festive",
    categorySlug: "gifts-festive",
    description:
      "An adorable macrame Santa gnome with a tall red hat, glitter band, wooden bead nose, and soft fringed beard. A delightful Christmas ornament or gift.",
    images: ["/images/products/christmas-gnome.jpg"],
    materials: "Cotton cord, wooden bead, glitter ribbon",
    badge: "Festive",
    inStock: true,
    type: "ready-to-ship",
  },
  {
    id: "gf-006",
    slug: "macrame-santa-ornament",
    name: "Macrame Santa Ornament",
    price: 149,
    category: "Gifts & Festive",
    categorySlug: "gifts-festive",
    description:
      "A handknotted macrame Santa ornament on a cinnamon stick with a red tassel top, wooden bead, and flowing fringed beard. Adds a rustic, handmade charm to your Christmas tree.",
    images: ["/images/products/santa-ornament.jpg"],
    materials: "Cotton cord, cinnamon stick, wooden bead",
    badge: "Festive",
    inStock: true,
    type: "ready-to-ship",
  },
  {
    id: "gf-007",
    slug: "macrame-glass-jar",
    name: "Macrame Glass Jar",
    price: 579,
    category: "Gifts & Festive",
    categorySlug: "gifts-festive",
    description:
      "A beautiful macrame-wrapped glass jar candle holder in golden yellow with fringes and wooden bead accents. Creates a warm, ambient glow - perfect for Diwali, festive evenings, or everyday decor.",
    images: ["/images/products/glass-jar.png"],
    materials: "Cotton cord, glass jar, wooden beads",
    inStock: true,
    type: "ready-to-ship",
  },
  {
    id: "gf-008",
    slug: "macrame-tea-light-diya-holder-with-fringes",
    name: "Macrame Tea Light Diya Holder with Fringes (Set of 2)",
    price: 349,
    category: "Gifts & Festive",
    categorySlug: "gifts-festive",
    description:
      "A vibrant set of 2 macrame tea light diya holders with fringes - one in red and one in golden yellow. Circular design with beautiful fringe detail. Perfect for Diwali decor or festive gifting.",
    images: ["/images/products/diya-holder-fringes.jpg"],
    materials: "Cotton cord",
    dimensions: "Diameter: ~7 inches each",
    badge: "Festive",
    inStock: true,
    type: "ready-to-ship",
  },
  {
    id: "gf-009",
    slug: "macrame-tea-light-diya-holder-flower-large",
    name: "Macrame Tea Light Diya Holder - Red Flower (Set of 2)",
    price: 699,
    category: "Gifts & Festive",
    categorySlug: "gifts-festive",
    description:
      "A set of 2 large red macrame flower-shaped tea light holders with wooden bead accents on each petal. A bigger, more detailed version of our classic diya holder - perfect for Diwali decor and pujas.",
    images: ["/images/products/diya-holder-red-flower.jpg"],
    materials: "Cotton cord, wooden beads",
    dimensions: "Diameter: ~8 inches each",
    inStock: true,
    type: "ready-to-ship",
  },
  // Home Decor - Cross
  {
    id: "hd-007",
    slug: "macrame-mini-cross",
    name: "Macrame Mini Cross",
    price: 170,
    category: "Home Decor",
    categorySlug: "home-decor",
    description:
      "A handknotted macrame mini cross in teal. A simple yet meaningful piece for your wall, car mirror, or as a thoughtful gift. Made with cotton cord in a clean, textured knot pattern.",
    images: ["/images/products/mini-cross.jpg"],
    materials: "Cotton cord",
    dimensions: "Height: ~5 inches",
    inStock: true,
    type: "ready-to-ship",
  },
  // Wearables - Additional Bags
  {
    id: "wr-006",
    slug: "macrame-sling-bag-baby-pink",
    name: "Macrame Sling Bag - Baby Pink",
    price: 1499,
    category: "Wearables",
    categorySlug: "wearables",
    description:
      "A stylish macrame sling bag in baby pink and cream with a chevron weave pattern. Features a braided rope strap with gold hardware. Spacious enough for essentials, chic enough for any outing.",
    images: ["/images/products/sling-bag-pink.jpg"],
    materials: "Cotton cord, gold hardware",
    dimensions: "Width: ~9 inches, Height: ~6 inches",
    badge: "New",
    inStock: true,
    type: "ready-to-ship",
  },
  {
    id: "wr-007",
    slug: "macrame-sling-bag-golden-yellow",
    name: "Macrame Sling Bag - Golden Yellow",
    price: 1499,
    category: "Wearables",
    categorySlug: "wearables",
    description:
      "A bold golden yellow macrame sling bag with fringe detail and an intricate knotwork pattern. Features a braided rope strap with gold hardware. A statement piece for any outfit.",
    images: ["/images/products/sling-bag-yellow.jpg"],
    materials: "Cotton cord, gold hardware",
    dimensions: "Width: ~9 inches, Height: ~6 inches",
    badge: "New",
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
