import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Guides" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Support" },
  { href: "/terms", label: "Terms" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-electric/25 bg-obsidian/82 shadow-[0_10px_36px_rgba(104,40,144,0.18)] backdrop-blur-xl">
      <nav className="section-shell flex min-h-20 items-center justify-between gap-6">
        <BrandLogo />

        <div className="hidden items-center gap-1 rounded-full border border-electric/20 bg-graphite/55 p-1 md:flex">
          {links.map((link) => (
            <Link
              className="rounded-full px-4 py-2 text-sm font-bold text-muted transition hover:bg-electric/10 hover:text-silver hover:shadow-[0_0_18px_rgba(163,94,212,0.24)]"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/products"
          className="hidden items-center gap-2 rounded-lg border border-electric/40 bg-electric/10 px-4 py-2 text-sm font-bold text-silver transition hover:-translate-y-0.5 hover:border-electric hover:bg-electric/20 hover:shadow-purple sm:flex"
        >
          <ShieldCheck className="h-4 w-4 text-electric" aria-hidden="true" />
          Browse Guides
        </Link>
      </nav>
      <div className="section-shell flex gap-2 overflow-x-auto pb-4 md:hidden">
        {links.map((link) => (
          <Link
            className="shrink-0 rounded-full border border-electric/20 bg-graphite/60 px-4 py-2 text-sm font-semibold text-muted"
            href={link.href}
            key={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
