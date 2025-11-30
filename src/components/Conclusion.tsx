import { Fuel, Zap, Hammer, TrendingUp, Wrench } from 'lucide-react';
import DieselCarSpline from './DieselCarSpline';
import MilkshakeSpline from './MilkshakeSpline';

export default function Conclusion() {

  return (
    <section className="chapter-section min-h-screen py-24 px-6 relative overflow-hidden bg-white">

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-8xl md:text-9xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 drop-shadow-lg">
            The Journey Complete
          </h2>
          <p className="text-3xl text-slate-600 font-bold">From Kansas well to your gas tank</p>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-12 shadow-2xl border-3 border-yellow-400 mb-16">
          <div className="relative h-[600px] rounded-3xl overflow-hidden mb-8">
            <DieselCarSpline />
            <div className="absolute bottom-4 right-4 w-40 h-20 bg-white rounded-2xl shadow-2xl border-2 border-slate-200">
            </div>
          </div>

          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-yellow-200 to-orange-200 text-yellow-900 rounded-full font-black text-2xl border-3 border-yellow-500 shadow-xl">
              <Fuel size={36} />
              Planet Money Diesel
            </div>
            <p className="text-slate-800 text-xl max-w-3xl mx-auto leading-relaxed font-bold">
              Watch as Planet Money's diesel, extracted from Jason's Kansas well, refined at the CHS Coker, and
              transported through pipelines, finally fuels a vehicle.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-12 rounded-3xl border-3 border-purple-400 shadow-2xl mb-16">
          <div className="text-center mb-12">
            <h3 className="text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              I Drink Your Milkshake
            </h3>
            <p className="text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-bold">
              Inspired by the iconic scene from <span className="italic font-black text-purple-600">There Will Be Blood</span>,
              where Daniel Plainview explains directional drilling
            </p>
          </div>

          <div className="relative h-[700px] rounded-3xl overflow-hidden mb-12">
            <MilkshakeSpline />
            <div className="absolute bottom-4 right-4 w-40 h-20 bg-white rounded-2xl shadow-2xl border-2 border-slate-200">
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl border-3 border-purple-400 shadow-xl max-w-4xl mx-auto">
            <p className="text-slate-800 italic text-center text-2xl font-black mb-6 leading-relaxed">
              "There it is. It's right over there. And I own it because I've drilled and it comes up through
              here. You see? So I drink your water. I drink it up!"
            </p>
            <p className="text-center text-lg text-slate-600 font-bold">
              — Daniel Plainview, There Will Be Blood (2007)
            </p>
          </div>
        </div>

        <div className="mt-20 text-center space-y-8">
          <div className="inline-block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 p-1 rounded-3xl shadow-2xl">
            <div className="bg-white px-12 py-10 rounded-3xl">
              <h3 className="text-4xl font-black mb-8 text-slate-900">The Complete Journey</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: Hammer, title: 'Extraction', subtitle: 'Kansas Well' },
                  { icon: TrendingUp, title: 'Trading', subtitle: 'Market Forces' },
                  { icon: Wrench, title: 'Refining', subtitle: 'CHS Coker' },
                  { icon: Fuel, title: 'Consumption', subtitle: 'Your Car' },
                ].map((step, index) => {
                  const Icon = step.icon;
                  return (
                  <div key={index} className="text-center transform transition-all duration-300 hover:scale-110">
                    <div className="flex justify-center mb-3">
                      <Icon size={48} className="text-slate-700" />
                    </div>
                    <div className="font-black text-slate-900 text-lg">{step.title}</div>
                    <div className="text-sm text-slate-600 font-semibold">{step.subtitle}</div>
                  </div>
                );
                })}
              </div>
            </div>
          </div>

          <p className="text-2xl text-slate-800 max-w-3xl mx-auto leading-relaxed font-bold">
            From Jason Bruns' stripper well pumping oil half a mile underground, through Wall Street trading floors,
            refined in a Kansas farmer cooperative, transported through pipelines at 3 mph, to finally powering vehicles
            across America.
          </p>

          <div className="flex items-center justify-center gap-3 text-2xl text-slate-700 italic font-black">
            <Zap className="text-yellow-600" size={32} />
            This is the story of black gold.
            <Zap className="text-yellow-600" size={32} />
          </div>

          <p className="text-xl text-slate-600 italic font-semibold">
            The commodity that built the modern world.
          </p>
        </div>
      </div>
    </section>
  );
}
