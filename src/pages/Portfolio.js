import { useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import Marquee from '../components/Marquee';
import ProjectCard from '../components/ProjectCard';
import PortfolioGrid from '../components/PortfolioGrid';
import TestimonialSlider from '../components/TestimonialSlider';
import CTA from '../components/CTA';
import SectionFlip from '../components/SectionFlip';

import { navLinks, heroImages, portfolioProjects, portfolioImages, testimonials } from '../data/content';

export default function PortfolioPage() {
  const [showContact, setShowContact] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="font-sans overflow-x-hidden bg-[#1C120E] text-[#D9C7B1]">
      <Navbar links={navLinks} onContactClick={() => setShowContact(true)} />

      {/* ================= CUSTOM PORTFOLIO HERO ================= */}
      <section className="min-h-[60vh] h-auto pt-32 pb-24 relative overflow-hidden bg-[#1C120E] border-b border-[#C9A15D]/10 flex flex-col items-center justify-center">
        {/* Massive glowing orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#C9A15D]/20 via-[#C9A15D]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative max-w-5xl mx-auto px-5 text-center z-10 w-full mt-12 md:mt-20">
          <div className="entrance-fade-up d-1 text-[10px] tracking-[0.35em] uppercase text-[#D9C7B1]/50 mb-6 font-mono flex items-center justify-center gap-2">
            <span className="text-[#C9A15D] font-semibold">Home</span>
            <span className="text-[#D9C7B1]/30">/</span>
            <span className="font-medium text-[#D9C7B1]/80">Portfolio</span>
          </div>

          <div className="entrance-fade-up d-2 flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#C9A15D]/50" />
            <span className="text-[11px] md:text-xs tracking-[0.4em] uppercase text-[#C9A15D] font-semibold">
              Our Work
            </span>
            <span className="w-8 h-px bg-[#C9A15D]/50" />
          </div>

          <h1 className="section-heading text-4xl md:text-6xl lg:text-[72px] text-[#D9C7B1] leading-[1.05] mb-8 font-serif font-light tracking-tight">
            Spaces We've<br/>
            <span className="block text-[#C9A15D] italic font-medium mt-3">
              Transformed.
            </span>
          </h1>

          <p className="entrance-fade-up d-4 text-sm md:text-lg text-[#D9C7B1]/70 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            A curated look at the homes, offices, and outdoor areas we've reimagined across Dubai — from bold renovations to refined new builds.
          </p>

          <div className="entrance-fade-up d-5 flex flex-wrap justify-center gap-4">
            <button onClick={() => setShowContact(true)} className="btn-gold px-8 py-4 text-xs uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(201,161,93,0.2)]">
              <span>Start a Project Like This</span>
            </button>
            <button
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline-gold px-8 py-4 text-xs uppercase tracking-[0.2em] bg-[#1C120E]"
            >
              <span>Full Gallery</span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <Marquee
        dark
        items={[
          { text: "Luxury Villas" },
          { text: "Modern Apartments" },
          { text: "Office Fit-Outs" },
          { text: "Before & After" },
          { text: "Interior Design" },
        ]}
      />

      {/* ================= BEFORE / AFTER ================= */}
      <SectionFlip id="portfolio-list">
        <section className="py-20 md:py-28 bg-[#1C120E]">
          <div className="max-w-7xl mx-auto px-5 md:px-6">
            <SectionHeading
              light
              kicker="Our Work"
              title="Before & After Transformations"
              subtitle="Drag the slider on each card to see the transformation for yourself."
            />

            <div className="grid md:grid-cols-3 gap-7">
              {portfolioProjects.map((project, index) => (
                <Reveal key={project.title} delay={index * 140}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </SectionFlip>

      {/* ================= GALLERY ================= */}
      <SectionFlip id="gallery">
        <section className="py-20 md:py-28 bg-[#2E1F1A] relative overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-[#C9A15D]/10 blur-3xl pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-5 md:px-6">
            <SectionHeading
              light
              kicker="Showcase"
              title="BKD Contracting Interior Design Portfolio 2025"
              subtitle="Tap any image to view it in full screen."
            />
            <PortfolioGrid images={portfolioImages} onOpen={setLightbox} />
          </div>
        </section>
      </SectionFlip>

      {/* ================= TESTIMONIALS ================= */}
      <SectionFlip>
        <section className="py-20 md:py-28 bg-[#1C120E] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-[#C9A15D]/10 blur-3xl pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-5 md:px-6">
            <SectionHeading light kicker="Testimonials" title="What Our Clients Say" />
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </section>
      </SectionFlip>

      {/* ================= CTA ================= */}
      <SectionFlip>
        <CTA
          image={heroImages[0]}
          kicker="Let's Build Together"
          title="Want Results Like These?"
          subtitle="Book a free consultation and see how we can transform your space."
          primaryLabel="Get a Free Quote"
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
          <div className="modal-backdrop absolute inset-0 bg-[#1C120E]/90 backdrop-blur-md" onClick={() => setLightbox(null)} />
          <div className="modal-card relative max-w-4xl w-full">
            <img src={lightbox} alt="Portfolio preview" className="w-full max-h-[80vh] object-contain rounded-3xl shadow-2xl border border-[#C9A15D]/40" />
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-4 -right-4 w-11 h-11 rounded-full bg-[#C9A15D] text-[#1C120E] flex items-center justify-center hover:rotate-90 transition-transform duration-300 shadow-xl font-bold"
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
