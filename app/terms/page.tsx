export const metadata = {
  title: "Terms & Refund Policy | Blackstar"
};

const sections = [
  {
    title: "Digital delivery",
    copy: "Blackstar products are digital downloads delivered after purchase through the connected checkout and delivery flow. No physical products are shipped."
  },
  {
    title: "Refund policy",
    copy: "Because these are digital products, refunds are limited once a file has been accessed or downloaded. If a delivery problem occurs, contact support with your order information."
  },
  {
    title: "Customer responsibility",
    copy: "Customers are responsible for entering accurate email, payment, and order information. Incorrect details can delay delivery or support resolution."
  },
  {
    title: "Guide purpose",
    copy: "Guides are for educational and informational gameplay improvement only. They are intended to help players build better habits, make smarter decisions, and understand legitimate strategy."
  },
  {
    title: "No prohibited products",
    copy: "Blackstar does not sell any prohibited tools. Products are legitimate digital guide ebooks only."
  }
];

export default function TermsPage() {
  return (
    <section className="section-shell py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-electric">
          Policy
        </p>
        <h1 className="mt-3 font-display text-4xl font-black text-silver md:text-6xl">
          Terms & refund policy
        </h1>
        <p className="mt-5 text-base font-medium leading-7 text-muted">
          Placeholder policy copy for a digital guide store. Review with a
          qualified professional before publishing this as final legal text.
        </p>
      </div>

      <div className="mt-10 grid gap-5">
        {sections.map((section) => (
          <article
            className="glass-card rounded-lg p-6"
            key={section.title}
          >
            <h2 className="font-display text-xl font-bold text-silver">{section.title}</h2>
            <p className="mt-3 text-sm font-medium leading-7 text-muted">{section.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
