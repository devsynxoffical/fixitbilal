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
        <h2
          className={`font-serif text-4xl md:text-6xl font-light leading-[1.08] tracking-tight mb-4 ${
            light ? 'text-[#1C120E]' : 'text-white'
          }`}
        >
          {kicker}
        </h2>
      )}
      <h3 className="text-lg md:text-xl text-[#C9A15D] font-medium tracking-wide mb-6">
        {title}
      </h3>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-sm md:text-base font-normal leading-relaxed tracking-wide text-[#5E524A]">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
