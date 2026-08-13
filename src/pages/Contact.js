import { useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import Marquee from '../components/Marquee';
import QuoteForm from '../components/QuoteForm';
import CTA from '../components/CTA';
import SectionFlip from '../components/SectionFlip';

import { navLinks, heroImages, contactInfo } from '../data/content';

const contactChannels = [
  { icon: 'phone', title: 'Call Us', desc: contactInfo.phone, href: `tel:${contactInfo.phoneRaw}` },
  { icon: 'whatsapp', title: 'WhatsApp', desc: contactInfo.phone, href: `https://wa.me/${contactInfo.phoneRaw}` },
  { icon: 'mail', title: 'Email Us', desc: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: 'globe', title: 'Website', desc: contactInfo.website, href: null },
];

export default function ContactPage() {
  const [showContact, setShowContact] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSuccess = () => {
    setSent(true);
  };

  return (
    <div className="font-sans overflow-x-hidden bg-[#1C120E] text-[#D9C7B1]">
      <Navbar links={navLinks} onContactClick={() => setShowContact(true)} />

      {/* ================= CUSTOM CONTACT HERO ================= */}
      <section className="min-h-[70vh] h-auto pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden bg-[#1C120E] border-b border-[#C9A15D]/10">
        <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-[#C9A15D]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 h-full flex flex-col md:flex-row items-center justify-between gap-16">
          
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left z-10 w-full">
            <div className="entrance-fade-up d-1 text-[10px] tracking-[0.35em] uppercase text-[#D9C7B1]/50 mb-6 font-mono flex items-center justify-center md:justify-start gap-2">
              <span className="text-[#C9A15D] font-semibold">Home</span>
              <span className="text-[#D9C7B1]/30">/</span>
              <span className="font-medium text-[#D9C7B1]/80">Contact</span>
            </div>
            
            <div className="entrance-fade-up d-2 flex items-center justify-center md:justify-start gap-3 mb-6">
              <span className="w-8 h-px bg-[#C9A15D]/50" />
              <span className="text-[11px] md:text-xs tracking-[0.4em] uppercase text-[#C9A15D] font-semibold">
                Get In Touch
              </span>
              <span className="w-8 h-px bg-[#C9A15D]/50 md:hidden" />
            </div>

            <h1 className="section-heading text-4xl md:text-5xl lg:text-[60px] text-[#D9C7B1] leading-[1.1] mb-6 font-serif font-light tracking-tight">
              Let's Talk About<br/>
              <span className="block text-[#C9A15D] italic font-medium mt-2">
                Your Project.
              </span>
            </h1>

            <p className="entrance-fade-up d-4 text-sm md:text-lg text-[#D9C7B1]/70 font-light leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
              Whether it's a renovation, a fit-out, or a maintenance request — we reply within 24 hours to get you started.
            </p>

            <div className="entrance-fade-up d-5 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href={`tel:${contactInfo.phoneRaw}`} className="btn-gold px-8 py-4 text-xs uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(201,161,93,0.15)]">
                <span>Call Now</span>
                <Icon name="phone" size={14} />
              </a>
              <a
                href={`https://wa.me/${contactInfo.phoneRaw}?text=Hello!%20I%27m%20interested%20in%20your%20services.`}
                target="_blank"
                rel="noreferrer"
                className="btn-outline-gold px-8 py-4 text-xs uppercase tracking-[0.2em] bg-[#1C120E]"
              >
                <span>WhatsApp Us</span>
                <Icon name="whatsapp" size={14} />
              </a>
            </div>
          </div>

          {/* Right Content (Quick Info Card) */}
          <div className="flex-1 w-full max-w-md mx-auto md:max-w-none relative z-10 pt-8 md:pt-0">
            <div className="entrance-fade-up d-7 bg-[#2E1F1A]/40 backdrop-blur-xl border border-[#C9A15D]/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A15D]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-xl font-serif text-[#C9A15D] mb-8 relative z-10">Direct Contact</h3>
              
              <div className="space-y-6 relative z-10">
                <a href={`tel:${contactInfo.phoneRaw}`} className="flex items-start gap-5 group/item">
                  <div className="w-10 h-10 rounded-full border border-[#C9A15D]/30 flex items-center justify-center text-[#C9A15D] bg-[#1C120E]/50 group-hover/item:bg-[#C9A15D] group-hover/item:text-[#1C120E] transition-all">
                    <Icon name="phone" size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#D9C7B1]/50 mb-1">Phone</p>
                    <p className="text-sm font-medium text-[#D9C7B1] group-hover/item:text-[#C9A15D] transition-colors">{contactInfo.phone}</p>
                  </div>
                </a>

                <a href={`mailto:${contactInfo.email}`} className="flex items-start gap-5 group/item">
                  <div className="w-10 h-10 rounded-full border border-[#C9A15D]/30 flex items-center justify-center text-[#C9A15D] bg-[#1C120E]/50 group-hover/item:bg-[#C9A15D] group-hover/item:text-[#1C120E] transition-all">
                    <Icon name="mail" size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#D9C7B1]/50 mb-1">Email</p>
                    <p className="text-sm font-medium text-[#D9C7B1] group-hover/item:text-[#C9A15D] transition-colors">{contactInfo.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-5 group/item">
                  <div className="w-10 h-10 rounded-full border border-[#C9A15D]/30 flex items-center justify-center text-[#C9A15D] bg-[#1C120E]/50 group-hover/item:bg-[#C9A15D] group-hover/item:text-[#1C120E] transition-all">
                    <Icon name="clock" size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#D9C7B1]/50 mb-1">Hours</p>
                    <p className="text-sm font-medium text-[#D9C7B1] group-hover/item:text-[#C9A15D] transition-colors">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <Marquee
        dark
        items={[
          { text: "We Reply Within 24 Hours" },
          { text: "Free Consultation" },
          { text: "Call +971 55 834 4467" },
          { text: "info@bkdcontracting.com" },
        ]}
      />

      {/* ================= CONTACT SECTION ================= */}
      <SectionFlip id="contact-form">
        <section className="py-20 md:py-28 bg-[#1C120E] relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-[#C9A15D]/10 blur-3xl pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-5 md:px-6">
            <SectionHeading
              light
              kicker="Contact Us"
              title="Tell Us About Your Project"
              subtitle="Fill in the form and our team will get back to you within 24 hours."
            />

            <div className="grid lg:grid-cols-5 gap-8 items-start">
              {/* INFO COLUMN */}
              <Reveal direction="left" className="lg:col-span-2">
                <div className="space-y-4">
                  {contactChannels.map((c) => (
                    <div key={c.title} className="flex items-start gap-5 p-6 rounded-2xl glass-dark border border-[#C9A15D]/20 hover:border-[#C9A15D] transition-all duration-300 group">
                      <span className="w-12 h-12 shrink-0 rounded-2xl bg-gold-gradient flex items-center justify-center text-[#1C120E] group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-md">
                        <Icon name={c.icon} size={20} strokeWidth={2.2} />
                      </span>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.25em] text-[#C9A15D] font-semibold mb-1">{c.title}</div>
                        {c.href ? (
                          <a href={c.href} target={c.icon === 'whatsapp' ? '_blank' : undefined} rel="noreferrer" className="text-white font-medium hover:text-[#C9A15D] transition-colors">
                            {c.desc}
                          </a>
                        ) : (
                          <span className="text-white font-medium">{c.desc}</span>
                        )}
                      </div>
                    </div>
                  ))}

                  <div className="p-6 rounded-2xl glass-dark border border-[#C9A15D]/40 relative overflow-hidden shadow-2xl">
                    <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#C9A15D]/10 blur-2xl pointer-events-none" />
                    <div className="relative">
                      <div className="text-[10px] uppercase tracking-[0.25em] text-[#C9A15D] font-semibold mb-2">Working Hours</div>
                      <div className="text-xl font-semibold mb-1 text-white">{contactInfo.hours}</div>
                      <div className="text-sm text-[#D9C7B1]/65 font-light">Emergency maintenance available 24/7.</div>
                      <a href={`tel:${contactInfo.phoneRaw}`} className="mt-5 inline-flex items-center gap-2 text-[#C9A15D] hover:text-[#D9C7B1] transition-colors text-sm font-semibold">
                        <Icon name="phone" size={15} />
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl glass-dark border border-[#C9A15D]/20">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-[#C9A15D] font-semibold mb-3">Explore</div>
                    <div className="flex flex-wrap gap-2">
                      {navLinks.filter((l) => l.to !== '/contact').map((l) => (
                        <Link
                          key={l.to}
                          to={l.to}
                          className="text-xs px-4 py-2 rounded-full bg-[#2E1F1A] text-[#D9C7B1]/80 hover:bg-[#C9A15D] hover:text-[#1C120E] transition-all duration-300 border border-[#C9A15D]/20"
                        >
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* FORM COLUMN */}
              <Reveal direction="right" className="lg:col-span-3">
                <div className="relative rounded-3xl glass-dark p-6 md:p-10 shadow-2xl overflow-hidden border border-[#C9A15D]/30">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />
                  {sent ? (
                    <div className="py-16 text-center">
                      <div className="mx-auto w-20 h-20 rounded-full bg-gold-gradient flex items-center justify-center text-[#1C120E] mb-6 animate-bounce">
                        <Icon name="check" size={36} strokeWidth={3} />
                      </div>
                      <h3 className="font-serif text-3xl text-white mb-3">Thank You!</h3>
                      <p className="text-[#D9C7B1]/75 font-light max-w-md mx-auto">
                        Your message has been received. Our team will contact you within 24 hours.
                      </p>
                      <button onClick={() => setSent(false)} className="btn-outline-gold mt-8 px-8 py-3.5 text-xs uppercase tracking-widest">
                        <span>Send Another Message</span>
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="mb-8">
                        <span className="ornament text-[11px] tracking-[0.3em] uppercase text-[#C9A15D] font-semibold mb-3 inline-flex">
                          Send a Message
                        </span>
                        <h3 className="font-serif text-2xl md:text-3xl text-white">
                          Request a Free Quote
                        </h3>
                      </div>
                      <QuoteForm variant="home" onSuccess={handleSuccess} />
                    </>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </SectionFlip>

      {/* ================= CTA ================= */}
      <SectionFlip>
        <CTA
          image={heroImages[1]}
          kicker="Prefer to Talk?"
          title="We're One Call Away"
          subtitle="Speak directly with a specialist for a free, no-obligation consultation."
          primaryLabel="Call +971 55 834 4467"
          onPrimary={() => {
            window.location.href = `tel:${contactInfo.phoneRaw}`;
          }}
        />
      </SectionFlip>

      {/* ================= FOOTER ================= */}
      <Footer onContactClick={() => setShowContact(true)} />

      {/* ================= CONTACT MODAL ================= */}
      <ContactModal open={showContact} onClose={() => setShowContact(false)} variant="home" />
    </div>
  );
}
