import SplineBackground from './SplineBackground';
import DarkBackground from './DarkBackground';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <DarkBackground />
      <div className="absolute inset-0 z-[3]">
        <SplineBackground />
      </div>

      <div className="absolute bottom-3 right-3 bg-black/90 backdrop-blur-sm px-5 py-2 rounded-xl shadow-2xl z-[10] border border-white/20 pointer-events-auto">
        <p className="text-white font-black text-sm tracking-wider">BY: ANDREW M</p>
      </div>

      <div className="relative z-[5] text-center px-4 pointer-events-none max-w-7xl mx-auto">
        <h1 className="text-8xl md:text-[10rem] lg:text-[12rem] font-black mb-12 leading-[0.85] tracking-tighter">
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
