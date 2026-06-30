import Link from "next/link";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="section-shell flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-electric">
        Page not found
      </p>
      <h1 className="max-w-2xl font-display text-4xl font-bold text-silver md:text-6xl">
        This guide is off the map.
      </h1>
      <p className="mt-5 max-w-xl text-base font-medium leading-7 text-muted">
        The page you are looking for is unavailable or has moved.
      </p>
      <Button asChild className="mt-8">
        <Link href="/products">Back to Store</Link>
      </Button>
    </section>
  );
}
