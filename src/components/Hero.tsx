import SplineBackground from './SplineBackground';
import DarkBackground from './DarkBackground';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <DarkBackground />
      <SplineBackground />

      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg z-[5] border border-slate-200">
        <p className="text-slate-700 font-semibold text-base">By: Andrew M</p>
      </div>

      <div className="relative z-10 text-center px-4 pointer-events-none max-w-7xl mx-auto">
        <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-black mb-12 leading-[0.85] tracking-tighter">
          <span className="block relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400 relative z-10">
              The Black
            </span>
            <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400 blur-[2px] opacity-70">
              The Black
            </span>
            <span className="absolute inset-0 text-rose-400/30 blur-[40px]">
              The Black
            </span>
          </span>
          <span className="block relative inline-block mt-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-yellow-200 relative z-10">
              Gold
            </span>
            <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-yellow-200 blur-[2px] opacity-70">
              Gold
            </span>
            <span className="absolute inset-0 text-amber-400/30 blur-[40px]">
              Gold
            </span>
          </span>
          <span className="block relative inline-block mt-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-300 relative z-10">
              Roller Coaster
            </span>
            <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-300 blur-[2px] opacity-70">
              Roller Coaster
            </span>
            <span className="absolute inset-0 text-cyan-400/30 blur-[40px]">
              Roller Coaster
            </span>
          </span>
        </h1>

        <p className="text-2xl md:text-3xl font-bold text-white/80 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
          Planet Money Buys Oil
        </p>
      </div>
    </section>
  );
}
