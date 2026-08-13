
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
import TeamCard from '../components/TeamCard';
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
  teamMembers,
} from '../data/content';

export default function AboutPage() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="font-sans overflow-x-hidden bg-[#1C120E] text-[#D9C7B1]">
      <Navbar links={navLinks} onContactClick={() => setShowContact(true)} />

      {/* ================= CUSTOM ABOUT HERO ================= */}
      <section className="min-h-[65vh] h-auto pt-32 pb-20 relative overflow-hidden bg-[#F9F8F6] border-b border-[#1C120E]/10 flex flex-col justify-center">
        {/* Subtle texture/gradient */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />
        
        <div className="relative max-w-5xl mx-auto px-5 z-10 w-full text-center">
          <div className="entrance-fade-up d-1 text-[10px] tracking-[0.35em] uppercase text-[#1C120E]/50 mb-8 font-mono flex items-center justify-center gap-2">
            <span className="text-[#C9A15D] font-semibold">Home</span>
            <span className="text-[#1C120E]/30">/</span>
            <span className="font-medium text-[#1C120E]/70">About</span>
          </div>

          <h1 className="entrance-fade-up d-2 text-5xl md:text-7xl lg:text-[84px] text-[#1C120E] leading-[1.05] font-serif font-light tracking-tight mb-8">
            Built on Craftsmanship,<br/>
            <span className="block text-[#C9A15D] italic font-medium mt-2">
              Driven by Trust.
            </span>
          </h1>

          <div className="entrance-fade-up d-3 w-px h-16 bg-[#C9A15D] mx-auto mb-8" />

          <p className="entrance-fade-up d-4 text-base md:text-xl text-[#1C120E]/70 font-light leading-relaxed mb-12 max-w-3xl mx-auto italic">
            "BKD Contracting is Dubai's trusted partner for interior design, renovation, and property maintenance — transforming spaces with care since day one."
          </p>

          <div className="entrance-fade-up d-5 flex flex-wrap justify-center gap-3 mb-10">
            {["Certified", "Insured", "On-Time", "UAE-Wide"].map((f) => (
              <span key={f} className="rounded-full px-5 py-2.5 text-xs md:text-sm text-[#1C120E]/80 tracking-wider uppercase font-medium flex items-center gap-2 border border-[#C9A15D]/20 bg-white/50">
                <Icon name="check" size={13} strokeWidth={3} className="text-[#C9A15D]" />
                {f}
              </span>
            ))}
          </div>

          <div className="entrance-fade-up d-6 flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setShowContact(true)} className="bg-[#1C120E] text-white hover:bg-[#C9A15D] hover:text-[#1C120E] transition-colors text-xs uppercase tracking-[0.2em] px-8 py-4 font-semibold shadow-sm">
              <span>Work With Us</span>
            </button>
            <button
              onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-[#1C120E]/20 text-[#1C120E] hover:border-[#C9A15D] hover:text-[#C9A15D] transition-colors text-xs uppercase tracking-[0.2em] px-8 py-4 font-semibold"
            >
              <span>Our Story</span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <Marquee
        dark
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
        <section className="py-20 md:py-28 bg-[#1C120E] relative overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-[#C9A15D]/10 blur-3xl pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-5 md:px-6">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
              <Reveal direction="left">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-40 h-40 rounded-2xl bg-[#C9A15D]/20 -z-10" />
                  <div className="absolute -bottom-8 -right-6 w-52 h-52 rounded-2xl border-2 border-[#C9A15D]/40 -z-10" />
                  <div className="img-zoom rounded-3xl shadow-deep overflow-hidden border border-[#C9A15D]/30">
                    <SmartImage
                      src="/images/IMG-20250805-WA0150.jpg"
                      alt="BKD Contracting team"
                      className="w-full h-[420px] md:h-[520px] object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-8 left-6 bg-[#2E1F1A] text-[#D9C7B1] rounded-2xl px-6 py-4 shadow-2xl flex items-center gap-4 border border-[#C9A15D]/50">
                    <div className="text-3xl font-extralight text-[#C9A15D] font-serif">
                      <Counter end={15} suffix="+" />
                    </div>
                    <div className="text-xs leading-tight tracking-wide font-light uppercase text-[#D9C7B1]/80">
                      Years of<br />Craftsmanship
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal direction="right">
                <span className="ornament text-[11px] tracking-[0.35em] uppercase text-[#C9A15D] font-semibold mb-4 inline-flex">
                  Our Story
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-[#D9C7B1] leading-tight mb-6">
                  Trusted Experts in<br />Property Transformation
                </h2>
                <p className="text-base md:text-lg text-[#D9C7B1]/75 font-light leading-relaxed mb-6">
                  What began as a small team of passionate craftsmen has grown into one of Dubai's most
                  trusted renovation and interior fit-out companies. From luxury villas to compact city
                  apartments, we bring the same level of precision, honesty, and pride to every project.
                </p>
                <p className="text-base md:text-lg text-[#D9C7B1]/75 font-light leading-relaxed mb-8">
                  Our mission is simple: deliver beautiful, functional spaces — on time, on budget, and
                  with craftsmanship you can see and feel.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-9">
                  {aboutHighlights.map((f, i) => (
                    <Reveal key={f.title} delay={i * 100}>
                      <div className="flex items-start gap-4 p-5 rounded-2xl glass-dark border border-[#C9A15D]/20 hover:border-[#C9A15D] transition-all duration-300 hover:shadow-soft group">
                        <span className="w-11 h-11 shrink-0 rounded-xl bg-gold-gradient flex items-center justify-center text-[#1C120E] group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-md">
                          <Icon name={f.icon} size={20} strokeWidth={2.2} />
                        </span>
                        <div>
                          <div className="font-semibold text-white">{f.title}</div>
                          <div className="text-sm text-[#D9C7B1]/65 font-light">{f.desc}</div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>

                <div className="flex flex-wrap gap-5">
                  <button onClick={() => setShowContact(true)} className="btn-gold text-xs uppercase tracking-[0.15em] px-8 py-4">
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
        <section className="py-20 md:py-28 bg-[#2E1F1A] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[24rem] h-[24rem] rounded-full bg-[#C9A15D]/10 blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-5 md:px-6">
            <SectionHeading
              light
              kicker="Why Choose Us"
              title="Craftsmanship You Can Trust"
              subtitle="At BKD Contracting, our principal architects deliver precision-engineered results with top-quality materials and zero compromises."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {whyChooseUs.map((item, i) => (
                <Reveal key={item.title} delay={i * 120}>
                  <TiltCard className="group relative h-full rounded-2xl glass-dark p-7 border border-[#C9A15D]/30 hover:border-[#C9A15D] transition-all duration-300 card-lift">
                    <div className="w-12 h-12 mb-5 rounded-2xl bg-gold-gradient flex items-center justify-center text-[#1C120E] shadow-gold group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                      <Icon name={item.icon} size={22} strokeWidth={2.2} />
                    </div>
                    <div className="text-lg font-semibold text-[#D9C7B1] mb-2">{item.title}</div>
                    <div className="text-sm text-[#D9C7B1]/65 font-light leading-relaxed">{item.desc}</div>
                    <div className="mt-5 h-1 w-8 bg-[#C9A15D] rounded-full transition-all duration-500 group-hover:w-full shadow-[0_0_8px_#C9A15D]" />
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </SectionFlip>

      {/* ================= STATS ================= */}
      <SectionFlip>
        <section className="py-16 md:py-20 bg-[#1C120E] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 md:px-6">
            <Stats stats={stats} />
          </div>
        </section>
      </SectionFlip>

      {/* ================= PARTNERSHIPS ================= */}
      <Partnerships images={partnershipImages} />

      {/* ================= TEAM ================= */}
      <SectionFlip id="team">
        <section className="py-20 md:py-28 bg-[#2E1F1A]">
          <div className="max-w-7xl mx-auto px-5 md:px-6">
            <SectionHeading
              light
              kicker="The People"
              title="Meet Our Experts"
              subtitle="A passionate team of designers, engineers, and craftspeople behind every project."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
              {teamMembers.map((member, index) => (
                <Reveal key={member.name} delay={index * 120}>
                  <TeamCard member={member} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </SectionFlip>

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
