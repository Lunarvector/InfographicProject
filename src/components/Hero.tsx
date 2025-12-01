import SplineBackground from './SplineBackground';
import DarkBackground from './DarkBackground';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const titleOpacity = Math.max(0, 1 - scrollY / 300);
  const titleScale = Math.max(0.8, 1 - scrollY / 1500);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <DarkBackground />
      <div className="absolute inset-0 z-[3]">
        <SplineBackground />
      </div>

      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg z-[10] border border-slate-200 pointer-events-auto hover:scale-105 transition-transform duration-300">
        <p className="text-slate-700 font-semibold text-base">By: Andrew M</p>
      </div>

      <div
        className="relative z-[5] text-center px-4 pointer-events-none max-w-7xl mx-auto transition-all duration-300"
        style={{
          opacity: titleOpacity,
          transform: `scale(${titleScale})`
        }}
      >
        <h1 className="text-7xl md:text-[8rem] lg:text-[9rem] font-black mb-12 leading-[0.85] tracking-tighter animate-[fadeInUp_1.2s_ease-out]">
          <span className="block relative inline-block hover:scale-105 transition-transform duration-500">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400 relative z-10 animate-[shimmer_3s_ease-in-out_infinite]">
              The Black
            </span>
            <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400 blur-[2px] opacity-70">
              The Black
            </span>
            <span className="absolute inset-0 text-rose-400/30 blur-[40px] animate-pulse">
              The Black
            </span>
          </span>
          <span className="block relative inline-block mt-2 hover:scale-105 transition-transform duration-500 animation-delay-200">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-yellow-200 relative z-10 animate-[shimmer_3s_ease-in-out_infinite_0.5s]">
              Gold
            </span>
            <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-yellow-200 blur-[2px] opacity-70">
              Gold
            </span>
            <span className="absolute inset-0 text-amber-400/30 blur-[40px] animate-pulse animation-delay-500">
              Gold
            </span>
          </span>
          <span className="block relative inline-block mt-2 hover:scale-105 transition-transform duration-500 animation-delay-400">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-300 relative z-10 animate-[shimmer_3s_ease-in-out_infinite_1s]">
              Roller Coaster
            </span>
            <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-300 blur-[2px] opacity-70">
              Roller Coaster
            </span>
            <span className="absolute inset-0 text-cyan-400/30 blur-[40px] animate-pulse animation-delay-1000">
              Roller Coaster
            </span>
          </span>
        </h1>

        <p className="text-2xl md:text-3xl font-bold text-white/80 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] animate-[fadeIn_1.5s_ease-out_0.5s_both]">
          Planet Money Buys Oil
        </p>
      </div>
    </section>
  );
}
