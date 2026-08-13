import Reveal from './Reveal';
import Counter from './Counter';

export default function Stats({ stats }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 120} className="text-center group">
          <div className="relative inline-flex flex-col items-center">
            <div className="text-5xl md:text-6xl font-serif font-bold text-[#2E1F1A] transition-all duration-300">
              <Counter end={s.end} suffix={s.suffix} />
            </div>
            <div className="w-10 h-[2px] bg-[#C9A15D] my-3 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            <div className="text-sm md:text-base text-[#2E1F1A]/60 font-medium tracking-wide">{s.label}</div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
