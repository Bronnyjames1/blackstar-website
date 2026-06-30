import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  compact?: boolean;
  className?: string;
};

export function BrandLogo({ compact = false, className = "" }: BrandLogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <span className="relative h-12 w-12 overflow-hidden rounded-lg border border-electric/40 bg-graphite shadow-purple">
        <Image
          src="/brand/blackstar-logo.png"
          alt="Blackstar logo"
          fill
          sizes="48px"
          className="object-contain p-1"
        />
      </span>
      {!compact && (
        <span>
          <span className="block font-display text-lg font-black uppercase text-silver drop-shadow-[0_0_12px_rgba(163,94,212,0.45)]">
            Blackstar
          </span>
          <span className="hidden text-xs font-semibold text-muted sm:block">
            Cheap and Undetected. Instant Access.
          </span>
        </span>
      )}
    </Link>
  );
}
