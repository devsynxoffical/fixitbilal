
import { useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import TiltCard from '../components/TiltCard';
import SectionHeading from '../components/SectionHeading';
import Marquee from '../components/Marquee';
import ServiceCard from '../components/ServiceCard';
import PackageCard from '../components/PackageCard';
import Counter from '../components/Counter';
import CTA from '../components/CTA';
import SectionFlip from '../components/SectionFlip';

import { navLinks, heroImages, services, servicePackages, whyChooseUs } from '../data/content';

const processSteps = [
  { step: '01', icon: 'phone', title: 'Consultation', desc: 'We listen to your vision, budget, and timeline during a free consultation.' },
  { step: '02', icon: 'palette', title: 'Design & Plan', desc: 'Our designers craft a tailored plan with 3D visuals and material selection.' },
  { step: '03', icon: 'hammer', title: 'Execution', desc: 'Certified professionals bring the design to life with strict quality control.' },
  { step: '04', icon: 'sparkles', title: 'Handover & Care', desc: 'We walk you through the finish and stay on for maintenance and aftercare.' },
];

export default function ServicesPage() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="font-sans overflow-x-hidden bg-[#FAFAFA] text-[#1C120E]">
      <Navbar links={navLinks} onContactClick={() => setShowContact(true)} isDarkHero={true} />

      {/* ================= CUSTOM SERVICES HERO ================= */}
      <section className="min-h-[70vh] h-auto pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden flex items-center bg-[#0C0A08]">
        {/* Background Image */}
        <img
          src="/service-hero.png"
          alt="Services Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 h-full flex flex-col items-center justify-center text-center w-full z-10 py-10">
          
          {/* Centered Content with Radial Gradient Backdrop */}
          <div
            className="w-full max-w-3xl flex flex-col items-center"
            style={{
              background: 'radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0) 75%)',
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
                What We Do
              </span>
              <span className="w-8 h-px bg-[#C9A15D]" style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.5)' }} />
            </div>

            <h1
              className="section-heading text-4xl md:text-6xl lg:text-[72px] text-white leading-[1.1] mb-6 font-serif font-light tracking-tight text-center"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6)' }}
            >
              Complete Services,<br/>
              <span
                className="block text-[#C9A15D] italic font-medium mt-2"
                style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.5)' }}
              >
                One Trusted Partner.
              </span>
            </h1>

            <p
              className="entrance-fade-up d-4 text-sm md:text-lg text-white font-normal leading-relaxed mb-10 max-w-xl text-center"
              style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.9), 0 0 10px rgba(0, 0, 0, 0.7)' }}
            >
              From design and renovation to maintenance — BKD Contracting handles every detail of your project with precision and care.
            </p>

            <div className="entrance-fade-up d-5 flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => setShowContact(true)} className="bg-[#C9A15D] text-white hover:bg-white hover:text-[#1C120E] transition-colors text-xs uppercase tracking-[0.2em] px-8 py-4 font-bold shadow-md rounded-full border border-transparent">
                <span>Get a Free Quote</span>
              </button>
              <button
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-white/40 text-white hover:border-[#C9A15D] hover:bg-[#C9A15D] transition-colors text-xs uppercase tracking-[0.2em] px-8 py-4 font-bold rounded-full backdrop-blur-sm bg-white/10 shadow-md"
              >
                <span>View Packages</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <Marquee
        dark={false}
        items={[
          { text: "Interior Design" },
          { text: "Renovation" },
          { text: "Fit-Outs" },
          { text: "Carpentry" },
          { text: "Landscaping" },
          { text: "Maintenance" },
        ]}
      />

      {/* ================= SERVICES ================= */}
      <SectionFlip id="services-list">
        <section className="py-20 md:py-28 bg-[#FAFAFA] relative overflow-hidden">
          <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-[#C9A15D]/10 blur-3xl pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-5 md:px-6">
            <SectionHeading
              kicker="What We Do"
              title="Our Services"
              subtitle="From concept to completion, we handle every detail of your project with precision and care."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {services.map((service, index) => (
                <Reveal key={service.title} delay={(index % 3) * 120}>
                  <ServiceCard service={service} onRequest={() => setShowContact(true)} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </SectionFlip>

      {/* ================= PROCESS ================= */}
      <SectionFlip>
        <section className="py-20 md:py-28 bg-[#E5DCC9] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[24rem] h-[24rem] rounded-full bg-[#C9A15D]/10 blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-5 md:px-6">
            <SectionHeading
              kicker="How We Work"
              title="A Simple, Proven Process"
              subtitle="Four clear steps from first hello to flawless handover."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((item, i) => (
                <Reveal key={item.step} delay={i * 120}>
                  <TiltCard className="group relative h-full rounded-2xl bg-white p-7 border border-[#E8E2D8] hover:border-[#C9A15D] transition-all duration-300 card-lift shadow-sm">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-gold-gradient flex items-center justify-center text-white shadow-md group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                        <Icon name={item.icon} size={22} strokeWidth={2.2} />
                      </div>
                      <span className="text-3xl font-serif font-bold text-[#C9A15D]/40 group-hover:text-[#C9A15D] transition-colors duration-300">
                        {item.step}
                      </span>
                    </div>
                    <div className="text-lg font-semibold text-[#1C120E] mb-2">{item.title}</div>
                    <div className="text-sm text-[#5E524A] font-normal leading-relaxed">{item.desc}</div>
                    <div className="mt-5 h-1 w-8 bg-[#C9A15D] rounded-full transition-all duration-500 group-hover:w-full" />
                  </TiltCard>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-14">
              <div className="rounded-3xl bg-white border border-[#E8E2D8] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                <div>
                  <div className="text-xl md:text-2xl font-serif font-medium text-[#1C120E]">Not sure where to start?</div>
                  <p className="text-[#5E524A] font-normal mt-1">Talk to a principal architect and get a tailored recommendation within 24 hours.</p>
                </div>
                <div className="flex items-center gap-5 shrink-0">
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#C9A15D]">
                      <Counter end={280} suffix="+" />
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-[#1C120E]/60 font-semibold">Projects Done</div>
                  </div>
                  <button onClick={() => setShowContact(true)} className="btn-gold text-xs uppercase tracking-[0.15em] px-7 py-3.5 shadow-md">
                    <span>Book Consultation</span>
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </SectionFlip>

      {/* ================= PACKAGES ================= */}
      <SectionFlip id="packages">
        <section className="py-20 md:py-28 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-5 md:px-6">
            <SectionHeading
              kicker="Pricing"
              title="Service Packages"
              subtitle="Transparent packages built around your budget and vision."
            />

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">
              {servicePackages.map((pkg, index) => (
                <Reveal key={pkg.name} delay={index * 120} className="h-full">
                  <PackageCard pkg={pkg} onBook={() => setShowContact(true)} />
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-14">
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {whyChooseUs.map((item, i) => (
                  <div key={item.title} className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-[#E8E2D8] hover:border-[#C9A15D] transition-all duration-300 shadow-sm group">
                    <span className="w-10 h-10 shrink-0 rounded-xl bg-gold-gradient flex items-center justify-center text-white group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-md">
                      <Icon name={item.icon} size={18} strokeWidth={2.2} />
                    </span>
                    <div>
                      <div className="font-semibold text-[#1C120E] text-sm">{item.title}</div>
                      <div className="text-xs text-[#5E524A] font-normal">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </SectionFlip>

      {/* ================= CTA ================= */}
      <SectionFlip>
        <CTA
          image={heroImages[0]}
          kicker="Get Started Today"
          title="Ready to Start Your Project?"
          subtitle="Book your free consultation today and let our experts bring your vision to life."
          primaryLabel="Book Now — It’s Free"
          onPrimary={() => setShowContact(true)}
          secondaryLabel="View Our Work"
          onSecondary={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
        />
      </SectionFlip>

      {/* ================= FOOTER ================= */}
      <Footer onContactClick={() => setShowContact(true)} />

      {/* ================= CONTACT MODAL ================= */}
      <ContactModal open={showContact} onClose={() => setShowContact(false)} variant="home" />
    </div>
  );
}
