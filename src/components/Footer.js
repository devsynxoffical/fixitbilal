import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function Footer({ onContactClick }) {
  return (
    <footer className="bg-[#F2ECE4] text-[#1C120E] relative overflow-hidden border-t border-[#C9A15D]/30">
      {/* Ambient background glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#C9A15D]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-[#C9A15D]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-serif font-bold text-[#1C120E] tracking-[0.12em]">
                BKD <span className="text-[#C9A15D]">Contracting</span>
              </span>
            </div>
            <p className="text-[#5E524A] text-sm leading-relaxed max-w-md font-normal">
              Crafting exceptional spaces and delivering lasting value across Dubai. Specialized in luxury interior design, fit-outs, contracting, MEP technical services, and property maintenance.
            </p>
            <div className="flex gap-3 mt-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-[#C9A15D]/40 bg-white flex items-center justify-center text-[#C9A15D] hover:bg-[#C9A15D] hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm"
              >
                <Icon name="instagram" size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-sm tracking-widest text-[#C9A15D] mb-6 uppercase border-b border-[#C9A15D]/30 pb-2 font-semibold">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'Services', to: '/services' },
                { label: 'Portfolio', to: '/portfolio' },
                { label: 'About', to: '/about' },
                { label: 'Contact', to: '/contact' },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="group inline-flex items-center gap-2 text-[#1C120E]/80 hover:text-[#C9A15D] transition-colors duration-300 text-xs uppercase tracking-widest font-medium">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[#C9A15D] transition-all duration-300" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-sm tracking-widest text-[#C9A15D] mb-6 uppercase border-b border-[#C9A15D]/30 pb-2 font-semibold">Contact</h4>
            <ul className="space-y-4 text-xs">
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 shrink-0 rounded-full border border-[#C9A15D]/40 bg-white flex items-center justify-center text-[#C9A15D] shadow-sm">
                  <Icon name="phone" size={14} />
                </span>
                <div>
                  <div className="text-[#1C120E]/60 uppercase tracking-widest text-[10px] mb-0.5 font-medium">Direct Line</div>
                  <a href="tel:+971558344467" className="text-[#1C120E] hover:text-[#C9A15D] transition-colors font-semibold">+971 55 834 4467</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 shrink-0 rounded-full border border-[#C9A15D]/40 bg-white flex items-center justify-center text-[#C9A15D] shadow-sm">
                  <Icon name="mail" size={14} />
                </span>
                <div>
                  <div className="text-[#1C120E]/60 uppercase tracking-widest text-[10px] mb-0.5 font-medium">Email Inquiry</div>
                  <a href="mailto:info@bkdcontracting.com" className="text-[#1C120E] hover:text-[#C9A15D] transition-colors font-semibold">info@bkdcontracting.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 shrink-0 rounded-full border border-[#C9A15D]/40 bg-white flex items-center justify-center text-[#C9A15D] shadow-sm">
                  <Icon name="globe" size={14} />
                </span>
                <div>
                  <div className="text-[#1C120E]/60 uppercase tracking-widest text-[10px] mb-0.5 font-medium">Location</div>
                  <span className="text-[#1C120E] font-semibold">Dubai, United Arab Emirates</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#C9A15D]/20 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#1C120E]/60 uppercase tracking-widest font-medium">
            &copy; {new Date().getFullYear()} BKD Contracting. All rights reserved.
          </p>
          <div className="text-[10px] tracking-[0.35em] text-[#C9A15D] uppercase font-bold">
            DUBAI • QUALITY • INTEGRITY
          </div>
        </div>
      </div>
    </footer>
  );
}
