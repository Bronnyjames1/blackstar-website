import { ProductGrid } from "@/components/ProductGrid";
import { getVisibleProducts } from "@/data/products";

export const metadata = {
  title: "Blackstar Services"
};

export default function ProductsPage() {
  const visibleProducts = getVisibleProducts();

  return (
    <section className="section-shell py-16">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-electric">
          Store
        </p>
        <h1 className="mt-3 font-display text-4xl font-black text-silver md:text-6xl">
          View All Products
        </h1>
        <p className="mt-5 text-base font-medium leading-7 text-muted">
          Browse all of our game ebooks for improved gameplay. Instant Checkout and Delivery.
        </p>
      </div>
      <ProductGrid products={visibleProducts} />
    </section>
  );
}
