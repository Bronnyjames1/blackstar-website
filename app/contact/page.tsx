import { MessageCircle } from "lucide-react";
import { Button } from "@/components/Button";

const discordUrl = "https://discord.gg/nA48467kkX";

export const metadata = {
  title: "Support | Blackstar"
};

export default function ContactPage() {
  return (
    <section className="section-shell py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-electric">
          Support
        </p>
        <h1 className="mt-3 font-display text-4xl font-black text-silver md:text-6xl">
          Need support?
        </h1>
        <p className="mt-5 text-base font-medium leading-7 text-muted">
          Join the Blackstar Discord for order help, delivery questions, and
          product support.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-2xl">
        <div className="glass-card rounded-lg p-6 text-center md:p-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg border border-electric/35 bg-electric/15 shadow-purple">
            <MessageCircle className="h-8 w-8 text-electric" aria-hidden="true" />
          </div>

          <h2 className="mt-6 font-display text-3xl font-bold text-silver">
            Join Our Discord
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base font-medium leading-7 text-muted">
            Open a ticket in Discord for order help, delivery support, or product
            questions.
          </p>

          <Button
            className="mt-7 w-full sm:w-auto"
            href={discordUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Join Discord
          </Button>

          <p className="mt-4 text-sm font-semibold leading-6 text-muted">
            For order help, include your order email and order number if
            available.
          </p>
        </div>
      </div>
    </section>
  );
}
