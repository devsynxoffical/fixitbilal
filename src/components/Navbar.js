import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Sticky navbar with blur-on-scroll and mobile drawer.
 * props:
 *  - links: [{ label, to (router path) or href (anchor) }]
 *  - onContactClick
 */
export default function Navbar({ links = [], onContactClick, isDarkHero = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const solid = scrolled || mobileMenuOpen;
  const isActive = (to) => (to === '/' ? location.pathname === '/' : location.pathname.startsWith(to));

  // Determine text and component styles based on scroll and dark hero state
  let headerBgClass = '';
  let navLinkClass = '';
  let whatsappBtnClass = '';
  let hamburgerLineClass = '';

  if (solid) {
    // Scrolled or mobile menu open: light background, dark text
    headerBgClass = 'bg-white/95 backdrop-blur-xl border-b border-[#C9A15D]/30 shadow-[0_10px_30px_rgba(0,0,0,0.05)] py-3.5';
    navLinkClass = 'text-[#1C120E]/80 hover:text-[#C9A15D]';
    whatsappBtnClass = 'border-2 border-[#C9A15D] text-[#1C120E] bg-white/80 hover:bg-[#C9A15D] hover:text-white';
    hamburgerLineClass = 'bg-[#1C120E]';
  } else {
    // Top of page (not scrolled)
    if (isDarkHero) {
      // Over a dark hero background: transparent background, white/gold text
      headerBgClass = 'bg-gradient-to-b from-black/60 to-transparent py-5';
      navLinkClass = 'text-white/90 hover:text-[#C9A15D]';
      whatsappBtnClass = 'border-2 border-[#C9A15D] text-white bg-white/10 backdrop-blur-sm hover:bg-[#C9A15D] hover:text-white';
      hamburgerLineClass = 'bg-white';
    } else {
      // Over a light hero background: translucent white background, dark text
      headerBgClass = 'bg-gradient-to-b from-white/90 via-white/40 to-transparent py-5';
      navLinkClass = 'text-[#1C120E]/80 hover:text-[#C9A15D]';
      whatsappBtnClass = 'border-2 border-[#C9A15D] text-[#1C120E] bg-white/80 hover:bg-[#C9A15D] hover:text-white';
      hamburgerLineClass = 'bg-[#1C120E]';
    }
  }

  return (
    <>
      <header className={`fixed w-full top-0 z-[90] transition-all duration-500 ${headerBgClass}`}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-1">
            <Link to="/" className="group inline-flex items-center">
              <div className="relative flex-shrink-0">
                <img
                  src="/images/bkd-logo.webp"
                  alt="BKD Contracting Logo"
                  className="w-14 h-14 md:w-18 md:h-18object-contain transition-all duration-500 group-hover:scale-105"
                />
                <span className="absolute -inset-1 rounded-full bg-[#C9A15D]/20 blur-lg transition-all duration-500 group-hover:bg-[#C9A15D]/40" />
              </div>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center justify-center space-x-8 font-medium flex-1">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`nav-link text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${isActive(link.to)
                  ? 'text-[#C9A15D] font-semibold'
                  : navLinkClass
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex-1 flex items-center justify-end gap-4 lg:gap-6">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/971558344467"
              target="_blank"
              rel="noreferrer"
              className={`hidden sm:inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full transition-all shadow-sm ${whatsappBtnClass}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.847L.057 23.882a.5.5 0 0 0 .614.614l6.035-1.467A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.5-5.243-1.376l-.375-.217-3.882.944.965-3.795-.232-.391A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              +971 55 834 4467
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-full border border-[#C9A15D]/40 shadow-sm transition-all ${solid ? 'bg-white/90' : 'bg-black/20 backdrop-blur-sm'}`}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-[1.5px] transition-all duration-300 ${hamburgerLineClass} ${mobileMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-[#C9A15D] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-[1.5px] transition-all duration-300 ${hamburgerLineClass} ${mobileMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[85] lg:hidden transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="absolute inset-0 bg-[#1C120E]/40 backdrop-blur-md" onClick={() => setMobileMenuOpen(false)} />
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white border-l border-[#C9A15D]/20 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
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
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-4 border-b border-[#C9A15D]/10 transition-all duration-300 text-base uppercase tracking-widest font-medium ${isActive(link.to)
                    ? 'text-[#C9A15D] pl-2 font-semibold'
                    : 'text-[#1C120E]/80 hover:text-[#C9A15D] hover:pl-2'
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
