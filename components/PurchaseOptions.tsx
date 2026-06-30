"use client";

import { useMemo, useState } from "react";
import type { PurchaseOption } from "@/data/products";
import { KomerzaCheckoutButton } from "@/components/KomerzaCheckoutButton";

type PurchaseOptionsProps = {
  options: PurchaseOption[];
  productName: string;
};

export function PurchaseOptions({ options, productName }: PurchaseOptionsProps) {
  const defaultOption = useMemo(
    () => options.find((option) => option.id === "week") ?? options[0],
    [options]
  );
  const [selectedOption, setSelectedOption] = useState<PurchaseOption | undefined>(
    defaultOption
  );

  return (
    <div className="mt-7">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-electric">
            Choose access
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-silver">
            Select your access length
          </h2>
        </div>
        <div className="rounded-lg border border-electric/25 bg-graphite/60 px-4 py-3 text-left sm:text-right">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
            Selected price
          </p>
          <p className="text-2xl font-black text-silver">
            {selectedOption?.price ?? "Select option"}
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-3">
        {options.map((option) => {
          const isSelected = selectedOption?.id === option.id;

          return (
            <button
              className={`rounded-lg border p-4 text-left transition duration-200 ${
                isSelected
                  ? "border-electric bg-electric/15 shadow-[0_0_28px_rgba(163,94,212,0.42)]"
                  : "border-electric/20 bg-graphite/60 hover:-translate-y-0.5 hover:border-electric/60 hover:bg-electric/10"
              }`}
              key={option.id}
              onClick={() => setSelectedOption(option)}
              type="button"
            >
              <span className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <span>
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="text-lg font-black text-silver">
                      {option.label}
                    </span>
                    {option.badge && (
                      <span className="rounded-full border border-electric/35 bg-electric/15 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-silver">
                        {option.badge}
                      </span>
                    )}
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-electric">
                    {option.duration}
                  </span>
                  <span className="mt-2 block text-sm font-medium leading-6 text-muted">
                    {option.description}
                  </span>
                </span>
                <span className="text-left sm:text-right">
                  {option.compareAtPrice && (
                    <span className="block text-sm font-bold text-muted line-through">
                      {option.compareAtPrice}
                    </span>
                  )}
                  <span className="block text-2xl font-black text-silver">
                    {option.price}
                  </span>
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <KomerzaCheckoutButton
        productName={productName}
        selectedOption={selectedOption}
      />
    </div>
  );
}
