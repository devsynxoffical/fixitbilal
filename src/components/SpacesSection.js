import { useState, useEffect } from 'react';

const spaceSlides = [
  {
    image: '/images/spacesec1.webp',
    tag: 'Bespoke Balconies & Decks',
    title: 'Luxury Balcony Fit-Outs & Scenic Lounges',
  },
  {
    image: '/images/spacesec2.webp',
    tag: 'Luxury Residential',
    title: 'Penthouse Living & Architectural Lounges',
  },
  {
    image: '/images/spacesec3.webp',
    tag: 'Custom Fit-Out',
    title: 'Bespoke Carpentry & Marble Finishes',
  },
];

export default function SpacesSection({ onContactClick }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % spaceSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

        {/* ── LEFT: Framed Image Carousel ── */}
        <div className="w-full lg:w-1/2 relative h-[400px] md:h-[550px] lg:h-[600px] rounded-[32px] overflow-hidden shadow-lg border border-[#C9A15D]/10">
          {spaceSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center center' }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Slide label */}
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <span className="inline-block px-3 py-1 bg-white text-[#1C120E] text-[9px] uppercase font-bold tracking-[0.25em] mb-3">
                  {slide.tag}
                </span>
                <h4 className="font-serif text-lg md:text-xl text-white font-light tracking-tight leading-tight">
                  {slide.title}
                </h4>
              </div>
            </div>
          ))}

          {/* Slider Dots */}
          <div className="absolute bottom-8 right-8 z-20 flex gap-2">
            {spaceSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === current ? 'w-8 bg-[#C9A15D]' : 'w-2.5 bg-white/50 hover:bg-white'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── RIGHT: Content ── */}
        <div className="w-full lg:w-1/2 flex items-center py-4 lg:py-8">
          <div className="w-full">

            {/* Headline */}
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[48px] text-[#1C120E] leading-[1.1] mb-4 font-light tracking-tight">
              Our Philosophy
            </h2>

            {/* Sub-heading */}
            <h3 className="text-lg md:text-xl text-[#C9A15D] font-medium tracking-wide mb-6">
              We Build Spaces Worth Living In
            </h3>

            {/* Body */}
            <p className="text-sm md:text-[15px] text-[#5E524A] font-normal leading-[1.8] mb-8 tracking-wide">
              BKD Contracting designs and delivers turn-key fit-out solutions that blend
              privacy, performance, and luxury for Dubai's most discerning residents and
              investors. Every material is selected for longevity, every detail crafted
              for impact.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#1C120E]/10 mb-8">
              <div>
                <div className="font-serif text-3xl md:text-4xl text-[#1C120E] font-normal mb-1">
                  100<span className="text-[#C9A15D]">%</span>
                </div>
                <div className="text-[9px] text-[#1C120E]/70 uppercase tracking-[0.2em] font-bold">
                  Turn-key Precision
                </div>
              </div>
              <div>
                <div className="font-serif text-3xl md:text-4xl text-[#1C120E] font-normal mb-1">
                  280<span className="text-[#C9A15D]">+</span>
                </div>
                <div className="text-[9px] text-[#1C120E]/70 uppercase tracking-[0.2em] font-bold">
                  Projects Delivered
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/971558344467"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#1C120E] text-white text-[10px] uppercase tracking-[0.25em] px-8 py-4 rounded-full transition-colors duration-300 hover:bg-[#C9A15D] hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.847L.057 23.882a.5.5 0 0 0 .614.614l6.035-1.467A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.5-5.243-1.376l-.375-.217-3.882.944.965-3.795-.232-.391A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
