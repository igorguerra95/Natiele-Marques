import React, { useState } from 'react';
import { Activity } from 'lucide-react';

interface ResilientImageProps {
  src?: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  priority?: boolean;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Atendimento Clínico',
  priority = false,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`bg-clinical-canvas flex flex-col items-center justify-center gap-3 border border-border p-8 text-center ${className}`}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface-elevated text-primary">
          <Activity className="h-5 w-5" aria-hidden="true" />
        </div>
        <span className="font-display text-sm font-semibold tracking-tight text-foreground">
          {fallbackTitle}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
