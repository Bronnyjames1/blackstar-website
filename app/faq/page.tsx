import { FAQItem } from "@/components/FAQItem";
import { faqs } from "@/data/faqs";

export const metadata = {
  title: "FAQ | Blackstar"
};

export default function FAQPage() {
  return (
    <section className="section-shell py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-electric">
          FAQ
        </p>
        <h1 className="mt-3 font-display text-4xl font-black text-silver md:text-6xl">
          Questions before you buy
        </h1>
        <p className="mt-5 text-base font-medium leading-7 text-muted">
          Simple answers about delivery, refunds, updates, and what Blackstar
          does and does not sell.
        </p>
      </div>
      <div className="mt-10 grid gap-4">
        {faqs.map((faq) => (
          <FAQItem key={faq.question} {...faq} />
        ))}
      </div>
    </section>
  );
}
