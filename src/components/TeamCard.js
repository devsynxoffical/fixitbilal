import Icon from './Icon';
import SmartImage from './SmartImage';

export default function TeamCard({ member }) {
  const initials = member.name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  const nameCard = (
    <div className="h-80 w-full flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#392e23] to-[#1E1811] relative overflow-hidden">
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#D6B168]/15 blur-2xl" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[#B89345]/20 blur-2xl" />
      <span className="relative w-24 h-24 rounded-full bg-gold-gradient flex items-center justify-center text-[#392e23] font-display font-bold text-3xl shadow-gold">
        {initials}
      </span>
      <span className="relative text-sm text-[#FDF8F2]/90 font-medium tracking-wide">{member.name}</span>
      <span className="relative text-[11px] text-[#D6B168] tracking-[0.25em] uppercase font-medium">{member.role}</span>
    </div>
  );

  return (
    <div className="group relative rounded-3xl overflow-hidden shadow-soft hover:shadow-deep transition-shadow duration-500">
      <div className="img-zoom relative h-80">
        <SmartImage
          src={member.image}
          alt={member.name}
          fallback={nameCard}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1811]/95 via-[#1E1811]/20 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="h-[2px] w-8 bg-[#D6B168] mb-3 transition-all duration-500 group-hover:w-16" />
        <div className="text-xl font-bold text-[#FDF8F2]">{member.name}</div>
        <div className="text-sm text-[#D6B168] tracking-wide font-medium">{member.role}</div>
      </div>
      <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#D6B168]/90 text-[#392e23] flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
        <Icon name="phone" size={15} strokeWidth={2.4} />
      </div>
    </div>
  );
}
