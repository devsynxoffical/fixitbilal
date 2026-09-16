import TiltCard from './TiltCard';
import Icon from './Icon';
import SmartImage from './SmartImage';

export default function PackageCard({ pkg, onBook }) {
  const featured = pkg.featured;
  return (
    <TiltCard
      className={`relative h-full rounded-3xl p-7 flex flex-col transition-all duration-500 border ${
        featured ? 'bg-white text-[#1C120E] border-[#C9A15D] shadow-xl scale-[1.02]' : 'bg-white text-[#1C120E] border-[#E8E2D8] shadow-sm hover:shadow-md'
      }`}
    >
      {featured && (
        <span className="absolute -top-3 right-6 bg-[#C9A15D] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-md">
          Most Popular
        </span>
      )}

      <div className="img-zoom relative h-36 rounded-2xl overflow-hidden mb-6 border border-[#E8E2D8]">
        <SmartImage src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
      </div>

      <h3 className="text-2xl font-bold mb-1 text-[#1C120E]">{pkg.name}</h3>
      <p className="text-sm font-normal mb-4 text-[#5E524A]">{pkg.style}</p>

      <div className="text-xl font-bold mb-2 text-[#C9A15D]">{pkg.price}</div>
      <p className="text-sm mb-5 font-normal text-[#5E524A]">
        Perfect for: {pkg.perfectFor}
      </p>

      <div className="mb-6 flex-grow">
        <div className="text-xs font-bold tracking-wider uppercase mb-3 text-[#C9A15D]">
          Includes
        </div>
        <ul className="space-y-2.5">
          {pkg.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm font-normal text-[#1C120E]/85">
              <span className="mt-0.5 flex items-center justify-center w-4 h-4 rounded-full bg-[#C9A15D]/15 text-[#C9A15D]">
                <Icon name="check" size={10} strokeWidth={3.2} />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onBook}
        className={`w-full py-3.5 rounded-full font-semibold text-xs uppercase tracking-[0.15em] transition-all duration-300 ${
          featured ? 'btn-gold shadow-md' : 'btn-outline-gold'
        }`}
      >
        <span>Book {pkg.name}</span>
      </button>
    </TiltCard>
  );
}
