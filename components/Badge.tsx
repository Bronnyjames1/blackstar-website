import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-electric/40 bg-electric/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-silver shadow-[0_0_18px_rgba(163,94,212,0.22)]">
      {children}
    </span>
  );
}
