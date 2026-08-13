import { useState, useEffect } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

/**
 * Partnership logos slider (light section, cream background).
 * props: images: string[]
 */
export default function Partnerships({ images }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-20 md:py-24 bg-[#FDF8F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <SectionHeading kicker="Our Partnerships" title="Trusted Partners in Excellence" />
        <Reveal direction="zoom">
          <div className="relative rounded-3xl overflow-hidden shadow-deep bg-[#F1E7D0]">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full shrink-0 flex items-center justify-center py-20 md:py-28 px-8">
                  <img
                    src={image}
                    alt={`Partnership ${index + 1}`}
                    loading="lazy"
                    className="max-h-40 md:max-h-52 object-contain grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#392e23] text-[#FDF8F2] flex items-center justify-center hover:bg-[#D6B168] hover:text-[#392e23] transition-all duration-300 shadow-lg"
              aria-label="Previous"
            >
              <Icon name="arrow-right" size={20} className="rotate-180" />
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#392e23] text-[#FDF8F2] flex items-center justify-center hover:bg-[#D6B168] hover:text-[#392e23] transition-all duration-300 shadow-lg"
              aria-label="Next"
            >
              <Icon name="arrow-right" size={20} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2.5">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === current ? 'w-8 bg-[#D6B168]' : 'w-3 bg-[#392e23]/25 hover:bg-[#392e23]/50'
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
