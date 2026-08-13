import { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * FlipCard - Reusable interactive 3D card component that flips 180deg
 * to showcase back content (details, feature highlights, action buttons).
 */
export default function FlipCard({
  front,
  back,
  className = '',
  height = 'h-[380px]',
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`perspective-1000 group cursor-pointer ${height} ${className}`}
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-transform duration-700 ease-out"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden glass border border-[#C9A15D]/30 shadow-2xl p-6 flex flex-col justify-between">
          {front}
          <div className="mt-4 flex items-center justify-between text-xs text-[#C9A15D] font-semibold uppercase tracking-widest pt-3 border-t border-[#C9A15D]/20">
            <span>Hover or Tap to flip</span>
            <span>↺ 3D Flip</span>
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden glass-dark border border-[#C9A15D]/60 shadow-2xl p-6 flex flex-col justify-between rotate-y-180"
          style={{ transform: 'rotateY(180deg)' }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
}
