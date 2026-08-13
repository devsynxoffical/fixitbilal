import { useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';

import FourPillarsSection from '../components/FourPillarsSection';
import SpacesSection from '../components/SpacesSection';
import MasterySection from '../components/MasterySection';
import ProcessTimelineSection from '../components/ProcessTimelineSection';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import TestimonialSlider from '../components/TestimonialSlider';
import SectionFlip from '../components/SectionFlip';
import ParallaxBanner from '../components/ParallaxBanner';

import {
  navLinks,
  servicePackages,
  testimonials,
  portfolioProjects,
  stats,
} from '../data/content';

export default function HomePage() {
  const [showContact, setShowContact] = useState(false);
  const [activePackage, setActivePackage] = useState('Luxury');

  return (
    <div className="font-sans overflow-x-hidden bg-[#1C120E] text-[#D9C7B1]">
      {/* Navbar */}
      <Navbar links={navLinks} onContactClick={() => setShowContact(true)} />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#1C120E] text-[#D9C7B1]">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 xl:gap-20 items-center relative">
          
          {/* Left Edge Socials (Desktop) */}
          <div className="hidden xl:flex flex-col items-center gap-6 absolute left-2 top-1/2 -translate-y-1/2 z-20">
            <div className="w-[1px] h-20 bg-[#C9A15D]/30" />
            <a href="#" className="w-10 h-10 rounded-full bg-[#2E1F1A] flex items-center justify-center text-[#D9C7B1] hover:text-[#1C120E] hover:bg-[#C9A15D] transition-all duration-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#2E1F1A] flex items-center justify-center text-[#D9C7B1] hover:text-[#1C120E] hover:bg-[#C9A15D] transition-all duration-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.871a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#2E1F1A] flex items-center justify-center text-[#D9C7B1] hover:text-[#1C120E] hover:bg-[#C9A15D] transition-all duration-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21.582 6.186a2.686 2.686 0 00-1.884-1.895C17.986 3.824 12 3.824 12 3.824s-5.986 0-7.698.467A2.686 2.686 0 002.418 6.186C1.942 7.893 1.942 12 1.942 12s0 4.107.476 5.814a2.686 2.686 0 001.884 1.895C6.014 20.176 12 20.176 12 20.176s5.986 0 7.698-.467a2.686 2.686 0 001.884-1.895C22.058 16.107 22.058 12 22.058 12s0-4.107-.476-5.814zM9.948 15.276V8.724l6.34 3.276-6.34 3.276z"/></svg>
            </a>
            <div className="w-[1px] h-20 bg-[#C9A15D]/30" />
          </div>

          {/* Left Column - Large Image */}
          <div className="w-full lg:w-1/2 relative z-10 xl:pl-16">
            <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] rounded-[32px] rounded-tr-[120px] lg:rounded-tr-[160px] overflow-hidden shadow-2xl border border-white/5">
              <img
                src="/images/New/Living-and-dining_1_1_1100x.webp"
                alt="Luxury Interior Fitout"
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.85)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C120E]/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Column - Content & Small Images */}
          <div className="w-full lg:w-1/2 flex flex-col pt-4 lg:pt-0 relative z-10">
            {/* Top Divider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <span style={{ display: 'block', width: '60px', height: '1px', background: '#C9A15D' }} />
              <div style={{ width: '6px', height: '6px', background: '#C9A15D', transform: 'rotate(45deg)' }} />
              <span style={{ display: 'block', width: '60px', height: '1px', background: '#C9A15D' }} />
            </div>

            {/* Sub Headline 1 */}
            <h2 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 'clamp(12px, 1.5vw, 16px)',
              fontWeight: 500,
              color: '#FFFFFF',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}>
              Crafting Exceptional Spaces
            </h2>

            {/* Main Headline */}
            <h1 style={{
              fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.1,
              color: '#C9A15D',
              marginBottom: '20px',
            }}>
              Delivering Lasting Value.
            </h1>

            {/* Sub Headline 2 */}
            <div style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 'clamp(10px, 1.2vw, 13px)',
              fontWeight: 500,
              color: '#C9A15D',
              letterSpacing: '0.5em',
              textTransform: 'uppercase',
              marginBottom: '32px',
            }}>
              DUBAI • QUALITY • INTEGRITY
            </div>
            
            {/* Paragraph */}
            <p className="text-[clamp(13px,1.5vw,15px)] text-[#D9C7B1]/80 leading-relaxed font-light mb-10 max-w-[90%]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              BKD Contracting — Transforming Upscale Residences &amp; Executive Suites. We guide you through every step, ensuring a seamless blend of luxury and practicality tailored for the elite.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="https://wa.me/971558344467"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#C9A15D] text-[#1C120E] font-sans text-xs font-semibold tracking-[0.2em] uppercase px-7 py-3.5 rounded-full transition-all hover:bg-transparent hover:text-[#C9A15D] border-2 border-[#C9A15D]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.847L.057 23.882a.5.5 0 0 0 .614.614l6.035-1.467A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.5-5.243-1.376l-.375-.217-3.882.944.965-3.795-.232-.391A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                +971 55 834 4467
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-[#1C120E] text-[#D9C7B1] font-sans text-xs font-semibold tracking-[0.2em] uppercase px-7 py-3.5 rounded-full transition-all hover:bg-white/10 border border-white/20"
              >
                Book Consultation
              </Link>
            </div>

            {/* 3 Small Images */}
            <div className="grid grid-cols-3 gap-3 md:gap-5">
              <div className="h-24 md:h-32 rounded-[20px] overflow-hidden border border-white/5">
                <img src="/images/interrior/brown-interior-ideas-sofology-67629c06181b2.jpg" alt="Luxury Interior 1" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              </div>
              <div className="h-24 md:h-32 rounded-[20px] overflow-hidden border border-white/5">
                <img src="/images/interrior/JA_ANITA_21_442-Edit.webp" alt="Luxury Interior 2" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              </div>
              <div className="h-24 md:h-32 rounded-[20px] overflow-hidden border border-white/5">
                <img src="/images/interrior/edc110123wearstler-extras-006-652ff948f186f.jpg" alt="Luxury Interior 3" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. BEFORE & AFTER TRANSFORMATION SHOWCASE ================= */}
      <SectionFlip>
        <section className="py-24 md:py-32 bg-[#1C120E] text-[#D9C7B1] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-[10px] uppercase tracking-[0.45em] text-[#C9A15D] font-medium mb-4 flex items-center justify-center gap-3">
              <span className="w-6 h-px bg-[#C9A15D]/80" />
              <span>Real Proof</span>
              <span className="w-6 h-px bg-[#C9A15D]/80" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-[#D9C7B1] font-light leading-[1.08] tracking-tight">
              Before &amp; After <span className="font-medium italic text-[#C9A15D]">Transformations</span>
            </h2>
            <p className="text-sm md:text-base text-[#D9C7B1]/90 font-normal mt-3 tracking-wide">
              Drag the interactive comparison slider to reveal how BKD Contracting turns spaces into architectural masterpieces.
            </p>
          </div>

            <div className="grid lg:grid-cols-1 gap-12 max-w-5xl mx-auto">
              {portfolioProjects.slice(0, 1).map((proj, idx) => (
                <BeforeAfterSlider key={idx} project={proj} />
              ))}
            </div>
          </div>
        </section>
      </SectionFlip>

      {/* ================= 3. WE STAND FOR SOPHISTICATED SPACES ================= */}
      <SectionFlip>
        <SpacesSection onContactClick={() => setShowContact(true)} />
      </SectionFlip>

      {/* ================= 4. THE FOUR PILLARS SECTION ================= */}
      <SectionFlip id="pillars-section">
        <FourPillarsSection onContactClick={() => setShowContact(true)} />
      </SectionFlip>

      {/* ================= 5. THE MEDIUMS OUR MASTERY ================= */}
      <SectionFlip>
        <MasterySection onContactClick={() => setShowContact(true)} />
      </SectionFlip>



      {/* ================= 6. SPACES THAT SPEAK VOLUMES (TIMELINE) ================= */}
      <SectionFlip>
        <ProcessTimelineSection onContactClick={() => setShowContact(true)} />
      </SectionFlip>

      {/* ================= 7. PACKAGES & PRICING ================= */}
      <SectionFlip>
        <section className="py-24 md:py-32 bg-[#2E1F1A] text-[#D9C7B1] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-[10px] uppercase tracking-[0.45em] text-[#C9A15D] font-light mb-4 flex items-center justify-center gap-3">
                <span className="w-6 h-px bg-[#C9A15D]/50" />
                <span>Transparent Standards</span>
                <span className="w-6 h-px bg-[#C9A15D]/50" />
              </div>
              <h2 className="font-serif text-4xl md:text-6xl text-[#D9C7B1] font-extralight leading-[1.08] tracking-tight">
                Tailored Fit-Out <span className="font-light italic text-[#C9A15D]">Packages</span>
              </h2>
              <p className="text-sm md:text-base text-[#D9C7B1]/70 font-light mt-3 tracking-wide">
                Clear price brackets tailored for apartments, luxury penthouses, and bespoke villas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicePackages.map((pkg) => {
                const isSelected = activePackage === pkg.name;
                return (
                  <div
                    key={pkg.name}
                    onClick={() => setActivePackage(pkg.name)}
                    className={`rounded-3xl p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                      isSelected
                        ? 'bg-[#1C120E] text-[#D9C7B1] border-[#C9A15D]'
                        : 'glass-dark text-[#D9C7B1] border-white/10 hover:border-[#C9A15D]/40'
                    }`}
                  >
                    <div>
                      {pkg.featured && (
                        <span className="inline-block px-3 py-1 rounded-full bg-[#C9A15D] text-[#1C120E] text-[9px] uppercase font-semibold tracking-widest mb-4">
                          Most Popular
                        </span>
                      )}
                      <h3 className="font-serif text-2xl font-light mb-1 text-white tracking-tight">
                        {pkg.name}
                      </h3>
                      <div className="text-xs text-[#C9A15D] font-light tracking-wide mb-4">
                        {pkg.price}
                      </div>
                      <p className="text-xs mb-6 font-light text-[#D9C7B1]/70 leading-relaxed">
                        {pkg.style}
                      </p>

                      <div className="space-y-2.5 mb-8">
                        {pkg.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-xs font-light text-[#D9C7B1]/85">
                            <span className="text-[#C9A15D]">✓</span>
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
                      className={`w-full py-3 rounded-full text-[10px] uppercase tracking-[0.25em] font-light transition-all ${
                        isSelected
                          ? 'btn-gold'
                          : 'bg-[#2E1F1A] text-[#D9C7B1] border border-[#C9A15D]/40 hover:bg-[#C9A15D] hover:text-[#1C120E]'
                      }`}
                    >
                      Get Quote
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </SectionFlip>

      {/* ================= 8. TESTIMONIALS SLIDER ================= */}
      <SectionFlip>
        <section className="py-24 bg-[#F9F8F6] text-[#1C120E]">
          <div className="max-w-5xl mx-auto px-5 md:px-8 text-center">
            <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[#C9A15D] font-semibold mb-6">
              <span className="w-8 h-[1px] bg-[#C9A15D]" />
              Client Reviews
              <span className="w-8 h-[1px] bg-[#C9A15D]" />
            </div>
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </section>
      </SectionFlip>

      {/* Footer & Modal */}
      <Footer onContactClick={() => setShowContact(true)} />
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </div>
  );
}
