"use client";

import Script from "next/script";
import { useState } from "react";
import { KOMERZA_STORE_ID } from "@/data/products";

export function KomerzaProvider() {
  const [loadError, setLoadError] = useState(false);

  return (
    <>
      <Script
        src="https://cdn.komerza.com/komerza.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          try {
            window.komerza?.init(KOMERZA_STORE_ID);
            setLoadError(false);
          } catch (error) {
            console.error("Komerza initialization failed", error);
            setLoadError(true);
          }
        }}
        onError={() => {
          console.error("Komerza script failed to load");
          setLoadError(true);
        }}
      />
      {loadError && (
        <span className="sr-only">
          Komerza checkout is temporarily unavailable.
        </span>
      )}
    </>
  );
}
