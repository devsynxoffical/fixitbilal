import { motion } from 'framer-motion';

const steps = [
  {
    num: '1',
    phase: 'Phase I',
    title: 'Vision & Concept Design',
    desc: 'Translating your aspirations into bespoke 3D space layouts, luxury moodboards, and material specifications.',
  },
  {
    num: '2',
    phase: 'Phase II',
    title: 'Technical Fit-Out & Execution',
    desc: 'Precision MEP engineering, custom joinery production in our UAE factory, and flawless structural execution.',
  },
  {
    num: '3',
    phase: 'Phase III',
    title: 'Master Handover & Delivery',
    desc: 'White-glove deep cleaning, detailed snagging inspection, key handover, and ongoing aftercare support.',
  },
];

export default function ProcessTimelineSection({ onContactClick }) {
  return (
    <section className="py-24 md:py-32 bg-[#F9F8F6] text-[#1C120E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-[10px] uppercase tracking-[0.45em] text-[#C9A15D] font-medium mb-4 flex items-center justify-center gap-3">
            <span className="w-6 h-px bg-[#C9A15D]/80" />
            <span>Turn-Key Methodology</span>
            <span className="w-6 h-px bg-[#C9A15D]/80" />
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-[#1C120E] font-light leading-[1.08] tracking-tight">
            Spaces That Speak <span className="italic font-medium text-[#B8860B]">Volumes</span>
          </h2>
          <p className="text-sm md:text-base text-[#1C120E]/90 font-normal mt-3 tracking-wide">
            Our structured 3-stage execution model ensures zero delays and flawless luxury standards.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-[#C9A15D]/60 to-transparent -z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative z-10 bg-white rounded-3xl p-8 border border-[#1C120E]/15 hover:border-[#C9A15D] shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center group"
            >
              {/* Number Circle */}
              <div className="w-14 h-14 rounded-full bg-[#1C120E] text-[#C9A15D] font-serif text-xl font-normal flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-[#C9A15D] group-hover:text-[#1C120E] transition-all duration-300">
                {step.num}
              </div>

              <span className="text-[10px] uppercase font-semibold tracking-[0.35em] text-[#C9A15D] mb-2">
                {step.phase}
              </span>

              <h3 className="font-serif text-xl text-[#1C120E] font-semibold mb-3 tracking-tight">
                {step.title}
              </h3>

              <p className="text-xs md:text-sm text-[#1C120E]/90 font-normal leading-relaxed tracking-wide">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
