/**
 * ParallaxBanner - Static full-width section with background image and text content.
 *
 * Props:
 *  image       {string}   – path to background image
 *  kicker      {string}   – small uppercase tag above the title
 *  title       {string}   – bold serif headline (supports <br/> via \n)
 *  subtitle    {string}   – body text below the title
 *  accent      {string}   – coloured word inside the title (appears as gold)
 *  stats       {Array}    – [{value, label}] – optional bottom stat ticker
 *  cta         {string}   – optional button label
 *  onCta       {function} – button click handler
 *  height      {string}   – section height class (default 'h-[90vh]')
 *  id          {string}   – optional section id
 */
export default function ParallaxBanner({
  image,
  kicker,
  title,
  accent,
  subtitle,
  stats,
  cta,
  onCta,
  speed,        // kept for API compat, unused
  height = 'h-[90vh]',
  id,
}) {
  // Split title on \n for line breaks
  const lines = (title || '').split('\n');

  return (
    <section
      id={id}
      className={`relative ${height} overflow-hidden flex items-center justify-center`}
    >
      {/* ── Static background image ── */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.42)' }}
        />
      </div>

      {/* ── Subtle dark overlay ── */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C120E]/60 via-transparent to-[#1C120E]/70" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">

        {/* Kicker */}
        {kicker && (
          <div className="flex items-center justify-center gap-5 mb-12">
            <span className="flex-1 max-w-[80px] h-px bg-[#C9A15D]/60" />
            <span className="text-[10px] uppercase tracking-[0.55em] text-[#C9A15D]/90 font-light">
              {kicker}
            </span>
            <span className="flex-1 max-w-[80px] h-px bg-[#C9A15D]/60" />
          </div>
        )}

        {/* Title */}
        <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl text-white font-extralight leading-[1.1] tracking-wide mb-6 drop-shadow-xl">
          {lines.map((line, i) =>
            line.includes('__accent__') ? (
              <span key={i} className="block">
                {line.split('__accent__').map((part, j, arr) =>
                  j < arr.length - 1 ? (
                    <span key={j}>
                      {part}
                      <em className="not-italic font-light text-[#C9A15D]">
                        {accent}
                      </em>
                    </span>
                  ) : (
                    <span key={j}>{part}</span>
                  )
                )}
              </span>
            ) : (
              <span key={i} className="block">{line}</span>
            )
          )}
        </h2>

        {/* Hairline divider */}
        <div className="mx-auto w-16 h-px bg-[#C9A15D]/50 mb-8" />

        {/* Subtitle */}
        {subtitle && (
          <p className="text-sm md:text-xl text-white/90 font-light leading-relaxed tracking-wide max-w-2xl mx-auto mb-12 drop-shadow-lg">
            {subtitle}
          </p>
        )}

        {/* CTA button */}
        {cta && (
          <button
            onClick={onCta}
            className="inline-flex items-center gap-4 border border-[#C9A15D]/60 text-[#C9A15D] text-[10px] uppercase tracking-[0.45em] px-10 py-4 hover:bg-[#C9A15D] hover:text-[#1C120E] transition-all duration-500 font-light"
          >
            {cta}
            <span className="w-6 h-px bg-current" />
          </button>
        )}

        {/* Stats */}
        {stats && stats.length > 0 && (
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-x-16 gap-y-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-serif text-3xl md:text-4xl font-extralight text-white tracking-tight">
                  {s.value}
                </div>
                <div className="text-[9px] uppercase tracking-[0.4em] text-[#C9A15D]/70 mt-2 font-light">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom fade edge */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1C120E] to-transparent pointer-events-none" />
      {/* Top fade edge */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#1C120E] to-transparent pointer-events-none" />
    </section>
  );
}
