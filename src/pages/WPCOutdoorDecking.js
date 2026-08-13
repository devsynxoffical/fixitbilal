import { useState, useEffect } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import Marquee from '../components/Marquee';
import AnimatedWords from '../components/AnimatedWords';
import FeatureCard from '../components/FeatureCard';
import ProductCard from '../components/ProductCard';
import SmartImage from '../components/SmartImage';
import CTA from '../components/CTA';
import SectionFlip from '../components/SectionFlip';

import { navLinks } from '../data/content';

const wpcProducts = [
  {
    category: "WPC Decking Planks Hollow Square 22mm Grooved lines",
    products: [
      { name: "Dark Brown Lines Decking", code: "WPC Dark Brown Lines", normalPrice: "AED 195/m2", salePrice: "AED 175/m2", color: "Dark Brown", warranty: "10 Year Warranty", density: "Hollow Lines 50%" },
      { name: "Dark Brown Wood Grains", code: "WPC Dark Brown Wood Grains", normalPrice: "AED 195/m2", salePrice: "AED 175/m2", color: "Dark Brown", warranty: "10 Year Warranty", density: "Hollow Lines 50%" },
      { name: "Grey Lines Decking", code: "WPC Grey Lines", normalPrice: "AED 195/m2", salePrice: "AED 175/m2", color: "Grey", warranty: "10 Year Warranty", density: "Hollow Lines 50%" },
      { name: "WPC Maple Lines Decking", code: "WPC Maple Lines", normalPrice: "AED 195/m2", salePrice: "AED 175/m2", color: "Maple", warranty: "10 Year Warranty", density: "Hollow Lines 50%" },
      { name: "WPC Maple Wood Grains", code: "WPC Maple Wood Grains", normalPrice: "AED 195/m2", salePrice: "AED 175/m2", color: "Maple", warranty: "10 Year Warranty", density: "Hollow Lines 50%" },
      { name: "Pineapple Decking", code: "WPC Pineapple", normalPrice: "AED 195/m2", salePrice: "AED 175/m2", color: "Pineapple", warranty: "10 Year Warranty", density: "Hollow Lines 50%" },
      { name: "WPC Cedar Decking", code: "WPC Cedar", normalPrice: "AED 195/m2", salePrice: "AED 175/m2", color: "Pineapple", warranty: "10 Year Warranty", density: "Hollow Lines 50%" },
    ],
  },
  {
    category: "WPC Decking Planks Hollow Square 3D Pattern Effect 24mm",
    products: [
      { name: "WPC 3D Black Grey", code: "WPC 3D Black Grey", normalPrice: "AED 220/m2", salePrice: "AED 195/m2", color: "Black Grey", warranty: "10 Year Warranty", density: "Hollow Lines 65%" },
      { name: "WPC 3D Lite Grey", code: "WPC 3D Lite Grey", normalPrice: "AED 220/m2", salePrice: "AED 195/m2", color: "Lite Grey", warranty: "10 Year Warranty", density: "Hollow Lines 65%" },
      { name: "3D Brown Decking", code: "WPC 3D Brown", normalPrice: "AED 220/m2", salePrice: "AED 195/m2", color: "Brown", warranty: "10 Year Warranty", density: "Hollow Lines 65%" },
      { name: "WPC 3D Macca", code: "WPC 3D Macca", normalPrice: "AED 220/m2", salePrice: "AED 195/m2", color: "Macca", warranty: "10 Year Warranty", density: "Hollow Lines 65%" },
      { name: "3D Teak Decking", code: "WPC 3D Teak", normalPrice: "AED 220/m2", salePrice: "AED 195/m2", color: "Teak", warranty: "10 Year Warranty", density: "Hollow Lines 65%" },
      { name: "White Grey Decking", code: "WPC White Grey", normalPrice: "AED 220/m2", salePrice: "AED 195/m2", color: "White Grey", warranty: "10 Year Warranty", density: "Hollow Lines 65%" },
    ],
  },
  {
    category: "WPC Decking Planks Semi Solid 23mm Reversible Grooved Lines or 3D",
    products: [
      { name: "WPC Brown Decking", code: "WPC Brown", normalPrice: "AED 255/m2", salePrice: "AED 210/m2", color: "Brown", warranty: "10 Year Warranty", density: "Semi Solid 75%" },
      { name: "WPC Coffee Decking", code: "WPC Coffee", normalPrice: "AED 255/m2", salePrice: "AED 210/m2", color: "Coffee", warranty: "10 Year Warranty", density: "Semi Solid 75%" },
      { name: "WPC Grey Decking", code: "WPC Grey", normalPrice: "AED 255/m2", salePrice: "AED 210/m2", color: "Grey", warranty: "10 Year Warranty", density: "Semi Solid 75%" },
      { name: "WPC Teak Decking", code: "WPC Teak", normalPrice: "AED 255/m2", salePrice: "AED 210/m2", color: "Teak", warranty: "10 Year Warranty", density: "Semi Solid 75%" },
    ],
  },
  {
    category: "WPC Decking Planks Full Solid 20mm Reversible Grooved Lines or 3D",
    products: [
      { name: "Solid-3d-Brown", code: "ZS-SOLIDREV0040", normalPrice: "AED 300/m2", salePrice: "AED 265/m2", color: "Dark Brown", warranty: "10 Year Warranty", density: "Solid 100%" },
      { name: "Solid Maple", code: "ZS-SOLIDREV0041", normalPrice: "AED 300/m2", salePrice: "AED 265/m2", color: "Maple", warranty: "10 Year Warranty", density: "Solid 100%" },
      { name: "Solid-Forest-Grey", code: "ZS-SOLIDREV0042", normalPrice: "AED 300/m2", salePrice: "AED 265/m2", color: "Forest Grey", warranty: "10 Year Warranty", density: "Solid 100%" },
      { name: "Solid-Teak-Decking", code: "ZS-SOLIDREV0043", normalPrice: "AED 300/m2", salePrice: "AED 265/m2", color: "Teak", warranty: "10 Year Warranty", density: "Solid 100%" },
    ],
  },
];

const features = [
  { icon: "award", title: "Ranked #1 for Quality!", description: "WPC decking boards were named 'Highest Quality' in the PVC / Composite Decking category of the 2021 BUILDER Brand Use Study." },
  { icon: "sparkles", title: "Low Maintenance", description: "WPC Decking never has to be stained or deep cleaned." },
  { icon: "sun", title: "Fade and Stain Resistant", description: "WPC Decking boards resist fading, mould, mildew, stains, splinters and rot." },
  { icon: "leaf", title: "Environmentally Friendly", description: "Our boards are made using reclaimed wood that would otherwise go into landfill." },
  { icon: "tree", title: "Looks Like Real Wood", description: "All the beauty of natural wood…with all the benefits of composite decking!" },
  { icon: "palette", title: "Wide Range of Colours", description: "Our products range from charmingly traditional to stylish and contemporary." },
];

const heroImages = [
  "/images/wpc decking/pic1.jpg",
  "/images/wpc decking/pic3.avif",
];

export default function WPCOutdoorDecking() {
  const [showContact, setShowContact] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = (productName = '') => {
    const phoneNumber = '971558344467';
    const message = productName
      ? `Hello! I'm interested in getting a quote for ${productName}. Could you please provide me with more information?`
      : `Hello! I'm interested in getting a quote for your WPC decking products. Could you please provide me with more information?`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToProducts = () => {
    document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans overflow-x-hidden bg-[#1C120E] text-[#D9C7B1]">
      <Navbar links={navLinks} onContactClick={() => setShowContact(true)} />

      {/* ================= HERO ================= */}
      <section className="min-h-screen h-auto py-32 md:py-40 relative overflow-hidden bg-[#140C09] flex flex-col justify-center">
        {heroImages.map((img, i) => (
          <div key={img} className={`hero-img-layer ${i === currentImage ? 'active' : ''}`}>
            <SmartImage src={img} alt="WPC Outdoor Decking" className="absolute inset-0 w-full h-full object-cover animate-kenburns" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C120E]/95 via-[#1C120E]/70 to-[#1C120E]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C120E]/90 via-transparent to-[#1C120E]/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 w-full">
          <div className="text-center">
            <div className="ornament entrance-fade-up d-1 text-[11px] md:text-xs tracking-[0.4em] uppercase text-[#C9A15D] font-semibold mb-6 justify-center">
              Premium Outdoor Living
            </div>

            <h1 className="section-heading text-4xl md:text-6xl lg:text-7xl text-[#D9C7B1] leading-[1.08] mb-7">
              <AnimatedWords text="Transform Your" delayBase={0.15} />
              <span className="block text-[#C9A15D] font-serif font-extralight">
                <AnimatedWords text="Outdoor Space" delayBase={0.55} />
              </span>
            </h1>

            <p className="entrance-fade-up d-6 text-base md:text-xl text-[#D9C7B1]/80 font-light leading-relaxed mb-8 max-w-3xl mx-auto">
              Premium WPC Decking Solutions — weather-resistant, low-maintenance, and stunning wood-like
              appearance. Perfect for patios, terraces, and outdoor living areas.
            </p>

            <div className="entrance-fade-up d-7 flex flex-wrap justify-center gap-3 mb-10">
              {["No Maintenance", "Fade Resistant", "Eco-Friendly", "10 Year Warranty"].map((f) => (
                <span key={f} className="glass rounded-full px-5 py-2.5 text-xs md:text-sm text-[#D9C7B1]/90 tracking-wider uppercase font-medium flex items-center gap-2 border border-[#C9A15D]/30">
                  <Icon name="check" size={13} strokeWidth={3} className="text-[#C9A15D]" />
                  {f}
                </span>
              ))}
            </div>

            <div className="entrance-fade-up d-8 flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <button onClick={() => setShowContact(true)} className="btn-gold px-8 py-4 text-xs uppercase tracking-[0.2em]">
                <span>Get Free Quote</span>
              </button>
              <button onClick={scrollToProducts} className="btn-outline-gold px-8 py-4 text-xs uppercase tracking-[0.2em]">
                <span>View Products</span>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentImage ? 'w-10 bg-[#C9A15D] shadow-[0_0_12px_#C9A15D]' : 'w-4 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-6 right-6 md:right-10 w-12 h-12 rounded-full glass flex items-center justify-center text-[#D9C7B1] hover:bg-[#C9A15D] hover:text-[#1C120E] transition-all duration-300 animate-bounce border border-[#C9A15D]/40"
          aria-label="Scroll down"
        >
          <Icon name="chevron-down" size={20} />
        </button>
      </section>

      {/* ================= MARQUEE ================= */}
      <Marquee
        dark
        items={[
          { text: "10 Year Warranty" },
          { text: "Low Maintenance" },
          { text: "Fade Resistant" },
          { text: "Eco-Friendly" },
          { text: "Wood-Like Beauty" },
        ]}
      />

      {/* ================= INTRODUCTION ================= */}
      <SectionFlip id="intro">
        <section className="py-20 md:py-28 bg-[#1C120E] relative overflow-hidden">
          <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-[#C9A15D]/10 blur-3xl pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-5 md:px-6 text-center">
            <SectionHeading
              light
              kicker="Why WPC Decking"
              title="Premium WPC Decking Solutions"
              subtitle="If you are looking for high–quality WPC decking, then you have come to the right place. Here at BKD Contracting, we pride ourselves on providing our customers with only the best products on the market."
            />
            <Reveal delay={150}>
              <p className="text-base md:text-lg text-[#D9C7B1]/75 font-light leading-relaxed max-w-3xl mx-auto">
                Our WPC decking is made from high–quality wood and polymer, and it is designed to last for years.
                It is also very easy to install and maintain, so you can enjoy your deck for many years to come.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4">
                <div className="text-2xl md:text-3xl font-bold text-white">
                  Call Now:{" "}
                  <a href="tel:+971558344467" className="text-gold-gradient hover:opacity-80 transition-opacity">
                    +971 55 834 4467
                  </a>
                </div>
                <button onClick={() => setShowContact(true)} className="btn-gold px-8 py-3.5 text-xs uppercase tracking-widest">
                  <span>Request a Consultation</span>
                </button>
              </div>
            </Reveal>
          </div>
        </section>
      </SectionFlip>

      {/* ================= FEATURES ================= */}
      <SectionFlip>
        <section className="py-20 md:py-28 bg-[#2E1F1A]">
          <div className="max-w-7xl mx-auto px-5 md:px-6">
            <SectionHeading light kicker="Decking Benefits" title="Why Choose WPC Decking" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {features.map((feature, index) => (
                <Reveal key={feature.title} delay={(index % 3) * 120}>
                  <FeatureCard feature={feature} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </SectionFlip>

      {/* ================= PRODUCTS ================= */}
      <SectionFlip id="products-section">
        <section className="py-20 md:py-28 bg-[#1C120E]">
          <div className="max-w-7xl mx-auto px-5 md:px-6">
            <SectionHeading
              light
              kicker="Our Range"
              title="Our WPC Decking Products"
              subtitle="Explore our full range of premium WPC decking planks — every board backed by a 10-year warranty."
            />

            {wpcProducts.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-20 last:mb-0">
                <Reveal>
                  <div className="flex items-center gap-4 mb-9">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#2E1F1A] text-[#C9A15D] border border-[#C9A15D]/50 flex items-center justify-center text-lg font-bold shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                      {String(categoryIndex + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-lg md:text-2xl font-semibold text-white tracking-wide">
                      {category.category}
                    </h3>
                    <div className="hidden md:block flex-1 h-[2px] bg-gradient-to-r from-[#C9A15D] to-transparent" />
                  </div>
                </Reveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.products.map((product, productIndex) => (
                    <Reveal key={product.name} delay={(productIndex % 4) * 90} className="h-full">
                      <ProductCard product={product} onQuote={handleWhatsAppClick} />
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </SectionFlip>

      {/* ================= CTA ================= */}
      <SectionFlip>
        <CTA
          image={heroImages[0]}
          kicker="Free Appointment"
          title="Not Sure What You Need?"
          subtitle="Not sure which WPC decking option is best for you? Get in touch with one of our representatives to find the best option for you."
          primaryLabel="Connect With Our Specialist"
          onPrimary={() => setShowContact(true)}
        />
      </SectionFlip>

      {/* ================= FOOTER ================= */}
      <Footer onContactClick={() => setShowContact(true)} />

      {/* ================= CONTACT MODAL ================= */}
      <ContactModal open={showContact} onClose={() => setShowContact(false)} variant="wpc" />
    </div>
  );
}
