export const KOMERZA_STORE_ID = "b6da330b-e962-432b-97e9-f7102dfa79d8";

export type KomerzaVariant = {
  productId: string;
  variantId: string;
};

export type PurchaseOption = {
  id: string;
  label: string;
  duration: string;
  price: string;
  compareAtPrice?: string;
  badge?: string;
  // Legacy fallback only. Real checkout uses komerza.productId and komerza.variantId.
  checkoutUrl: string;
  komerza: KomerzaVariant;
  description: string;
};

export type Product = {
  slug: string;
  isVisible: boolean;
  name: string;
  game: "Rust" | "COD";
  category: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
  mainImage: string;
  galleryImages: string[];
  features: string[];
  whatsIncluded: string[];
  fileType: string;
  lastUpdated: string;
  checkoutUrl: string;
  purchaseOptions: PurchaseOption[];
  badge: string;
};

export const products: Product[] = [
  {
    slug: "blackstar-rust",
    // Set to false to hide this product from the public website without deleting it.
    isVisible: true,
    // Edit this product name when you upload your real guide.
    name: "Blackstar Rust",
    game: "Rust",
    category: "Survival Strategy",
    // Short card text shown on product grids and featured sections.
    shortDescription:
      "Program designed specifically to improve your aim and visuals in Rust.",
    // Longer sales description shown on the product detail page.
    fullDescription:
      "Built for players who want a to win. This downloadable guide focuses on legitimate gameplay improvement.",
    // Replace with your real price.
    price: "$14.99",
    // Upload replacement images to /public/products/ and update these paths.
    mainImage: "/products/BlackstarRust.png",
    galleryImages: [
      "/products/BlackstarRust.png",
    ],
    features: [
      "Aiming enhancement",
      "Better view of enemy players",
      "See items easier such as crates and nodes",
      "Customizable language and overlay buttons support"
    ],
    whatsIncluded: [
      "Downloadable ebook",
      "Access to Discord channels",
      "Full Guide and Support",
    ],
    fileType: "PDF",
    lastUpdated: "June 2026",
    // Legacy fallback checkout link. New product pages use purchaseOptions below.
    checkoutUrl: "https://checkout.komerza.com/placeholder-rust-1",
    purchaseOptions: [
      {
        id: "day",
        label: "1 Day Access",
        duration: "24 hours",
        price: "$3.99",
        badge: "Starter",
        description: "Short-term access to this product.",
        checkoutUrl: "legacy-fallback-only",
        komerza: {
          productId: "e942201f-b87e-437f-8eb7-4e1542abe6e0",
          variantId: "cc48b894-febf-4dc5-ba37-0f81205d18ec"
        }
      },
      {
        id: "week",
        label: "7 Day Access",
        duration: "7 days",
        price: "$14.99",
        compareAtPrice: "$19.99",
        badge: "Popular",
        description: "One week of access to this product.",
        checkoutUrl: "legacy-fallback-only",
        komerza: {
          productId: "e942201f-b87e-437f-8eb7-4e1542abe6e0",
          variantId: "9e7586a3-889e-4418-af09-4afed8d95ad0"
        }
      },
      {
        id: "month",
        label: "30 Day Access",
        duration: "30 days",
        price: "$26.99",
        compareAtPrice: "$34.99",
        badge: "Best Value",
        description: "Thirty days of access to this product.",
        checkoutUrl: "legacy-fallback-only",
        komerza: {
          productId: "e942201f-b87e-437f-8eb7-4e1542abe6e0",
          variantId: "2674c9d8-ea31-46df-b64c-be2db49407dc"
        }
      }
    ],
    badge: "Best Seller"
  },
  {
    slug: "rust-guide-product-2",
    // Set to false to hide this product from the public website without deleting it.
    isVisible: true,
    name: "Rust Legit",
    game: "Rust",
    category: "Base & Progression",
    shortDescription:
      "Legit Rust Ebook designed for security.",
    fullDescription:
      "This guide is designed for Rust players who want a stronger view of players and recoil control.",
    price: "$19.99",
    mainImage: "/products/RustLegit.png",
    galleryImages: [
      "/products/RustLegit.png",
    ],
    features: [
      "Better view of enemies",
      "Full recoil control",
      "See world items like dropped weapons",
    ],
    whatsIncluded: [
      "Downloadable ebook",
      "Full Support Via Discord",
      "Windows 10 + 11 Supported",
    ],
    fileType: "PDF",
    lastUpdated: "June 2026",
    checkoutUrl: "https://checkout.komerza.com/placeholder-rust-2",
    purchaseOptions: [
      {
        id: "day",
        label: "1 Day Access",
        duration: "24 hours",
        price: "$3.99",
        badge: "Starter",
        description: "Short-term access to this product.",
        checkoutUrl: "legacy-fallback-only",
        komerza: {
          productId: "6dcf826f-0c35-4bcc-a8fd-c20624052acf",
          variantId: "62429060-7821-4b01-8521-a7bcb5be412f"
        }
      },
      {
        id: "week",
        label: "7 Day Access",
        duration: "7 days",
        price: "$14.99",
        compareAtPrice: "$19.99",
        badge: "Popular",
        description: "One week of access to this product.",
        checkoutUrl: "legacy-fallback-only",
        komerza: {
          productId: "6dcf826f-0c35-4bcc-a8fd-c20624052acf",
          variantId: "7d9895f2-3eaf-4c36-b87a-91ca318f5696"
        }
      },
      {
        id: "month",
        label: "30 Day Access",
        duration: "30 days",
        price: "$25.99",
        compareAtPrice: "$34.99",
        badge: "Best Value",
        description: "Thirty days of access to this product.",
        checkoutUrl: "legacy-fallback-only",
        komerza: {
          productId: "6dcf826f-0c35-4bcc-a8fd-c20624052acf",
          variantId: "dc2c78d5-040a-411f-bc0a-1b449dad5d1f"
        }
      }
    ],
    badge: "Updated"
  },
  {
    slug: "cod-guide-product-1",
    // Set to false to hide this product from the public website without deleting it.
    isVisible: false,
    name: "COD Guide Product 1",
    game: "COD",
    category: "Shooter Fundamentals",
    shortDescription:
      "A COD improvement guide for sharper positioning, cleaner loadout thinking, and better match habits.",
    fullDescription:
      "A premium digital guide for players who want to improve their Call of Duty fundamentals through legitimate practice, smarter positioning, and repeatable match routines. No cheats, hacks, bypasses, or prohibited software are included.",
    price: "$12.99",
    mainImage: "/products/cod-guide-1.png",
    galleryImages: [
      "/products/cod-guide-1.png",
      "/products/rust-guide-1.png",
      "/products/rust-guide-2.png"
    ],
    features: [
      "Positioning and rotation principles",
      "Loadout decision framework",
      "Practice routines for consistent improvement",
      "Simple match review checklist"
    ],
    whatsIncluded: [
      "Downloadable PDF ebook",
      "Loadout planning guide",
      "Practice checklist",
      "Gameplay review notes"
    ],
    fileType: "PDF",
    lastUpdated: "June 2026",
    checkoutUrl: "https://checkout.komerza.com/placeholder-cod-1",
    purchaseOptions: [
      {
        id: "day",
        label: "1 Day Access",
        duration: "24 hours",
        price: "$4.99",
        badge: "Starter",
        description: "Short-term access to this guide.",
        checkoutUrl: "legacy-fallback-only",
        komerza: {
          productId: "hidden-cod-product-id-placeholder",
          variantId: "hidden-cod-day-variant-id-placeholder"
        }
      },
      {
        id: "week",
        label: "7 Day Access",
        duration: "7 days",
        price: "$12.99",
        compareAtPrice: "$14.99",
        badge: "Popular",
        description: "One week of access to this guide.",
        checkoutUrl: "legacy-fallback-only",
        komerza: {
          productId: "hidden-cod-product-id-placeholder",
          variantId: "hidden-cod-week-variant-id-placeholder"
        }
      },
      {
        id: "month",
        label: "30 Day Access",
        duration: "30 days",
        price: "$24.99",
        compareAtPrice: "$29.99",
        badge: "Best Value",
        description: "Thirty days of access to this guide.",
        checkoutUrl: "legacy-fallback-only",
        komerza: {
          productId: "hidden-cod-product-id-placeholder",
          variantId: "hidden-cod-month-variant-id-placeholder"
        }
      }
    ],
    badge: "New"
  }
];

export const games = ["All", "Rust", "COD"] as const;

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getVisibleProducts() {
  return products.filter((product) => product.isVisible);
}

export function getVisibleProductBySlug(slug: string) {
  return getVisibleProducts().find((product) => product.slug === slug);
}

export function getVisibleGames() {
  const visibleGames = Array.from(
    new Set(getVisibleProducts().map((product) => product.game))
  );

  return ["All", ...visibleGames];
}

export function getStartingPrice(product: Product) {
  const sortedOptions = [...product.purchaseOptions].sort(
    (a, b) => priceToNumber(a.price) - priceToNumber(b.price)
  );

  return sortedOptions[0]?.price ?? product.price;
}

export function getRelatedProducts(product: Product) {
  return getVisibleProducts()
    .filter((item) => item.slug !== product.slug)
    .sort((a, b) => Number(b.game === product.game) - Number(a.game === product.game))
    .slice(0, 3);
}

function priceToNumber(price: string) {
  return Number(price.replace(/[^0-9.]/g, "")) || 0;
}
