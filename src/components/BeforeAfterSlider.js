import { useState, useRef, useCallback } from 'react';

export default function BeforeAfterSlider({ project }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) handleMove(e.clientX);
  };

  return (
    <div className="glass-dark rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl text-[#D9C7B1]">


      <div
        ref={containerRef}
        className="relative h-[320px] md:h-[440px] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-[#C9A15D]/20"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER Image (Background) */}
        <img
          src={project.after}
          alt="After Transformation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#1C120E]/80 backdrop-blur-md text-[#C9A15D] text-[10px] font-light uppercase tracking-widest border border-[#C9A15D]/40 z-10">
          AFTER
        </div>

        {/* BEFORE Image (Clipped overlay) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={project.before}
            alt="Before Transformation"
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
          />
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[10px] font-light uppercase tracking-widest border border-white/20 z-10">
            BEFORE
          </div>
        </div>

        {/* Divider Handle */}
        <div
          className="absolute inset-y-0 z-20 w-0.5 bg-[#C9A15D] cursor-ew-resize"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#C9A15D] text-[#1C120E] flex items-center justify-center font-bold shadow-xl text-xs">
            ↔
          </div>
        </div>
      </div>
    </div>
  );
}
