import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pillars = [
  {
    id: 'management',
    label: 'Project Management',
    title: 'End-to-End Project Management',
    subtitle: 'Every stage handled with precision, from concept to completion.',
    description:
      'We manage every stage with care — from design coordination and procurement to installation and final handover — ensuring your project is delivered seamlessly and to an uncompromising standard.',
    features: [
      'End-to-End Project Management',
      'Design Coordination & Procurement',
      'On-Schedule Milestone Delivery',
    ],
  },
  {
    id: 'quality',
    label: 'Quality Control',
    title: 'Quality Control at Every Stage',
    subtitle: 'German & Italian engineering standards applied across UAE projects.',
    description:
      'Our dedicated in-house master carpenters, MEP engineers, and fit-out specialists execute every detail with zero compromises on structural durability and immaculate finishing.',
    features: [
      'Quality Control at Every Stage',
      'In-House Joinery & CNC Precision',
      'Rigorous Inspection Protocols',
    ],
  },
  {
    id: 'handover',
    label: 'Final Handover',
    title: 'Seamless Final Handover',
    subtitle: 'Your space, delivered exactly as envisioned — no surprises.',
    description:
      'We believe delivery is not just a date — it is a standard. Every handover is conducted with a full walk-through, snag resolution, and comprehensive warranty documentation ensuring peace of mind long after completion.',
    features: [
      'Seamless Final Handover',
      'Full Walk-Through & Snag Resolution',
      'Comprehensive Post-Handover Warranty',
    ],
  },
  {
    id: 'bespoke',
    label: 'Bespoke Design',
    title: 'Curated Elegance & Refined Taste',
    subtitle: 'Where timeless aesthetics meet contemporary Dubai grandeur.',
    description:
      'We curate sophisticated color harmonies, bespoke textures, and architectural lighting layouts that elevate living environments into works of art — tailored to echo your personal narrative.',
    features: [
      'Tailored Material Palettes & Luxury Stone',
      'Architectural Lighting & Acoustic Panels',
      'Bespoke Italian-Inspired Custom Joinery',
    ],
  },
];

export default function FourPillarsSection() {
  const [activeId, setActiveId] = useState('management');
  const activePillar = pillars.find((p) => p.id === activeId) || pillars[0];

  return (
    <section className="py-24 md:py-32 bg-[#E5DCC9] text-[#1C120E] relative overflow-hidden" id="pillars-section">

      {/* Subtle gold ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-[#C9A15D]/15 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 md:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#C9A15D]/60" />
            <span className="text-xs md:text-sm uppercase tracking-[0.45em] text-[#C9A15D] font-bold">The Foundation</span>
            <span className="w-8 h-px bg-[#C9A15D]/60" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1C120E] font-light leading-[1.08] tracking-tight">
            Four Principles.{' '}
            <em className="not-italic font-normal text-[#C9A15D]">One Exceptional Standard.</em>
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-16">
          {pillars.map((pillar) => {
            const isActive = pillar.id === activeId;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveId(pillar.id)}
                className={`px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] transition-all duration-300 rounded-full border ${
                  isActive
                    ? 'border-[#C9A15D] bg-[#C9A15D] text-white shadow-sm'
                    : 'border-[#1C120E]/20 bg-white/50 text-[#1C120E]/70 hover:border-[#C9A15D] hover:bg-white hover:text-[#1C120E]'
                }`}
              >
                {pillar.label}
              </button>
            );
          })}
        </div>

        {/* Active Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* Title */}
            <h3 className="font-serif text-2xl md:text-3xl text-[#1C120E] font-light mb-3 tracking-tight">
              {activePillar.title}
            </h3>

            {/* Subtitle */}
            <p className="text-[13px] text-[#C9A15D] font-semibold mb-6 tracking-wide italic">
              {activePillar.subtitle}
            </p>

            {/* Divider */}
            <div className="mx-auto w-12 h-px bg-[#C9A15D]/40 mb-8" />

            {/* Description */}
            <p className="text-sm md:text-base text-[#5E524A] font-normal leading-[1.9] mb-10 tracking-wide">
              {activePillar.description}
            </p>

            {/* Highlighted Feature Tags */}
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 mt-8">
              {activePillar.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-x-4">
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A15D]">
                    {feat}
                  </span>
                  {idx < activePillar.features.length - 1 && (
                    <span className="w-1.5 h-1.5 bg-[#C9A15D]/60 rounded-full" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
