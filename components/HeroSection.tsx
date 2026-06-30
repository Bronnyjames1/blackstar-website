import Image from "next/image";
import Link from "next/link";
import { Download, LifeBuoy, ShieldCheck, Sparkles } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { Button } from "@/components/Button";

const vaultItems = [
  { label: "Instant digital access", icon: Download },
  { label: "Secure checkout ready", icon: ShieldCheck },
  { label: "Support for order help", icon: LifeBuoy }
];

export function HeroSection() {
  return (
    <section className="section-shell nebula-section relative grid min-h-[calc(100vh-112px)] items-center gap-10 py-12 lg:grid-cols-[1fr_0.86fr]">
      <div className="relative z-10">
        <div className="mb-7">
          <BrandLogo className="mb-5" />
          <div className="inline-flex items-center gap-2 rounded-full border border-electric/35 bg-electric/12 px-4 py-2 text-sm font-bold text-silver shadow-purple">
            <Sparkles className="h-4 w-4 text-electric" aria-hidden="true" />
            Cheap and Undetected. Instant Access.
          </div>
        </div>
        <h1 className="max-w-4xl font-display text-5xl font-black leading-[1.02] text-silver drop-shadow-[0_0_24px_rgba(163,94,212,0.45)] md:text-7xl">
          Blackstar Game Guides
        </h1>
        <p className="mt-6 max-w-2xl text-xl font-medium leading-8 text-muted">
          Affordable Products built to help you play Better.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
          Premium digital guide ebooks with fast access, unmatched quality,
          and available support.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild href="/products">
            <Link href="/products">View Products</Link>
          </Button>
          <Button asChild href="/contact" variant="secondary">
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-6 rounded-[2rem] bg-electric/18 blur-3xl" />
        <div className="glass-card relative overflow-hidden rounded-lg">
          <div className="relative aspect-[5/2] min-h-[220px]">
            <Image
              src="/brand/blackstar-banner.png"
              alt="Blackstar purple space banner"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian/10 via-transparent to-obsidian/20" />
          </div>
          <div className="grid gap-3 border-t border-electric/20 bg-obsidian/72 p-4 backdrop-blur-md sm:grid-cols-3">
            {vaultItems.map(({ label, icon: Icon }) => (
              <div
                className="flex items-center gap-3 rounded-lg border border-electric/25 bg-graphite/72 p-3"
                key={label}
              >
                <Icon className="h-5 w-5 shrink-0 text-electric" aria-hidden="true" />
                <span className="text-sm font-bold text-silver">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
