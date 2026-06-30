"use client";

import { useMemo, useState } from "react";
import { getVisibleGames, Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export function ProductGrid({ products }: { products: Product[] }) {
  const games = getVisibleGames();
  const [activeGame, setActiveGame] = useState("All");

  const visibleProducts = useMemo(() => {
    if (activeGame === "All") {
      return products;
    }

    return products.filter((product) => product.game === activeGame);
  }, [activeGame, products]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-3">
        {games.map((game) => (
          <button
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
              activeGame === game
                ? "border-electric bg-electric/20 text-silver shadow-purple"
                : "border-electric/20 bg-graphite/60 text-muted hover:border-electric/60 hover:text-silver"
            }`}
            key={game}
            onClick={() => setActiveGame(game)}
            type="button"
          >
            {game}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
