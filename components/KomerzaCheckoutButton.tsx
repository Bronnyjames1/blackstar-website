"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { KOMERZA_STORE_ID, type PurchaseOption } from "@/data/products";

type KomerzaCheckoutButtonProps = {
  productName: string;
  selectedOption?: PurchaseOption;
};

export function KomerzaCheckoutButton({
  productName,
  selectedOption
}: KomerzaCheckoutButtonProps) {
  const [email, setEmail] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  async function handleCheckout() {
    setErrorMessage("");

    if (!email.trim()) {
      setErrorMessage("Enter your email address to continue.");
      return;
    }

    if (!isValidEmail(email)) {
      setErrorMessage("Enter a valid email address.");
      return;
    }

    if (!selectedOption) {
      setErrorMessage("Select an access option before checkout.");
      return;
    }

    if (!window.komerza) {
      setErrorMessage(
        "Komerza checkout is still loading. Please wait a moment and try again."
      );
      return;
    }

    setIsProcessing(true);
    let backupCreated = false;

    try {
      await window.komerza.init(KOMERZA_STORE_ID);
      await window.komerza.clearBasket();
      await window.komerza.addToBasket(
        selectedOption.komerza.productId,
        selectedOption.komerza.variantId,
        1
      );
      await window.komerza.createBasketBackup();
      backupCreated = true;

      const result = await window.komerza.checkout(
        email.trim(),
        couponCode.trim() || undefined
      );

      if (result && result.success === false) {
        await restoreBasket(backupCreated);
        setErrorMessage(
          result.message ||
            result.error ||
            "Checkout failed. Please check your details and try again."
        );
      }
    } catch (error) {
      await restoreBasket(backupCreated);
      setErrorMessage(getCheckoutErrorMessage(error));
    } finally {
      setIsProcessing(false);
    }
  }

  return (
    <div className="mt-6 rounded-lg border border-electric/25 bg-graphite/55 p-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-silver">
          Email address
          <input
            className="rounded-lg border border-electric/20 bg-obsidian/70 px-4 py-3 text-silver outline-none transition placeholder:text-muted/60 focus:border-electric focus:shadow-purple"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            type="email"
            value={email}
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-silver">
          Coupon code
          <input
            className="rounded-lg border border-electric/20 bg-obsidian/70 px-4 py-3 text-silver outline-none transition placeholder:text-muted/60 focus:border-electric focus:shadow-purple"
            onChange={(event) => setCouponCode(event.target.value)}
            placeholder="Optional"
            type="text"
            value={couponCode}
          />
        </label>
      </div>

      <button
        className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-violet to-electric px-5 py-3 text-sm font-bold text-white shadow-purple transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(163,94,212,0.58)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
        disabled={isProcessing || !selectedOption}
        onClick={handleCheckout}
        type="button"
      >
        <ShoppingCart className="mr-2 h-4 w-4" aria-hidden="true" />
        {isProcessing
          ? "Opening Checkout..."
          : `Buy ${selectedOption?.label ?? productName}`}
      </button>

      {errorMessage && (
        <p className="mt-3 rounded-lg border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-100">
          {errorMessage}
        </p>
      )}

      <p className="mt-4 text-sm font-semibold text-muted">
        Secure checkout powered by Komerza. Instant digital delivery.
      </p>
    </div>
  );
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

async function restoreBasket(backupCreated: boolean) {
  if (backupCreated && window.komerza) {
    try {
      await window.komerza.restoreBasketFromBackup();
    } catch (restoreError) {
      console.error("Unable to restore Komerza basket backup", restoreError);
    }
  }
}

function getCheckoutErrorMessage(error: unknown) {
  if (error instanceof Error && error.message) {
    return error.message;
  }

  return "Checkout could not be started. Please check your connection and try again.";
}
