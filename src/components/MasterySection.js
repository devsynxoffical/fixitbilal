import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryItems = [
  {
    id: 1,
    title: 'Palm Jumeirah Signature Villa',
    category: 'Residential',
    image: '/images/IMG-20250805-WA0103.jpg',
    location: 'Palm Jumeirah, Dubai',
    span: 'tall',
  },
  {
    id: 2,
    title: 'Downtown Dubai Luxury Penthouse',
    category: 'Residential',
    image: '/images/IMG-20250805-WA0108.jpg',
    location: 'Downtown Dubai',
    span: 'normal',
  },
  {
    id: 3,
    title: 'Executive Corporate Fit-Out',
    category: 'Commercial',
    image: '/images/IMG-20250805-WA0115.jpg',
    location: 'Business Bay, Dubai',
    span: 'wide',
  },
  {
    id: 4,
    title: 'Bespoke Joinery & Marble Suite',
    category: 'Custom Fit-out',
    image: '/images/IMG-20250805-WA0121.jpg',
    location: 'DIFC, Dubai',
    span: 'normal',
  },
  {
    id: 5,
    title: 'WPC Outdoor Decking & Lounge',
    category: 'Outdoor Decking',
    image: '/images/IMG-20250805-WA0126.jpg',
    location: 'Emirates Hills, Dubai',
    span: 'normal',
  },
  {
    id: 6,
    title: 'Modern Modular Kitchen & Dining',
    category: 'Residential',
    image: '/images/IMG-20250805-WA0129.jpg',
    location: 'Dubai Marina',
    span: 'normal',
  },
];

const categories = ['All', 'Residential', 'Commercial', 'Custom Fit-out', 'Outdoor Decking'];

function ProjectCard({ item, onClick, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className="group relative overflow-hidden cursor-pointer"
      style={{ borderRadius: '4px' }}
      onClick={() => onClick(item)}
    >
      <div className="relative h-[280px] md:h-[340px] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            // Fallback to a known-good image if this one fails to load
            e.target.src = '/images/IMG-20250805-WA0140.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Category pill */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[#1C120E]/75 backdrop-blur-sm text-[#C9A15D] text-[9px] uppercase font-medium tracking-[0.3em] border border-[#C9A15D]/30">
            {item.category}
          </span>
        </div>

        {/* Hover arrow */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-[#C9A15D] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 10L10 2M10 2H4M10 2V8" stroke="#1C120E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="text-[9px] text-[#C9A15D] uppercase tracking-[0.35em] font-medium mb-1.5">
            {item.location}
          </div>
          <h3 className="font-serif text-lg md:text-xl font-extralight text-white tracking-tight leading-tight">
            {item.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

export default function MasterySection({ onContactClick }) {
  const [selectedCat, setSelectedCat] = useState('All');
  const [activeItem, setActiveItem] = useState(null);

  const filtered = selectedCat === 'All'
    ? galleryItems
    : galleryItems.filter((i) => i.category === selectedCat);

  return (
    <section className="py-24 md:py-32 bg-[#1C120E] text-[#D9C7B1] relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(201,161,93,0.3) 60px, rgba(201,161,93,0.3) 61px)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#C9A15D]/50" />
            <span className="text-[10px] uppercase tracking-[0.45em] text-[#C9A15D] font-light">Portfolio Showcase</span>
            <span className="w-8 h-px bg-[#C9A15D]/50" />
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-[#D9C7B1] leading-[1.08] font-extralight tracking-tight mb-4">
            The Mediums <br />
            <span className="font-light italic text-[#C9A15D]">Our Mastery</span>
          </h2>
          <p className="text-sm md:text-base text-[#D9C7B1]/60 font-light max-w-xl mx-auto tracking-wide leading-relaxed">
            Explore our curated portfolio of bespoke interior transformations, structural fit-outs, and architectural outdoor spaces across Dubai.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = cat === selectedCat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-5 py-2 text-[10px] font-medium uppercase tracking-[0.25em] transition-all duration-300 border ${
                  isActive
                    ? 'bg-[#C9A15D] text-[#1C120E] border-[#C9A15D]'
                    : 'bg-transparent text-[#D9C7B1]/55 border-white/15 hover:border-[#C9A15D]/50 hover:text-[#D9C7B1]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Masonry-style Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCat}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Row 1: 2 columns */}
            {filtered.length > 0 && (
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {filtered.slice(0, 2).map((item, idx) => (
                  <ProjectCard key={item.id} item={item} onClick={setActiveItem} delay={idx * 0.1} />
                ))}
              </div>
            )}

            {/* Row 2: 3 columns (if enough items) */}
            {filtered.length > 2 && (
              <div className={`grid gap-4 ${filtered.length - 2 === 1 ? 'md:grid-cols-1 max-w-2xl mx-auto' : filtered.length - 2 === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
                {filtered.slice(2, 5).map((item, idx) => (
                  <ProjectCard key={item.id} item={item} onClick={setActiveItem} delay={idx * 0.08} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      {activeItem && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-5"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative bg-[#1C120E] text-[#D9C7B1] max-w-3xl w-full overflow-hidden border border-[#C9A15D]/25 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-[#C9A15D] text-[#1C120E] flex items-center justify-center hover:bg-white transition-colors text-sm font-bold"
            >
              ✕
            </button>
            <div className="h-72 md:h-[420px] overflow-hidden">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#C9A15D] font-medium">
                  {activeItem.category} · {activeItem.location}
                </span>
                <h3 className="font-serif text-2xl text-white font-light mt-1 tracking-tight">
                  {activeItem.title}
                </h3>
              </div>
              <button
                onClick={() => { setActiveItem(null); onContactClick(); }}
                className="btn-gold text-[10px] uppercase tracking-[0.25em] px-7 py-3 shrink-0"
              >
                Inquire Similar Build
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
