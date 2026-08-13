import { useRef, useEffect, useState } from 'react';

/**
 * 3D tilt card. Adds perspective tilt following the mouse.
 */
export default function TiltCard({ children, className = '', maxTilt = 12, scale = 1.02, glare = true }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState('');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rx = (0.5 - py) * maxTilt * 2;
      const ry = (px - 0.5) * maxTilt * 2;

      if (glare) {
        el.style.setProperty('--gx', `${px * 100}%`);
        el.style.setProperty('--gy', `${py * 100}%`);
        el.style.setProperty('--go', '1');
      }
      setTransform(`perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale(${scale})`);
    };

    const handleLeave = () => {
      setTransform('');
      if (glare) el.style.setProperty('--go', '0');
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [maxTilt, scale, glare]);

  return (
    <div
      ref={ref}
      className={`tilt-3d ${glare ? 'tilt-glare' : ''} ${className}`}
      style={{ transform, '--go': '0' }}
    >
      {children}
    </div>
  );
}
