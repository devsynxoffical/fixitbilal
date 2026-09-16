import { useState, useEffect } from 'react';

export default function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 22 + 8;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          setDone(true);
          setTimeout(() => {
            setGone(true);
            if (onDone) onDone();
          }, 900);
        }, 350);
      }
      setProgress(Math.min(100, Math.floor(current)));
    }, 140);

    return () => {
      clearInterval(interval);
    };
  }, [onDone]);

  if (gone) return null;

  return (
    <div className={`preloader bg-[#FAFAFA] text-[#1C120E] ${done ? 'done' : ''}`}>
      <div className="loader-mark !bg-white shadow-[0_10px_40px_rgba(201,161,93,0.3)] border border-[#C9A15D]/30 !rounded-2xl overflow-hidden p-2">
        <img src="/images/bkd-logo.png" alt="BKD Contracting Logo" className="w-16 h-16 object-contain scale-110" />
      </div>
      <div className="loader-bar !bg-[#1C120E]/10 mt-8">
        <span style={{ width: `${progress}%` }} className="!bg-gradient-to-r !from-[#F0D495] !to-[#C9A15D]" />
      </div>
      <div className="loader-brand font-serif text-[#1C120E] tracking-[0.2em] text-2xl mt-6">BKD <span className="text-[#C9A15D]">Contracting</span></div>
      <div className="loader-text text-[#5E524A] tracking-[0.4em] text-[10px] uppercase font-semibold mt-2">Crafting Exceptional Spaces</div>
      <div className="mt-4 text-xs tracking-[0.3em] text-[#1C120E]/70 font-mono font-semibold">{progress}%</div>
    </div>
  );
}
