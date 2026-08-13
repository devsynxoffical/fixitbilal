
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
    <div className="font-sans overflow-x-hidden bg-[#1C120E] text-[#D9C7B1]">
      <Navbar links={navLinks} onContactClick={() => setShowContact(true)} />

      {/* ================= CUSTOM SERVICES HERO ================= */}
      <section className="min-h-[70vh] h-auto pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden bg-[#F9F8F6] border-b border-[#1C120E]/10">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C9A15D]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1C120E]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 h-full flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left z-10 w-full">
            <div className="entrance-fade-up d-1 text-[10px] tracking-[0.35em] uppercase text-[#1C120E]/50 mb-6 font-mono flex items-center justify-center md:justify-start gap-2">
              <span className="text-[#C9A15D] font-semibold">Home</span>
              <span className="text-[#1C120E]/30">/</span>
              <span className="font-medium text-[#1C120E]/70">Services</span>
            </div>
            
            <div className="entrance-fade-up d-2 flex items-center justify-center md:justify-start gap-3 mb-6">
              <span className="w-8 h-px bg-[#C9A15D]" />
              <span className="text-[11px] md:text-xs tracking-[0.4em] uppercase text-[#C9A15D] font-semibold">
                What We Do
              </span>
              <span className="w-8 h-px bg-[#C9A15D] md:hidden" />
            </div>

            <h1 className="section-heading text-4xl md:text-5xl lg:text-[56px] text-[#1C120E] leading-[1.1] mb-6 font-serif font-light tracking-tight">
              Complete Services,<br/>
              <span className="block text-[#C9A15D] italic font-medium mt-2">
                One Trusted Partner.
              </span>
            </h1>

            <p className="entrance-fade-up d-4 text-sm md:text-lg text-[#1C120E]/80 font-normal leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
              From design and renovation to maintenance — BKD Contracting handles every detail of your project with precision and care.
            </p>

            <div className="entrance-fade-up d-5 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button onClick={() => setShowContact(true)} className="bg-[#1C120E] text-white hover:bg-[#C9A15D] hover:text-[#1C120E] transition-colors text-xs uppercase tracking-[0.2em] px-8 py-4 font-semibold shadow-sm">
                <span>Get a Free Quote</span>
              </button>
              <button
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-[#1C120E]/20 text-[#1C120E] hover:border-[#C9A15D] hover:text-[#C9A15D] transition-colors text-xs uppercase tracking-[0.2em] px-8 py-4 font-semibold"
              >
                <span>View Packages</span>
              </button>
            </div>
          </div>

          {/* Right Content (Badges grid) */}
          <div className="flex-1 relative z-10 w-full max-w-md mx-auto md:max-w-none pt-10 md:pt-0">
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Design & Build", icon: "paintbrush" },
                { name: "Renovation", icon: "hammer" },
                { name: "Fit-Outs", icon: "sofa" },
                { name: "Maintenance", icon: "wrench" },
              ].map((f, i) => (
                <div key={f.name} className={`entrance-fade-up flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-[#1C120E]/10 bg-white/60 backdrop-blur-md shadow-sm hover:border-[#C9A15D]/50 hover:shadow-md transition-all duration-300 ${i % 2 !== 0 ? 'mt-8' : ''}`} style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="w-12 h-12 rounded-full bg-[#1C120E]/5 flex items-center justify-center text-[#C9A15D]">
                    <Icon name={f.icon} size={20} strokeWidth={2} />
                  </div>
                  <span className="text-xs tracking-wider uppercase font-semibold text-[#1C120E]">
                    {f.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <Marquee
        dark
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
        <section className="py-20 md:py-28 bg-[#1C120E] relative overflow-hidden">
          <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-[#C9A15D]/10 blur-3xl pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-5 md:px-6">
            <SectionHeading
              light
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
        <section className="py-20 md:py-28 bg-[#2E1F1A] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[24rem] h-[24rem] rounded-full bg-[#C9A15D]/10 blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-5 md:px-6">
            <SectionHeading
              light
              kicker="How We Work"
              title="A Simple, Proven Process"
              subtitle="Four clear steps from first hello to flawless handover."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((item, i) => (
                <Reveal key={item.step} delay={i * 120}>
                  <TiltCard className="group relative h-full rounded-2xl glass-dark p-7 border border-[#C9A15D]/30 hover:border-[#C9A15D] transition-all duration-300 card-lift">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-gold-gradient flex items-center justify-center text-[#1C120E] shadow-gold group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                        <Icon name={item.icon} size={22} strokeWidth={2.2} />
                      </div>
                      <span className="text-3xl font-serif font-bold text-[#C9A15D]/30 group-hover:text-[#C9A15D]/80 transition-colors duration-300">
                        {item.step}
                      </span>
                    </div>
                    <div className="text-lg font-semibold text-[#D9C7B1] mb-2">{item.title}</div>
                    <div className="text-sm text-[#D9C7B1]/65 font-light leading-relaxed">{item.desc}</div>
                    <div className="mt-5 h-1 w-8 bg-[#C9A15D] rounded-full transition-all duration-500 group-hover:w-full shadow-[0_0_8px_#C9A15D]" />
                  </TiltCard>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-14">
              <div className="rounded-3xl glass-dark border border-[#C9A15D]/30 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
                <div>
                  <div className="text-xl md:text-2xl font-serif font-medium text-[#D9C7B1]">Not sure where to start?</div>
                  <p className="text-[#D9C7B1]/70 font-light mt-1">Talk to a principal architect and get a tailored recommendation within 24 hours.</p>
                </div>
                <div className="flex items-center gap-5 shrink-0">
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#C9A15D]">
                      <Counter end={280} suffix="+" />
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-[#D9C7B1]/60">Projects Done</div>
                  </div>
                  <button onClick={() => setShowContact(true)} className="btn-gold text-xs uppercase tracking-[0.15em] px-7 py-3.5">
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
        <section className="py-20 md:py-28 bg-[#1C120E]">
          <div className="max-w-7xl mx-auto px-5 md:px-6">
            <SectionHeading
              light
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
                  <div key={item.title} className="flex items-start gap-3 p-5 rounded-2xl glass-dark border border-[#C9A15D]/20 hover:border-[#C9A15D] transition-all duration-300 hover:shadow-soft group">
                    <span className="w-10 h-10 shrink-0 rounded-xl bg-gold-gradient flex items-center justify-center text-[#1C120E] group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-md">
                      <Icon name={item.icon} size={18} strokeWidth={2.2} />
                    </span>
                    <div>
                      <div className="font-semibold text-[#D9C7B1] text-sm">{item.title}</div>
                      <div className="text-xs text-[#D9C7B1]/65 font-light">{item.desc}</div>
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
