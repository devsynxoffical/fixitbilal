
import { useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import TiltCard from '../components/TiltCard';
import Counter from '../components/Counter';
import SectionHeading from '../components/SectionHeading';
import Marquee from '../components/Marquee';
import Stats from '../components/Stats';
import Partnerships from '../components/Partnerships';
import SmartImage from '../components/SmartImage';
import CTA from '../components/CTA';
import SectionFlip from '../components/SectionFlip';

import {
  navLinks,
  heroImages,
  aboutHighlights,
  whyChooseUs,
  stats,
  partnershipImages,
} from '../data/content';

export default function AboutPage() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="font-sans overflow-x-hidden bg-[#FAFAFA] text-[#1C120E]">
      <Navbar links={navLinks} onContactClick={() => setShowContact(true)} isDarkHero={true} />

      {/* ================= CUSTOM ABOUT HERO ================= */}
      <section className="min-h-[70vh] h-auto pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden flex items-center bg-[#0C0A08]">
        {/* Background Image */}
        <img
          src="/about-hero.webp"
          alt="About BKD Contracting Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 h-full flex flex-col items-center justify-center text-center w-full z-10 py-10">
          
          {/* Centered Content with Radial Gradient Backdrop */}
          <div
            className="w-full max-w-3xl flex flex-col items-center"
            style={{
              background: 'radial-gradient(circle, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 80%)',
              padding: '3rem 2rem',
              borderRadius: '100px',
            }}
          >
            <div className="entrance-fade-up d-2 flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#C9A15D]" style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.5)' }} />
              <span
                className="text-[11px] md:text-xs tracking-[0.4em] uppercase text-[#C9A15D] font-bold"
                style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.9), 0 0 8px rgba(0, 0, 0, 0.6)' }}
              >
                Who We Are
              </span>
              <span className="w-8 h-px bg-[#C9A15D]" style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.5)' }} />
            </div>

            <h1
              className="section-heading text-4xl md:text-6xl lg:text-[72px] text-white leading-[1.1] mb-6 font-serif font-light tracking-tight text-center"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6)' }}
            >
              Built on Craftsmanship,<br/>
              <span
                className="block text-[#C9A15D] italic font-medium mt-2"
                style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.5)' }}
              >
                Driven by Trust.
              </span>
            </h1>

            <p
              className="entrance-fade-up d-4 text-sm md:text-lg text-white font-normal leading-relaxed mb-8 max-w-xl text-center"
              style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.9), 0 0 10px rgba(0, 0, 0, 0.7)' }}
            >
              BKD Contracting is Dubai's premier partner for turnkey fit-outs, interior design, and property transformations — delivering excellence since day one.
            </p>

            <div className="entrance-fade-up d-5 flex flex-wrap justify-center gap-3 mb-10">
              {["Certified", "Insured", "On-Time", "UAE-Wide"].map((f) => (
                <span
                  key={f}
                  className="rounded-full px-5 py-2 text-xs text-white tracking-wider uppercase font-semibold flex items-center gap-2 border border-[#C9A15D]/50 bg-black/40 backdrop-blur-md shadow-md"
                >
                  <Icon name="check" size={13} strokeWidth={3} className="text-[#C9A15D]" />
                  {f}
                </span>
              ))}
            </div>

            <div className="entrance-fade-up d-6 flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => setShowContact(true)} className="bg-[#C9A15D] text-white hover:bg-white hover:text-[#1C120E] transition-colors text-xs uppercase tracking-[0.2em] px-8 py-4 font-bold shadow-md rounded-full border border-transparent">
                <span>Work With Us</span>
              </button>
              <button
                onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-white/40 text-white hover:border-[#C9A15D] hover:bg-[#C9A15D] transition-colors text-xs uppercase tracking-[0.2em] px-8 py-4 font-bold rounded-full backdrop-blur-sm bg-white/10 shadow-md"
              >
                <span>Our Story</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <Marquee
        dark={false}
        items={[
          { text: "15+ Years" },
          { text: "280+ Projects" },
          { text: "Certified Team" },
          { text: "Quality Guaranteed" },
          { text: "Customer First" },
        ]}
      />

      {/* ================= STORY ================= */}
      <SectionFlip id="story">
        <section className="py-20 md:py-28 bg-[#FAFAFA] relative overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-[#C9A15D]/10 blur-3xl pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-5 md:px-6">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
              <Reveal direction="left">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-40 h-40 rounded-2xl bg-[#C9A15D]/20 -z-10" />
                  <div className="absolute -bottom-8 -right-6 w-52 h-52 rounded-2xl border-2 border-[#C9A15D]/40 -z-10" />
                  <div className="img-zoom rounded-3xl shadow-xl overflow-hidden border border-[#C9A15D]/30">
                    <SmartImage
                      src="/images/about-story.webp"
                      alt="BKD Contracting team"
                      className="w-full h-[420px] md:h-[520px] object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-8 left-6 bg-white text-[#1C120E] rounded-2xl px-6 py-4 shadow-xl flex items-center gap-4 border border-[#C9A15D]/40">
                    <div className="text-3xl font-bold text-[#C9A15D] font-serif">
                      <Counter end={15} suffix="+" />
                    </div>
                    <div className="text-xs leading-tight tracking-wide font-medium uppercase text-[#5E524A]">
                      Years of<br />Craftsmanship
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal direction="right">
                <span className="ornament text-[11px] tracking-[0.35em] uppercase text-[#C9A15D] font-bold mb-4 inline-flex">
                  Our Story
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-[#1C120E] leading-tight mb-6 font-light">
                  Trusted Experts in<br />Property Transformation
                </h2>
                <p className="text-base md:text-lg text-[#5E524A] font-normal leading-relaxed mb-6">
                  What began as a small team of passionate craftsmen has grown into one of Dubai's most
                  trusted renovation and interior fit-out companies. From luxury villas to compact city
                  apartments, we bring the same level of precision, honesty, and pride to every project.
                </p>
                <p className="text-base md:text-lg text-[#5E524A] font-normal leading-relaxed mb-8">
                  Our mission is simple: deliver beautiful, functional spaces — on time, on budget, and
                  with craftsmanship you can see and feel.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-9">
                  {aboutHighlights.map((f, i) => (
                    <Reveal key={f.title} delay={i * 100}>
                      <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E8E2D8] hover:border-[#C9A15D] transition-all duration-300 shadow-sm hover:shadow-md group">
                        <span className="w-11 h-11 shrink-0 rounded-xl bg-gold-gradient flex items-center justify-center text-white group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-md">
                          <Icon name={f.icon} size={20} strokeWidth={2.2} />
                        </span>
                        <div>
                          <div className="font-semibold text-[#1C120E]">{f.title}</div>
                          <div className="text-sm text-[#5E524A] font-normal">{f.desc}</div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>

                <div className="flex flex-wrap gap-5">
                  <button onClick={() => setShowContact(true)} className="btn-gold text-xs uppercase tracking-[0.15em] px-8 py-4 shadow-md">
                    <span>Start Your Project</span>
                  </button>
                  <button
                    onClick={() => document.getElementById('values')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-outline-gold text-xs uppercase tracking-[0.15em] px-8 py-4"
                  >
                    <span>Our Values</span>
                  </button>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </SectionFlip>

      {/* ================= VALUES / WHY CHOOSE US ================= */}
      <SectionFlip id="values">
        <section className="py-20 md:py-28 bg-[#E5DCC9] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[24rem] h-[24rem] rounded-full bg-[#C9A15D]/10 blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-5 md:px-6">
            <SectionHeading
              kicker="Why Choose Us"
              title="Craftsmanship You Can Trust"
              subtitle="At BKD Contracting, our principal architects deliver precision-engineered results with top-quality materials and zero compromises."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {whyChooseUs.map((item, i) => (
                <Reveal key={item.title} delay={i * 120}>
                  <TiltCard className="group relative h-full rounded-2xl bg-white p-7 border border-[#E8E2D8] hover:border-[#C9A15D] transition-all duration-300 card-lift shadow-sm">
                    <div className="w-12 h-12 mb-5 rounded-2xl bg-gold-gradient flex items-center justify-center text-white shadow-md group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                      <Icon name={item.icon} size={22} strokeWidth={2.2} />
                    </div>
                    <div className="text-lg font-semibold text-[#1C120E] mb-2">{item.title}</div>
                    <div className="text-sm text-[#5E524A] font-normal leading-relaxed">{item.desc}</div>
                    <div className="mt-5 h-1 w-8 bg-[#C9A15D] rounded-full transition-all duration-500 group-hover:w-full" />
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </SectionFlip>

      {/* ================= STATS ================= */}
      <SectionFlip>
        <section className="py-16 md:py-20 bg-[#FAFAFA] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 md:px-6">
            <Stats stats={stats} />
          </div>
        </section>
      </SectionFlip>

      {/* ================= PARTNERSHIPS ================= */}
      <Partnerships images={partnershipImages} />

      {/* ================= CTA ================= */}
      <SectionFlip>
        <CTA
          image={heroImages[0]}
          kicker="Join Our Clients"
          title="Let's Build Something Great Together"
          subtitle="From first sketch to final handover — experience the BKD Contracting difference."
          primaryLabel="Book a Free Consultation"
          onPrimary={() => setShowContact(true)}
        />
      </SectionFlip>

      {/* ================= FOOTER ================= */}
      <Footer onContactClick={() => setShowContact(true)} />

      {/* ================= CONTACT MODAL ================= */}
      <ContactModal open={showContact} onClose={() => setShowContact(false)} variant="home" />
    </div>
  );
}
