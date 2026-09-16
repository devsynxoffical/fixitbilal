/**
 * Infinite scrolling marquee strip.
 * props: items: [{ text }], className, reversed
 */
export default function Marquee({ items = [], className = '', dark = false }) {
  const doubled = [...items, ...items];
  return (
    <div className={`relative overflow-hidden py-5 ${dark ? 'bg-[#F4F0EA] border-y border-[#C9A15D]/20' : 'bg-[#C9A15D]/10 border-y border-[#C9A15D]/20'} ${className}`}>
      <div className="marquee-track items-center">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`mx-8 flex items-center gap-8 text-sm md:text-base tracking-[0.25em] uppercase font-bold whitespace-nowrap ${
              dark ? 'text-[#C9A15D]' : 'text-[#1C120E]/85'
            }`}
          >
            {item.text}
            <svg className="w-3 h-3 text-[#C9A15D]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
