import TiltCard from './TiltCard';
import Icon from './Icon';
import SmartImage from './SmartImage';
import { Link } from 'react-router-dom';

export default function ServiceCard({ service, onRequest }) {
  return (
    <TiltCard className="group relative h-full rounded-3xl glass-dark overflow-hidden border border-[#C9A15D]/30 hover:border-[#C9A15D] card-lift">
      <div className="img-zoom relative h-56">
        <SmartImage src={service.image} alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C120E] via-[#1C120E]/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-500" />
        <span className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-gold-gradient text-[#1C120E] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.5)] group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
          <Icon name={service.icon} size={24} strokeWidth={2.2} />
        </span>
      </div>
      <div className="p-7">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C9A15D] transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-[#D9C7B1]/70 font-light leading-relaxed mb-5">{service.desc}</p>
        {service.link ? (
          <Link
            to={service.link}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#C9A15D] group-hover:text-white transition-colors duration-300"
          >
            <span>View Service</span>
            <Icon name="arrow-right" size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        ) : (
          <button
            onClick={onRequest}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#C9A15D] group-hover:text-white transition-colors duration-300"
          >
            <span>Request Service</span>
            <Icon name="arrow-right" size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        )}
      </div>
      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#C9A15D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-3xl" />
    </TiltCard>
  );
}
