import { useState, useEffect } from 'react';
import Icon from './Icon';
import AnimatedWords from './AnimatedWords';

/**
 * Consistent minimalistic light hero used on all sub-pages.
 */
export default function PageHero({
  kicker,
  titleLine1,
  titleLine2,
  paragraph,
  breadcrumb = 'Home',
  scrollTarget = null,
  children,
}) {
  return (
    <section className="min-h-[60vh] h-auto py-32 md:py-40 relative overflow-hidden bg-[#F9F8F6] flex flex-col justify-center border-b border-[#1C120E]/10">
      
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A15D]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1C120E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full h-full max-w-7xl mx-auto px-5 md:px-6 flex items-center justify-center">
        <div className="text-center pt-24 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="entrance-fade-up d-1 text-[10px] tracking-[0.35em] uppercase text-[#1C120E]/50 mb-6 font-mono flex items-center justify-center gap-2">
            <span className="text-[#C9A15D] font-semibold">Home</span>
            <span className="text-[#1C120E]/30">/</span>
            <span className="font-medium text-[#1C120E]/70">{breadcrumb}</span>
          </div>

          {/* Kicker */}
          <div className="entrance-fade-up d-2 flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#C9A15D]" />
            <span className="text-[11px] md:text-xs tracking-[0.4em] uppercase text-[#C9A15D] font-semibold">
              {kicker}
            </span>
            <span className="w-8 h-px bg-[#C9A15D]" />
          </div>

          {/* Title */}
          <h1 className="section-heading text-4xl md:text-5xl lg:text-[56px] text-[#1C120E] leading-[1.1] mb-6 font-serif font-light tracking-tight">
            <AnimatedWords text={titleLine1} delayBase={0.15} />
            {titleLine2 && (
              <span className="block text-[#C9A15D] italic font-medium mt-1">
                <AnimatedWords text={titleLine2} delayBase={0.55} />
              </span>
            )}
          </h1>

          {/* Paragraph */}
          <p className="entrance-fade-up d-6 text-sm md:text-lg text-[#1C120E]/80 font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
            {paragraph}
          </p>

          {/* Extra Content (Buttons, Badges) */}
          <div className="relative z-20">
            {children}
          </div>
        </div>
      </div>

      {scrollTarget && (
        <button
          onClick={() => document.getElementById(scrollTarget)?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full border border-[#1C120E]/20 bg-white shadow-sm flex items-center justify-center text-[#1C120E] hover:border-[#C9A15D] hover:text-[#C9A15D] transition-all duration-300 animate-bounce z-30"
          aria-label="Scroll down"
        >
          <Icon name="chevron-down" size={18} />
        </button>
      )}
    </section>
  );
}
