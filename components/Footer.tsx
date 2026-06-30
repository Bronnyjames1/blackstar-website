import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-electric/25 bg-[#08010f]/85 shadow-[0_-18px_42px_rgba(104,40,144,0.16)]">
      <div className="section-shell grid gap-10 py-10 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div>
          <BrandLogo />
          <p className="mt-4 max-w-md text-sm leading-6 text-muted">
            Cheap and Undetected. Instant Access. Blackstar provides digital
            guide ebooks for players who want fast delivery and clear product
            information.
          </p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-electric">
            Store
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm font-semibold text-muted">
            <Link href="/products">All Products</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Discord / Support</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-electric">
            Policy
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm font-semibold text-muted">
            <Link href="/terms">Terms & Refunds</Link>
            <Link href="/contact">Order Help</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-electric/15 py-5">
        <div className="section-shell flex flex-col gap-2 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Blackstar. All rights reserved.</p>
          <p>Become The Best.</p>
        </div>
      </div>
    </footer>
  );
}
