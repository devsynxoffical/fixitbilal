import { useEffect, useRef, useCallback } from 'react';

/**
 * useParallax
 * Attaches a GPU-accelerated parallax translate to any ref element.
 *
 * @param {number} speed  – movement factor. 0 = locked, 0.5 = half scroll, 1 = full scroll
 *                          Positive = moves down with scroll (standard parallax)
 *                          Negative = moves up with scroll (counter-parallax)
 * @returns ref  – attach to the element that should move
 */
export default function useParallax(speed = 0.4) {
  const ref = useRef(null);
  const rafRef = useRef(null);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.parentElement?.getBoundingClientRect() ?? el.getBoundingClientRect();
    const winH = window.innerHeight;

    // Only animate when the section is visible
    if (rect.bottom < 0 || rect.top > winH) return;

    // centre of the element relative to viewport centre
    const centre = rect.top + rect.height / 2 - winH / 2;
    const translateY = centre * speed;

    el.style.transform = `translateY(${translateY}px) scale(1.15)`;
  }, [speed]);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update(); // set initial position

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [update]);

  return ref;
}
