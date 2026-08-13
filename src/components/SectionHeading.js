import Reveal from './Reveal';

/**
 * Consistent section heading with ornament.
 * props: kicker, title, subtitle, align ('center'|'left'), dark
 */
export default function SectionHeading({ kicker, title, subtitle, align = 'center', light = true }) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  return (
    <Reveal className={`flex flex-col ${alignClass} mb-14`}>
      {kicker && (
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] text-[#C9A15D] font-medium mb-4">
          <span className="w-6 h-px bg-[#C9A15D]/80" />
          <span>{kicker}</span>
          {align === 'center' && <span className="w-6 h-px bg-[#C9A15D]/80" />}
        </div>
      )}
      <h2
        className={`font-serif text-4xl md:text-6xl font-light leading-[1.08] tracking-tight ${
          light ? 'text-[#D9C7B1]' : 'text-white'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-sm md:text-base font-normal leading-relaxed tracking-wide ${
          light ? 'text-[#D9C7B1]/90' : 'text-[#D9C7B1]/90'
        }`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
