import { useState } from 'react';

/**
 * Image that never shows a broken-image icon.
 * If `src` is missing or fails to load, renders `fallback`
 * (or a branded default placeholder).
 *
 * props:
 *  - src, alt, className (applied to the <img>)
 *  - fallback: React node rendered in place of a broken image
 *  - ...imgProps: anything else forwarded to <img> (loading, sizes, etc.)
 */
export default function SmartImage({ src, alt = '', fallback, className = '', ...imgProps }) {
  const [error, setError] = useState(false);

  if (!src || error) {
    if (fallback) return fallback;
    return (
      <div
        className={`w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#2E1F1A] to-[#1C120E] ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="w-12 h-12 rounded-2xl bg-gold-gradient flex items-center justify-center text-[#1C120E] font-serif font-bold text-lg">
          BKD
        </span>
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A15D]/80">{alt || 'BKD Contracting'}</span>
      </div>
    );
  }

  return <img src={src} alt={alt} onError={() => setError(true)} className={className} {...imgProps} />;
}
