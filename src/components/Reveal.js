import { useEffect, useRef } from 'react';

/**
 * Scroll-reveal wrapper. Renders children inside a div that
 * fades/slides in when scrolled into view.
 *
 * props:
 *  - direction: 'up' | 'left' | 'right' | 'zoom' | 'blur' (default 'up')
 *  - delay: ms delay before reveal (default 0)
 *  - threshold: intersection ratio (default 0.15)
 *  - once: whether to animate only once (default true)
 *  - className: extra classes for wrapper
 */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  threshold = 0.15,
  once = true,
  className = '',
  as: Tag = 'div',
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => setTimeout(() => el.classList.add('is-visible'), delay);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    );

    // Immediate check: if already within viewport bounds, reveal now.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      reveal();
      return () => observer.disconnect();
    }

    observer.observe(el);

    // Safety net: never leave content hidden.
    const fallback = setTimeout(reveal, delay + 2500);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [delay, threshold, once]);

  const dirClass =
    direction === 'left'
      ? 'reveal reveal-left'
      : direction === 'right'
      ? 'reveal reveal-right'
      : direction === 'zoom'
      ? 'reveal reveal-zoom'
      : direction === 'blur'
      ? 'reveal reveal-blur'
      : direction === 'flip' || direction === '3d'
      ? 'reveal reveal-flip'
      : 'reveal';

  return (
    <Tag ref={ref} className={`${dirClass} ${className}`} style={rest.style || undefined} {...rest}>
      {children}
    </Tag>
  );
}
