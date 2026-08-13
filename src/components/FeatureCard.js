import TiltCard from './TiltCard';
import Icon from './Icon';

export default function FeatureCard({ feature }) {
  return (
    <TiltCard className="group h-full rounded-3xl bg-white p-8 shadow-soft hover:shadow-deep transition-shadow duration-500">
      <div className="w-14 h-14 mb-6 rounded-2xl bg-gold-gradient flex items-center justify-center text-[#392e23] shadow-gold group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
        <Icon name={feature.icon} size={26} strokeWidth={2.2} />
      </div>
      <h3 className="text-xl font-bold text-[#392e23] mb-3 group-hover:text-[#B89345] transition-colors duration-300">
        {feature.title}
      </h3>
      <p className="text-[#392e23]/60 font-light leading-relaxed">{feature.description}</p>
    </TiltCard>
  );
}
