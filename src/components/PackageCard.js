import TiltCard from './TiltCard';
import Icon from './Icon';
import SmartImage from './SmartImage';

export default function PackageCard({ pkg, onBook }) {
  const featured = pkg.featured;
  return (
    <TiltCard
      className={`relative h-full rounded-3xl p-7 flex flex-col transition-all duration-500 ${
        featured ? 'bg-[#392e23] text-[#FDF8F2] shadow-deep scale-[1.02]' : 'bg-white text-[#392e23] shadow-soft hover:shadow-deep'
      }`}
    >
      {featured && (
        <span className="absolute -top-3 right-6 bg-gold-gradient text-[#392e23] text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-gold">
          Most Popular
        </span>
      )}

      <div className="img-zoom relative h-36 rounded-2xl overflow-hidden mb-6">
        <SmartImage src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
      </div>

      <h3 className={`text-2xl font-bold mb-1 ${featured ? 'text-[#D6B168]' : 'text-[#392e23]'}`}>{pkg.name}</h3>
      <p className={`text-sm font-medium mb-4 ${featured ? 'text-[#FDF8F2]/60' : 'text-[#392e23]/60'}`}>{pkg.style}</p>

      <div className={`text-xl font-bold mb-2 ${featured ? 'text-[#FDF8F2]' : 'text-[#392e23]'}`}>{pkg.price}</div>
      <p className={`text-sm mb-5 font-light ${featured ? 'text-[#FDF8F2]/50' : 'text-[#392e23]/50'}`}>
        Perfect for: {pkg.perfectFor}
      </p>

      <div className="mb-6 flex-grow">
        <div className={`text-xs font-bold tracking-wider uppercase mb-3 ${featured ? 'text-[#D6B168]' : 'text-[#B89345]'}`}>
          Includes
        </div>
        <ul className="space-y-2.5">
          {pkg.features.map((feature, idx) => (
            <li key={idx} className={`flex items-start gap-2.5 text-sm font-light ${featured ? 'text-[#FDF8F2]/70' : 'text-[#392e23]/70'}`}>
              <span className={`mt-0.5 flex items-center justify-center w-4 h-4 rounded-full ${featured ? 'bg-[#D6B168]/20 text-[#D6B168]' : 'bg-[#D6B168]/20 text-[#B89345]'}`}>
                <Icon name="check" size={10} strokeWidth={3.2} />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onBook}
        className={`w-full py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-500 hover:-translate-y-0.5 ${
          featured ? 'bg-gold-gradient text-[#392e23] hover:shadow-gold' : 'btn-outline'
        }`}
      >
        <span>Book {pkg.name}</span>
      </button>
    </TiltCard>
  );
}
