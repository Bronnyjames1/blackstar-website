"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductImageGallery({
  images,
  productName
}: {
  images: string[];
  productName: string;
}) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-electric/30 bg-steel shadow-purple">
        <Image
          src={activeImage}
          alt={productName}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {images.map((image, index) => (
          <button
            aria-label={`Show ${productName} image ${index + 1}`}
            className={`relative aspect-video overflow-hidden rounded-lg border transition ${
              activeImage === image
                ? "border-electric shadow-purple"
                : "border-electric/20 hover:border-electric/60"
            }`}
            key={`${image}-${index}`}
            onClick={() => setActiveImage(image)}
            type="button"
          >
            <Image
              src={image}
              alt=""
              fill
              sizes="160px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
