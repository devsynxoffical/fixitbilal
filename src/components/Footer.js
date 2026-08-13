import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function Footer({ onContactClick }) {
  return (
    <footer className="bg-[#2A2A2A] text-[#D9C7B1] relative overflow-hidden border-t border-[#C9A15D]/30">
      {/* Ambient background glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#C9A15D]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-[#2E1F1A]/60 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative flex-shrink-0">
                <img src="/images/bkd-logo.png" alt="BKD Contracting Logo" className="w-14 h-14 object-contain" />
                <span className="absolute -inset-1 rounded-full bg-[#C9A15D]/30 blur-lg" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-serif font-bold text-white tracking-[0.12em]">
                  BKD <span className="text-[#C9A15D]">Contracting</span>
                </span>
              </div>
            </div>
            <p className="text-[#D9C7B1]/75 text-sm leading-relaxed max-w-md font-light">
              Crafting exceptional spaces and delivering lasting value across Dubai. Specialized in luxury interior design, fit-outs, contracting, MEP technical services, and property maintenance.
            </p>
            <div className="flex gap-3 mt-8">
              {[
                { label: 'FB', url: 'https://facebook.com' },
                { label: 'IG', url: 'https://instagram.com' },
                { label: 'WA', url: 'https://wa.me/971558344467' },
                { label: 'IN', url: 'https://linkedin.com' },
              ].map(({ label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-[#C9A15D]/40 bg-[#2E1F1A] flex items-center justify-center text-[#C9A15D] hover:bg-[#C9A15D] hover:text-[#1C120E] transition-all duration-300 hover:-translate-y-1 text-xs font-bold uppercase shadow-lg"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-sm tracking-widest text-[#C9A15D] mb-6 uppercase border-b border-[#C9A15D]/30 pb-2">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'Services', to: '/services' },
                { label: 'Portfolio', to: '/portfolio' },
                { label: 'About', to: '/about' },
                { label: 'Contact', to: '/contact' },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="group inline-flex items-center gap-2 text-[#D9C7B1]/75 hover:text-[#C9A15D] transition-colors duration-300 text-xs uppercase tracking-widest font-medium">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[#C9A15D] transition-all duration-300" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-sm tracking-widest text-[#C9A15D] mb-6 uppercase border-b border-[#C9A15D]/30 pb-2">Contact</h4>
            <ul className="space-y-4 text-xs">
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 shrink-0 rounded-full border border-[#C9A15D]/40 bg-[#2E1F1A] flex items-center justify-center text-[#C9A15D]">
                  <Icon name="phone" size={14} />
                </span>
                <div>
                  <div className="text-[#D9C7B1]/50 uppercase tracking-widest text-[10px] mb-0.5">Direct Line</div>
                  <a href="tel:+971558344467" className="text-[#D9C7B1]/90 hover:text-[#C9A15D] transition-colors font-medium">+971 55 834 4467</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 shrink-0 rounded-full border border-[#C9A15D]/40 bg-[#2E1F1A] flex items-center justify-center text-[#C9A15D]">
                  <Icon name="mail" size={14} />
                </span>
                <div>
                  <div className="text-[#D9C7B1]/50 uppercase tracking-widest text-[10px] mb-0.5">Email Inquiry</div>
                  <a href="mailto:info@bkdcontracting.com" className="text-[#D9C7B1]/90 hover:text-[#C9A15D] transition-colors font-medium">info@bkdcontracting.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 shrink-0 rounded-full border border-[#C9A15D]/40 bg-[#2E1F1A] flex items-center justify-center text-[#C9A15D]">
                  <Icon name="globe" size={14} />
                </span>
                <div>
                  <div className="text-[#D9C7B1]/50 uppercase tracking-widest text-[10px] mb-0.5">Location</div>
                  <span className="text-[#D9C7B1]/90 font-medium">Dubai, United Arab Emirates</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#C9A15D]/20 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#D9C7B1]/50 uppercase tracking-widest font-light">
            &copy; {new Date().getFullYear()} BKD Contracting. All rights reserved.
          </p>
          <div className="text-[10px] tracking-[0.35em] text-[#C9A15D] uppercase font-semibold">
            DUBAI • QUALITY • INTEGRITY
          </div>
        </div>
      </div>
    </footer>
  );
}
