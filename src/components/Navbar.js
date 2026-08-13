import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from './Icon';

/**
 * Sticky navbar with blur-on-scroll and mobile drawer.
 * props:
 *  - links: [{ label, to (router path) or href (anchor) }]
 *  - onContactClick
 */
export default function Navbar({ links = [], onContactClick }) {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;
  const isLightPage = ['/services', '/about'].includes(pathname);

  const isActive = (to) => (to === '/' ? pathname === '/' : pathname.startsWith(to));

  return (
    <>
      <header
        className={`fixed w-full top-0 z-[90] transition-all duration-500 ${
          solid
            ? 'bg-[#1C120E]/95 backdrop-blur-xl border-b border-[#C9A15D]/30 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.8)] py-3.5'
            : (isLightPage ? 'bg-gradient-to-b from-[#F9F8F6]/95 via-[#F9F8F6]/50 to-transparent py-5' : 'bg-gradient-to-b from-[#1C120E]/95 via-[#1C120E]/50 to-transparent py-5')
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="group flex items-center">
            <div className="relative flex-shrink-0">
              <img
                src="/images/bkd-logo.png"
                alt="BKD Contracting Logo"
                className="w-11 h-11 md:w-14 md:h-14 object-contain transition-all duration-500 group-hover:scale-105"
              />
              <span className="absolute -inset-1 rounded-full bg-[#C9A15D]/15 blur-lg transition-all duration-500 group-hover:bg-[#C9A15D]/40" />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center space-x-8 font-medium">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`nav-link text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${
                  isActive(link.to)
                    ? 'text-[#C9A15D]'
                    : (!solid && isLightPage ? 'text-[#1C120E]/80 hover:text-[#C9A15D]' : 'text-[#D9C7B1]/80 hover:text-[#C9A15D]')
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-full border border-[#C9A15D]/40 transition-all ${
              !solid && isLightPage ? 'bg-white/80' : 'bg-[#1C120E]/80'
            }`}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[1.5px] transition-all duration-300 ${!solid && isLightPage ? 'bg-[#1C120E]' : 'bg-[#D9C7B1]'} ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-[#C9A15D] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] transition-all duration-300 ${!solid && isLightPage ? 'bg-[#1C120E]' : 'bg-[#D9C7B1]'} ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[85] lg:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-[#140C09]/85 backdrop-blur-md" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-[#2E1F1A] border-l border-[#C9A15D]/20 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-8 pt-24 flex flex-col h-full">
            <div className="text-[#C9A15D] text-xs tracking-[0.4em] uppercase font-semibold mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#C9A15D]" />
              Navigation
            </div>
            <nav className="flex flex-col space-y-1">
              {links.map((link, i) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between py-4 border-b border-[#C9A15D]/10 transition-all duration-300 text-base uppercase tracking-widest font-medium ${
                    isActive(link.to)
                      ? 'text-[#C9A15D] pl-2'
                      : 'text-[#D9C7B1]/80 hover:text-[#C9A15D] hover:pl-2'
                  }`}
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <span>{link.label}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#C9A15D]">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
