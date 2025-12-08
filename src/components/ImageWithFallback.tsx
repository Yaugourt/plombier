"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface ImageWithFallbackProps extends Omit<ImageProps, "onError"> {
  fallback?: React.ReactNode;
}

export default function ImageWithFallback({
  fallback,
  alt,
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error && fallback) {
    return <>{fallback}</>;
  }

  return (
    <Image
      alt={alt}
      {...props}
      onError={() => setError(true)}
    />
  );
}

