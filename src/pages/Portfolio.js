import { useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import Icon from '../components/Icon';
import SectionHeading from '../components/SectionHeading';
import Marquee from '../components/Marquee';
import PortfolioGrid from '../components/PortfolioGrid';
import CTA from '../components/CTA';
import SectionFlip from '../components/SectionFlip';

import { navLinks, heroImages, portfolioImages, servicePackages } from '../data/content';

const portfolioCategories = [
  {
    title: 'Luxury Renovations',
    desc: 'Complete transformations of spaces, blending contemporary design with timeless charm to create environments that exude sophistication and comfort.',
    icon: 'sparkles',
  },
  {
    title: 'Office Fit-Outs',
    desc: 'Custom-designed office spaces tailored to enhance productivity and creativity, with ergonomic layouts and high-end finishes that make a lasting impression.',
    icon: 'users',
  },
  {
    title: 'Commercial Design',
    desc: 'High-quality interiors for commercial spaces, combining luxury, practicality, and functionality to meet the needs of modern businesses.',
    icon: 'award',
  },
];

export default function PortfolioPage() {
  const [showContact, setShowContact] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [activePackage, setActivePackage] = useState('Luxury');

  return (
    <div className="font-sans overflow-x-hidden bg-[#FAFAFA] text-[#1C120E]">
      <Navbar links={navLinks} onContactClick={() => setShowContact(true)} isDarkHero={true} />

      {/* ================= CUSTOM PORTFOLIO HERO ================= */}
      <section className="min-h-[75vh] h-auto pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden flex items-center bg-[#0C0A08]">
        {/* Background Image */}
        <img
          src="/portfolio-hero.webp"
          alt="BKD Interiors Portfolio Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 h-full flex flex-col items-center justify-center text-center w-full z-10 py-10">
          
          {/* Centered Content with Radial Gradient Backdrop */}
          <div
            className="w-full max-w-4xl flex flex-col items-center"
            style={{
              background: 'radial-gradient(circle, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 80%)',
              padding: '3.5rem 2rem',
              borderRadius: '100px',
            }}
          >
            <div className="entrance-fade-up d-2 flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#C9A15D]" style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.5)' }} />
              <span
                className="text-[11px] md:text-xs tracking-[0.45em] uppercase text-[#C9A15D] font-bold"
                style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.9), 0 0 8px rgba(0, 0, 0, 0.6)' }}
              >
                BKD INTERIORS • PORTFOLIO
              </span>
              <span className="w-8 h-px bg-[#C9A15D]" style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.5)' }} />
            </div>

            <h1
              className="section-heading text-4xl md:text-6xl lg:text-[76px] text-white leading-[1.08] mb-6 font-serif font-light tracking-tight text-center"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6)' }}
            >
              WHERE ELEGANCE<br/>
              <span
                className="block text-[#C9A15D] italic font-medium mt-2"
                style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.5)' }}
              >
                MEETS FUNCTIONALITY
              </span>
            </h1>

            <p
              className="entrance-fade-up d-4 text-sm md:text-lg text-white font-normal leading-relaxed mb-10 max-w-2xl text-center"
              style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.9), 0 0 10px rgba(0, 0, 0, 0.7)' }}
            >
              At BKD Interiors, we take pride in the work we do. Our portfolio showcases a diverse range of projects, from residential spaces to commercial properties — each reflecting our commitment to quality craftsmanship, innovative design, and functional solutions.
            </p>

            {/* 3 Pillars Row */}
            <div className="grid md:grid-cols-3 gap-5 text-left mb-10 w-full">
              {portfolioCategories.map((cat, i) => (
                <div
                  key={cat.title}
                  className="p-5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 hover:border-[#C9A15D]/60 transition-all duration-300 shadow-lg"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#C9A15D]/20 border border-[#C9A15D]/40 flex items-center justify-center text-[#C9A15D] mb-3">
                    <Icon name={cat.icon} size={18} strokeWidth={2} />
                  </div>
                  <h3 className="font-serif text-lg font-normal text-white mb-2">{cat.title}</h3>
                  <p className="text-xs text-white/80 font-normal leading-relaxed">{cat.desc}</p>
                </div>
              ))}
            </div>

            <div className="entrance-fade-up d-6 flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => setShowContact(true)} className="bg-[#C9A15D] text-white hover:bg-white hover:text-[#1C120E] transition-colors text-xs uppercase tracking-[0.2em] px-8 py-4 font-bold shadow-md rounded-full border border-transparent">
                <span>Start Your Project</span>
              </button>
              <button
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-white/40 text-white hover:border-[#C9A15D] hover:bg-[#C9A15D] transition-colors text-xs uppercase tracking-[0.2em] px-8 py-4 font-bold rounded-full backdrop-blur-sm bg-white/10 shadow-md"
              >
                <span>Explore Gallery</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <Marquee
        dark={false}
        items={[
          { text: "Luxury Renovations" },
          { text: "Office Fit-Outs" },
          { text: "Commercial Design" },
          { text: "Turnkey Execution" },
          { text: "Bespoke Joinery" },
        ]}
      />

      {/* ================= RENOVATION PACKAGES SHOWCASE ================= */}
      <SectionFlip id="renovation-styles">
        <section className="py-20 md:py-28 bg-[#E5DCC9] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 md:px-6">
            <SectionHeading
              kicker="Design Standards"
              title="Renovation Styles & Packages"
              subtitle="Crafted for Every Corner of Your Home — tailored for budget homes, Airbnb properties, and luxury penthouses."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicePackages.map((pkg) => {
                const isSelected = activePackage === pkg.name;
                return (
                  <div
                    key={pkg.name}
                    onClick={() => setActivePackage(pkg.name)}
                    className={`rounded-3xl p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                      isSelected
                        ? 'bg-white text-[#1C120E] border-[#C9A15D] shadow-xl'
                        : 'bg-white/80 text-[#1C120E] border-[#E8E2D8] hover:border-[#C9A15D]/40 shadow-sm'
                    }`}
                  >
                    <div>
                      {pkg.featured && (
                        <span className="inline-block px-3 py-1 rounded-full bg-[#C9A15D] text-white text-[9px] uppercase font-semibold tracking-widest mb-4 shadow-sm">
                          Most Popular
                        </span>
                      )}
                      <h3 className="font-serif text-2xl font-normal mb-1 text-[#1C120E] tracking-tight">
                        {pkg.name}
                      </h3>
                      <div className="text-xs text-[#C9A15D] font-semibold tracking-wide mb-2">
                        Price Range: {pkg.price}
                      </div>
                      <div className="text-[11px] text-[#1C120E]/70 font-medium mb-4 italic">
                        Design Style: {pkg.style}
                      </div>
                      <div className="text-xs font-semibold text-[#1C120E] mb-2 uppercase tracking-wider">
                        Perfect For:
                      </div>
                      <p className="text-xs mb-6 font-normal text-[#5E524A] leading-relaxed">
                        {pkg.perfectFor}
                      </p>

                      <div className="text-xs font-semibold text-[#1C120E] mb-3 uppercase tracking-wider">
                        Features Included:
                      </div>
                      <div className="space-y-2.5 mb-8">
                        {pkg.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs font-normal text-[#1C120E]/85">
                            <span className="text-[#C9A15D] font-bold">✓</span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowContact(true);
                      }}
                      className={`w-full py-3 rounded-full text-[10px] uppercase tracking-[0.25em] font-semibold transition-all ${
                        isSelected
                          ? 'btn-gold shadow-md'
                          : 'bg-white text-[#1C120E] border border-[#C9A15D]/40 hover:bg-[#C9A15D] hover:text-white'
                      }`}
                    >
                      Inquire {pkg.name}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </SectionFlip>

      {/* ================= GALLERY ================= */}
      <SectionFlip id="gallery">
        <section className="py-20 md:py-28 bg-[#FAFAFA] relative overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-[#C9A15D]/10 blur-3xl pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-5 md:px-6">
            <SectionHeading
              kicker="Showcase"
              title="BKD Interiors Portfolio Gallery"
              subtitle="Explore our completed luxury interior transformations across Dubai."
            />
            <PortfolioGrid images={portfolioImages} onOpen={setLightbox} />
          </div>
        </section>
      </SectionFlip>

      {/* ================= CTA ================= */}
      <SectionFlip>
        <CTA
          image={heroImages[0]}
          kicker="Transforming Spaces • Elevating Lifestyles"
          title="Ready to Craft Your Signature Space?"
          subtitle="Crafted for every corner of your home. Call +971 55 834 4467 or email info@bkdcontracting.com today."
          primaryLabel="Book a Free Consultation"
          onPrimary={() => setShowContact(true)}
        />
      </SectionFlip>

      {/* ================= FOOTER ================= */}
      <Footer onContactClick={() => setShowContact(true)} />

      {/* ================= CONTACT MODAL ================= */}
      <ContactModal open={showContact} onClose={() => setShowContact(false)} variant="home" />

      {/* ================= LIGHTBOX ================= */}
      {lightbox && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="modal-backdrop absolute inset-0 bg-[#1C120E]/80 backdrop-blur-md" onClick={() => setLightbox(null)} />
          <div className="modal-card relative max-w-4xl w-full">
            <img src={lightbox} alt="Portfolio preview" className="w-full max-h-[80vh] object-contain rounded-3xl shadow-2xl border border-[#C9A15D]/40" />
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-4 -right-4 w-11 h-11 rounded-full bg-[#C9A15D] text-white flex items-center justify-center hover:rotate-90 transition-transform duration-300 shadow-xl font-bold"
              aria-label="Close"
            >
              <Icon name="close" size={18} strokeWidth={2.4} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
