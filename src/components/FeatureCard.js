import TiltCard from './TiltCard';
import Icon from './Icon';

export default function FeatureCard({ feature }) {
  return (
    <TiltCard className="group h-full rounded-3xl bg-white p-8 border border-[#E8E2D8] hover:border-[#C9A15D] shadow-sm hover:shadow-md transition-all duration-500">
      <div className="w-14 h-14 mb-6 rounded-2xl bg-gold-gradient flex items-center justify-center text-white shadow-md group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
        <Icon name={feature.icon} size={26} strokeWidth={2.2} />
      </div>
      <h3 className="text-xl font-bold text-[#1C120E] mb-3 group-hover:text-[#C9A15D] transition-colors duration-300">
        {feature.title}
      </h3>
      <p className="text-[#5E524A] font-normal leading-relaxed">{feature.description}</p>
    </TiltCard>
  );
}
