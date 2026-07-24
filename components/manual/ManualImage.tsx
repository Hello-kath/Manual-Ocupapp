'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ImageOff } from 'lucide-react';
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
  const [hasError, setHasError] = useState(false);

  const filename = src.split('/').pop();
  const isDefaultSize = width === 800 && height === 600;
  const imageClassName = isDefaultSize ? 'w-full h-auto' : 'h-auto mx-auto';

  return (
    <figure className="my-6">
      <div className={`relative border ${carbon.border} rounded-lg overflow-hidden ${carbon.layer01}`}>
        {hasError ? (
          <div className="flex flex-col items-center justify-center gap-3 py-10 px-6">
            <ImageOff className="w-10 h-10 text-gray-400 dark:text-gray-500" />
            <div className="text-center">
              <p className={`text-sm font-mono ${carbon.textPrimary} mb-1`}>
                📷 <code>{filename}</code>
              </p>
              <p className={`text-xs ${carbon.textHelper}`}>{alt}</p>
            </div>
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className={imageClassName}
            onError={() => setHasError(true)}
            unoptimized
          />
        )}
      </div>
      {caption && (
        <figcaption className={`text-sm text-center mt-3 italic ${carbon.textHelper}`}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
