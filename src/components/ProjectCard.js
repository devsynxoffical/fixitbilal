import Icon from './Icon';
import SmartImage from './SmartImage';

export default function ProjectCard({ project }) {
  return (
    <div className="group rounded-3xl bg-[#F1E7D0] p-5 hover:shadow-deep transition-shadow duration-500">
      <h4 className="text-center font-bold text-[#392e23] text-lg mb-5 tracking-wide">{project.title}</h4>
      <div className="relative grid grid-cols-2 gap-3">
        <div className="img-zoom relative rounded-2xl overflow-hidden">
          <SmartImage src={project.before} alt={`${project.title} before`} className="w-full h-52 object-cover" />
          <span className="absolute top-2 left-2 text-[10px] tracking-widest uppercase font-bold bg-[#392e23]/80 text-[#FDF8F2] px-2.5 py-1 rounded-md">Before</span>
        </div>
        <div className="img-zoom relative rounded-2xl overflow-hidden">
          <SmartImage src={project.after} alt={`${project.title} after`} className="w-full h-52 object-cover" />
          <span className="absolute top-2 left-2 text-[10px] tracking-widest uppercase font-bold bg-[#D6B168] text-[#392e23] px-2.5 py-1 rounded-md">After</span>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#D6B168] text-[#392e23] flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 shadow-xl">
          <Icon name="arrow-right" size={20} strokeWidth={2.4} />
        </div>
      </div>
    </div>
  );
}
