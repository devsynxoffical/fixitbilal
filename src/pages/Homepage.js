import { useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';

import FourPillarsSection from '../components/FourPillarsSection';
import SpacesSection from '../components/SpacesSection';
import MasterySection from '../components/MasterySection';
import ProcessTimelineSection from '../components/ProcessTimelineSection';
import TestimonialSlider from '../components/TestimonialSlider';
import SectionFlip from '../components/SectionFlip';

import {
  navLinks,
  servicePackages,
  testimonials,
} from '../data/content';

export default function HomePage() {
  const [showContact, setShowContact] = useState(false);
  const [activePackage, setActivePackage] = useState('Luxury');

  return (
    <div className="font-sans overflow-x-hidden bg-[#FAFAFA] text-[#1C120E]">
      {/* Navbar */}
      <Navbar links={navLinks} onContactClick={() => setShowContact(true)} isDarkHero={true} />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: '#0C0A08' }}>
        {/* Background Image */}
        <img
          src="/hero.png"
          alt="BKD Contracting Hero Background"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Left Edge Social — Instagram only */}
        <div className="hidden xl:flex flex-col items-center gap-6 absolute left-8 top-1/2 -translate-y-1/2 z-20">
          <div className="w-[1px] h-20 bg-[#C9A15D]/40" />
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-[#C9A15D]/30 flex items-center justify-center text-white hover:text-white hover:bg-[#C9A15D] transition-all duration-300" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.871a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" /></svg>
          </a>
          <div className="w-[1px] h-20 bg-[#C9A15D]/40" />
        </div>

        {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-[900px]" style={{
          background: 'radial-gradient(circle, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 75%)',
          padding: '3rem 2rem',
          borderRadius: '100px',
        }}>
          {/* Main Headline — BKD Contracting (BIG) */}
          <h1 style={{
            fontFamily: "'Cormorant Garamond', 'Georgia', serif",
            fontSize: 'clamp(52px, 8vw, 110px)',
            fontWeight: 300,
            lineHeight: 1.05,
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            marginBottom: '16px',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6)',
          }}>
            BKD Contracting.
          </h1>

          {/* Sub Headline — Delivering Lasting Value */}
          <h2 style={{
            fontFamily: "'Cormorant Garamond', 'Georgia', serif",
            fontSize: 'clamp(24px, 3.5vw, 44px)',
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: 1.2,
            color: '#C9A15D',
            marginBottom: '32px',
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.5)',
          }}>
            Delivering Lasting Value.
          </h2>

          {/* Description Paragraph */}
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(13px, 1.4vw, 16px)',
            fontWeight: 500,
            lineHeight: 1.8,
            color: '#FFFFFF',
            maxWidth: '680px',
            marginBottom: '36px',
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.9), 0 0 10px rgba(0, 0, 0, 0.7)',
          }}>
            BKD Contracting — Transforming Upscale Residences &amp; Executive Suites. We guide you through every step, ensuring a seamless blend of luxury and practicality tailored for the elite.
          </p>

          {/* Tagline */}
          <div style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(10px, 1.2vw, 13px)',
            fontWeight: 600,
            color: '#C9A15D',
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            marginBottom: '24px',
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.9), 0 0 8px rgba(0, 0, 0, 0.6)',
          }}>
            DUBAI &nbsp;•&nbsp; QUALITY &nbsp;•&nbsp; INTEGRITY
          </div>

          {/* Diamond Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            <span style={{ display: 'block', width: '60px', height: '1px', background: '#C9A15D', boxShadow: '0 1px 2px rgba(0,0,0,0.5)' }} />
            <div style={{ width: '6px', height: '6px', background: '#C9A15D', transform: 'rotate(45deg)', boxShadow: '0 1px 2px rgba(0,0,0,0.5)' }} />
            <span style={{ display: 'block', width: '60px', height: '1px', background: '#C9A15D', boxShadow: '0 1px 2px rgba(0,0,0,0.5)' }} />
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#C9A15D] to-[#A88045] text-white font-sans text-xs font-semibold tracking-[0.2em] uppercase px-10 py-4 rounded-full transition-all duration-300 hover:shadow-[0_10px_30px_rgba(201,161,93,0.45)] hover:-translate-y-1"
          >
            Book a Free Consultation
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A15D' }}>Scroll</span>
          <div className="w-[1px] h-8 bg-[#C9A15D]/60 animate-pulse" />
        </div>
      </section>

      {/* ================= 2. BEFORE & AFTER TRANSFORMATION SHOWCASE ================= */}


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
        <section className="py-24 md:py-32 bg-[#FAFAFA] text-[#1C120E] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-xs md:text-sm uppercase tracking-[0.45em] text-[#C9A15D] font-semibold mb-4 flex items-center justify-center gap-3">
                <span className="w-6 h-px bg-[#C9A15D]/50" />
                <span>Transparent Standards</span>
                <span className="w-6 h-px bg-[#C9A15D]/50" />
              </div>
              <h2 className="font-serif text-4xl md:text-6xl text-[#1C120E] font-light leading-[1.08] tracking-tight">
                Tailored Fit-Out <span className="font-light italic text-[#C9A15D]">Packages</span>
              </h2>
              <p className="text-sm md:text-base text-[#5E524A] font-normal mt-3 tracking-wide">
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
                    className={`rounded-3xl p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between border ${isSelected
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
                      <div className="text-xs text-[#C9A15D] font-semibold tracking-wide mb-4">
                        {pkg.price}
                      </div>
                      <p className="text-xs mb-6 font-normal text-[#5E524A] leading-relaxed">
                        {pkg.style}
                      </p>

                      <div className="space-y-2.5 mb-8">
                        {pkg.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-xs font-normal text-[#1C120E]/85">
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
                      className={`w-full py-3 rounded-full text-[10px] uppercase tracking-[0.25em] font-semibold transition-all ${isSelected
                          ? 'btn-gold shadow-md'
                          : 'bg-white text-[#1C120E] border border-[#C9A15D]/40 hover:bg-[#C9A15D] hover:text-white'
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
        <section className="py-24 bg-[#E5DCC9] text-[#1C120E]">
          <div className="max-w-5xl mx-auto px-5 md:px-8 text-center">
            <div className="inline-flex items-center gap-3 text-xs md:text-sm uppercase tracking-[0.35em] text-[#C9A15D] font-semibold mb-6">
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
