'use client';

import Image from 'next/image';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';

interface ManualImageProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function ManualImage({
  src,
  alt,
  caption,
  width = 800,
  height = 600,
  priority = false
}: ManualImageProps) {
  const carbon = useCarbonClasses();

  // Use full width only for default dimensions
  const isDefaultSize = width === 800 && height === 600;
  const imageClassName = isDefaultSize ? "w-full h-auto" : "h-auto";

  return (
    <figure className="my-6">
      <div className={`relative border ${carbon.border} rounded-lg overflow-hidden ${carbon.layer01}`}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={imageClassName}
        />
      </div>
      {caption && (
        <figcaption className={`text-sm text-center mt-3 italic ${carbon.textHelper}`}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
