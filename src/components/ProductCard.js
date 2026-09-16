import TiltCard from './TiltCard';
import Icon from './Icon';

export default function ProductCard({ product, onQuote }) {
  return (
    <TiltCard className="group h-full rounded-3xl bg-white border border-[#E8E2D8] hover:border-[#C9A15D] overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 flex flex-col">
      <div className="h-1.5 bg-gold-gradient" />
      <div className="p-6 flex flex-col flex-grow">
        <h4 className="text-lg font-bold text-[#1C120E] mb-0.5">{product.name}</h4>
        <p className="text-xs text-[#5E524A] mb-4 tracking-wide uppercase font-semibold">{product.code}</p>

        <div className="flex items-baseline gap-2 mb-5">
          <span className="text-xs line-through text-[#5E524A]/60 font-medium">{product.normalPrice}</span>
          <span className="text-2xl font-bold text-[#C9A15D]">{product.salePrice}</span>
        </div>

        <div className="space-y-2.5 text-sm mb-6 flex-grow">
          {[
            { k: "Colour Option", v: product.color },
            { k: "Warranty", v: product.warranty },
            { k: "Density", v: product.density },
          ].map((row) => (
            <div key={row.k} className="flex justify-between items-center border-b border-[#E8E2D8] pb-2">
              <span className="text-[#5E524A] font-normal">{row.k}</span>
              <span className="font-semibold text-[#1C120E] text-right">{row.v}</span>
            </div>
          ))}
        </div>

        <div className="bg-[#F4F0EA] rounded-xl p-3 mb-5 border border-[#E8E2D8]">
          <div className="text-xs font-bold text-[#1C120E] mb-2 tracking-wide uppercase">Additional Options</div>
          <div className="space-y-1 text-xs text-[#5E524A] font-normal">
            <p>Fitting Accessories: 60 AED SQM</p>
            <p>Installation Price: 75 AED SQM</p>
            <p>L Profiles If Needed: 45 AED LM</p>
            <p className="font-semibold text-[#C9A15D]">All Above Plus VAT</p>
          </div>
        </div>

        <button
          onClick={() => onQuote(product.name)}
          className="w-full bg-[#1C120E] text-white py-3.5 rounded-full font-semibold text-xs uppercase tracking-[0.15em] hover:bg-[#C9A15D] transition-all duration-300 shadow-sm flex items-center justify-center gap-2 mt-auto"
        >
          <Icon name="whatsapp" size={16} />
          Get Quote
        </button>
      </div>
    </TiltCard>
  );
}
