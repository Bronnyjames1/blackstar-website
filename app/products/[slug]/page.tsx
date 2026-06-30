import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { ProductCard } from "@/components/ProductCard";
import { ProductImageGallery } from "@/components/ProductImageGallery";
import { PurchaseOptions } from "@/components/PurchaseOptions";
import {
  getRelatedProducts,
  getVisibleProductBySlug,
  getVisibleProducts
} from "@/data/products";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getVisibleProducts().map((product) => ({
    slug: product.slug
  }));
}

export function generateMetadata({ params }: PageProps) {
  const product = getVisibleProductBySlug(params.slug);

  return {
    title: product ? `${product.name} | Blackstar` : "Blackstar Services"
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = getVisibleProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);

  return (
    <section className="section-shell py-12">
      <Button asChild href="/products" variant="ghost" className="mb-8 px-0">
        <Link href="/products">
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          Back to Store
        </Link>
      </Button>

      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <ProductImageGallery
          images={product.galleryImages}
          productName={product.name}
        />

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <Badge>{product.badge}</Badge>
            <span className="rounded-full border border-electric/25 bg-graphite/60 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-muted">
              {product.game}
            </span>
          </div>
          <h1 className="mt-5 font-display text-4xl font-black leading-tight text-silver md:text-6xl">
            {product.name}
          </h1>
          <p className="mt-4 text-sm font-bold uppercase tracking-[0.22em] text-electric">
            {product.category}
          </p>
          <p className="mt-5 text-sm font-bold uppercase tracking-[0.22em] text-muted">
            Access starts at{" "}
            <span className="text-xl text-silver">
              {product.purchaseOptions[0]?.price ?? product.price}
            </span>
          </p>
          <p className="mt-5 text-base font-medium leading-8 text-muted">
            {product.fullDescription}
          </p>

          <div className="glass-card mt-6 grid gap-3 rounded-lg p-5 sm:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
                Status
              </p>
              <p className="mt-1 font-bold text-green-400">Running</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
                Last updated
              </p>
              <p className="mt-1 font-bold text-silver">{product.lastUpdated}</p>
            </div>
          </div>

          <PurchaseOptions
            options={product.purchaseOptions}
            productName={product.name}
          />

          <Button asChild href="/products" variant="secondary" className="mt-4">
            <Link href="/products">Back to Store</Link>
          </Button>
        </div>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <InfoList title="Features" items={product.features} />
        <InfoList title="What's included" items={product.whatsIncluded} />
      </div>

      <div className="mt-16">
        <h2 className="font-display text-3xl font-bold text-silver">Related guides</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {relatedProducts.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="glass-card rounded-lg p-6">
      <h2 className="font-display text-2xl font-bold text-silver">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li className="flex gap-3 text-sm font-medium leading-6 text-muted" key={item}>
            <Check className="mt-1 h-4 w-4 shrink-0 text-electric" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}