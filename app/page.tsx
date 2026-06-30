import Link from "next/link";
import { BookOpen, Clock, RefreshCw, UserRoundCheck } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { ProductCard } from "@/components/ProductCard";
import { FAQItem } from "@/components/FAQItem";
import { Button } from "@/components/Button";
import { faqs } from "@/data/faqs";
import { getVisibleProducts } from "@/data/products";

const reasons = [
  {
    title: "Instant access",
    copy: "Digital delivery is designed for quick access after checkout.",
    icon: Clock
  },
  {
    title: "Clear step-by-step guides",
    copy: "Readable sections help you move from concept to in-game decisions.",
    icon: BookOpen
  },
  {
    title: "Updated strategies",
    copy: "Product pages show the latest guide update date before purchase.",
    icon: RefreshCw
  },
  {
    title: "Beginner-friendly",
    copy: "Practical explanations for players building better habits.",
    icon: UserRoundCheck
  }
];

export default function HomePage() {
  const featuredProducts = getVisibleProducts();

  return (
    <>
      <HeroSection />

      <section className="section-shell py-14">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-electric">
              Featured guides
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-silver md:text-4xl">
              Start with the current lineup
            </h2>
          </div>
          <Button asChild href="/products" variant="secondary">
            <Link href="/products">View All Guides</Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="section-shell py-14">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-electric">
              Why Blackstar
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-silver md:text-4xl">
              Premium guidance without the sketch.
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-muted">
              Blackstar is built around legitimate digital guide ebooks:
              cleaner decisions, better routines, and trustworthy checkout
              paths.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <article
                className="glass-card rounded-lg p-5"
                key={reason.title}
              >
                <reason.icon className="h-6 w-6 text-electric" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-silver">{reason.title}</h3>
                <p className="mt-2 text-sm font-medium leading-6 text-muted">
                  {reason.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-14">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-electric">
              FAQ
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-silver md:text-4xl">
              Straight answers before checkout
            </h2>
          </div>
          <Button asChild href="/faq" variant="ghost">
            <Link href="/faq">Open FAQ</Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.slice(0, 4).map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </section>
    </>
  );
}