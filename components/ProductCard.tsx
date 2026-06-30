import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getStartingPrice, Product } from "@/data/products";
import { Badge } from "@/components/Badge";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="glass-card group overflow-hidden rounded-lg transition duration-200 hover:-translate-y-1 hover:border-electric/60 hover:shadow-[0_0_36px_rgba(163,94,212,0.32)]">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-steel">
          <Image
            src={product.mainImage}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-300 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4">
            <Badge>{product.badge}</Badge>
          </div>
        </div>
      </Link>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-electric">
            {product.game}
          </p>
          <p className="text-lg font-black text-silver">
            From {getStartingPrice(product)}
          </p>
        </div>
        <h3 className="mt-3 font-display text-xl font-bold text-silver">
          {product.name}
        </h3>
        <p className="mt-3 min-h-16 text-sm font-medium leading-6 text-muted">
          {product.shortDescription}
        </p>
        <Link
          href={`/products/${product.slug}`}
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet to-electric px-4 py-2 text-sm font-bold text-white shadow-purple transition hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(163,94,212,0.5)]"
        >
          View Guide
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
