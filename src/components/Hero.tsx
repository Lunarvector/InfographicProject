import { ChevronDown } from 'lucide-react';
import Particles from './Particles';
import SplineBackground from './SplineBackground';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <SplineBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black z-[1]" />

      <Particles
        className="absolute inset-0 z-[2]"
        quantity={80}
        staticity={30}
        ease={50}
      />

      <div className="absolute inset-0 z-[3] opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-rose-500/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-500/30 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 text-center px-4 pointer-events-none max-w-7xl mx-auto">
        <div className="inline-block mb-8 px-8 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl">
          <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400">
            A Planet Money Story
          </p>
        </div>

        <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-black mb-8 leading-[0.9] tracking-tighter">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400 drop-shadow-[0_0_80px_rgba(251,146,60,0.5)]">
            The Black
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-yellow-200 drop-shadow-[0_0_80px_rgba(251,191,36,0.5)] mt-2">
            Gold
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-300 drop-shadow-[0_0_80px_rgba(34,211,238,0.5)] mt-2">
            Roller Coaster
          </span>
        </h1>

        <div className="space-y-4 mb-8">
          <p className="text-3xl md:text-4xl font-bold text-white/90 drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            Planet Money Buys Oil
          </p>

          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed font-medium">
            From a Kansas well to your gas tank. Experience the complete journey of one barrel of oil
            through markets, refineries, and pipelines.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500/20 via-orange-500/20 to-amber-500/20 backdrop-blur-xl rounded-full border border-white/10">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-white/70">Interactive Experience</span>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none">
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm font-semibold text-white/60 tracking-wider uppercase">Scroll to explore</p>
          <div className="animate-bounce">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 via-orange-400 to-amber-400 flex items-center justify-center shadow-[0_0_40px_rgba(251,146,60,0.6)]">
              <ChevronDown size={24} className="text-black" strokeWidth={3} />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-8 left-8 z-10 pointer-events-none">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-rose-400 shadow-[0_0_20px_rgba(251,113,133,0.8)]" />
          <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.8)]" />
          <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
        </div>
      </div>
    </section>
  );
}
