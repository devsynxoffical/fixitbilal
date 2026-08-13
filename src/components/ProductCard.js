import TiltCard from './TiltCard';
import Icon from './Icon';

export default function ProductCard({ product, onQuote }) {
  return (
    <TiltCard className="group h-full rounded-3xl bg-white overflow-hidden shadow-md hover:shadow-deep transition-shadow duration-500 flex flex-col">
      <div className="h-1.5 bg-gold-gradient" />
      <div className="p-6 flex flex-col flex-grow">
        <h4 className="text-lg font-bold text-[#392e23] mb-0.5">{product.name}</h4>
        <p className="text-xs text-[#392e23]/45 mb-4 tracking-wide uppercase">{product.code}</p>

        <div className="flex items-baseline gap-2 mb-5">
          <span className="text-xs line-through text-[#392e23]/40 font-medium">{product.normalPrice}</span>
          <span className="text-2xl font-bold text-gold-gradient">{product.salePrice}</span>
        </div>

        <div className="space-y-2.5 text-sm mb-6 flex-grow">
          {[
            { k: "Colour Option", v: product.color },
            { k: "Warranty", v: product.warranty },
            { k: "Density", v: product.density },
          ].map((row) => (
            <div key={row.k} className="flex justify-between items-center border-b border-[#D6B168]/15 pb-2">
              <span className="text-[#392e23]/55 font-light">{row.k}</span>
              <span className="font-semibold text-[#392e23] text-right">{row.v}</span>
            </div>
          ))}
        </div>

        <div className="bg-[#F1E7D0] rounded-xl p-3 mb-5">
          <div className="text-xs font-bold text-[#392e23] mb-2 tracking-wide uppercase">Additional Options</div>
          <div className="space-y-1 text-xs text-[#392e23]/70 font-light">
            <p>Fitting Accessories: 60 AED SQM</p>
            <p>Installation Price: 75 AED SQM</p>
            <p>L Profiles If Needed: 45 AED LM</p>
            <p className="font-medium text-[#B89345]">All Above Plus VAT</p>
          </div>
        </div>

        <button
          onClick={() => onQuote(product.name)}
          className="w-full bg-[#392e23] text-[#FDF8F2] py-3.5 rounded-xl font-semibold text-sm tracking-wide hover:bg-[#D6B168] hover:text-[#392e23] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-gold flex items-center justify-center gap-2 mt-auto"
        >
          <Icon name="whatsapp" size={16} />
          Get Quote
        </button>
      </div>
    </TiltCard>
  );
}
