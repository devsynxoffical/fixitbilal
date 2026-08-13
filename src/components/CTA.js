import Reveal from './Reveal';
import SmartImage from './SmartImage';

/**
 * Consistent closing CTA band used on every page.
 * props:
 *  - image, kicker, title, subtitle
 *  - primaryLabel / onPrimary
 *  - secondaryLabel / onSecondary (optional)
 */
export default function CTA({
  image,
  kicker = 'Get Started Today',
  title = 'Ready to Transform Your Space?',
  subtitle = 'Book your free consultation today and let our experts bring your vision to life.',
  primaryLabel = 'Book Now — It’s Free',
  onPrimary,
  secondaryLabel,
  onSecondary,
}) {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0">
        <SmartImage src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#140C09]/88" />
      </div>
      <div className="relative max-w-3xl mx-auto px-5 md:px-6 text-center">
        <Reveal direction="zoom">
          <span className="ornament text-[11px] tracking-[0.35em] uppercase text-[#C5A059] font-semibold mb-5 inline-flex">
            {kicker}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#D9C7B1] leading-tight mb-6">
            {title}
          </h2>
          <p className="text-lg text-[#D9C7B1]/70 font-light leading-relaxed mb-9 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={onPrimary} className="btn-gold text-xs uppercase tracking-[0.2em] px-10 py-4">
              <span>{primaryLabel}</span>
            </button>
            {secondaryLabel && onSecondary && (
              <button onClick={onSecondary} className="btn-outline-gold text-xs uppercase tracking-[0.2em] px-10 py-4">
                <span>{secondaryLabel}</span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
