import SplineBackground from './SplineBackground';
import DarkBackground from './DarkBackground';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <DarkBackground />
      <div className="absolute inset-0 z-[3]">
        <SplineBackground />
      </div>

      <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm px-10 py-5 rounded-2xl shadow-lg z-[10] border border-slate-200 pointer-events-auto">
        <p className="text-slate-700 font-semibold text-2xl">By: Andrew M</p>
      </div>

      <div className="relative z-[5] text-center px-4 pointer-events-none max-w-7xl mx-auto">
        <h1 className="text-8xl md:text-[10rem] lg:text-[12rem] font-black mb-12 leading-[0.85] tracking-tighter">
          <span className="block relative">
            <span className="text-rose-400 relative z-10">
              The Black Gold
            </span>
            <span className="absolute inset-0 text-rose-400/30 blur-[40px]">
              The Black Gold
            </span>
          </span>
          <span className="block relative mt-2">
            <span className="text-cyan-400 relative z-10">
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
