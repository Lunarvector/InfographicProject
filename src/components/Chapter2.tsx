import { TrendingUp, Users, Gauge, Coins, ArrowUp, Mountain, Waves, Circle, BarChart, Scale, MessageCircle, TrendingDown, Building2 } from 'lucide-react';

export default function Chapter2() {

  const traderSlang = [
    { term: 'Bag', meaning: '1,000 barrels', icon: Coins },
    { term: 'Valerie', meaning: 'One', icon: ArrowUp },
    { term: 'Monkey', meaning: '500', icon: Circle },
  ];

  const extractionCosts = [
    { location: 'Middle East', cost: 8, range: '8-10', icon: Mountain, color: '#fecdd3' },
    { location: 'Permian Basin', cost: 17, range: '15-20', icon: Mountain, color: '#fed7aa' },
    { location: 'Deep Water', cost: 45, range: '40-50', icon: Waves, color: '#bfdbfe' },
    { location: 'Oil Sands', cost: 72, range: '70-75', icon: Circle, color: '#fbcfe8' },
  ];

  return (
    <section className="chapter-section min-h-screen py-24 px-6 relative overflow-hidden bg-white">

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-8xl md:text-9xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 drop-shadow-lg">
            The Price of Oil
          </h2>
          <p className="text-3xl text-slate-600 font-bold">How Wall Street meets Main Street</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-blue-200">
            <h3 className="text-3xl font-black mb-8 flex items-center gap-3">
              <Users className="text-blue-500" size={32} />
              The Great Debate
            </h3>
            <div className="space-y-6">
              <div className="p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="font-black text-xl mb-2 text-blue-600 flex items-center gap-2">
                  <Users size={24} />
                  Local Drillers
                </div>
                <p className="text-slate-700">
                  "These people trade and never see oil. They're just in it for the money."
                </p>
              </div>
              <div className="p-6 bg-orange-50 border-l-4 border-orange-500 rounded-r-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="font-black text-xl mb-2 text-orange-600 flex items-center gap-2">
                  <Building2 size={24} />
                  Wall Street Traders
                </div>
                <p className="text-slate-700">
                  Operating from the Chicago Mercantile Exchange, trading thousands of barrels with specialized slang.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-purple-200">
            <h3 className="text-3xl font-black mb-8">Trading Floor Slang</h3>
            <div className="space-y-4">
              {traderSlang.map((item, index) => (
                <div
                  key={index}
                  className="p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-300 transform transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {(() => {
                        const Icon = item.icon;
                        return <Icon size={32} className="text-purple-600" />;
                      })()}
                      <div>
                        <div className="text-2xl font-black text-purple-600">{item.term}</div>
                        <div className="text-sm text-slate-600 font-semibold">= {item.meaning}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16 bg-white rounded-3xl p-10 shadow-xl border-2 border-purple-300">
          <h3 className="text-4xl font-black mb-8 text-center text-purple-600">
            <TrendingUp className="inline mr-3" size={40} />
            Oil Futures & Speculation
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-purple-300">
              <h4 className="text-2xl font-black mb-4 text-purple-600">What are Futures?</h4>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Promises for future delivery—next month, next year, even 8 years out.
              </p>
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl border-2 border-purple-300">
                <BarChart size={32} className="text-purple-600" />
                <span className="font-black text-slate-800">1 Contract = 1,000 Barrels</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-blue-300">
              <h4 className="text-2xl font-black mb-4 text-blue-600">How Speculation Works</h4>
              <div className="space-y-3">
                {[
                  { step: 1, text: 'Futures prices go up' },
                  { step: 2, text: 'Producers withhold oil' },
                  { step: 3, text: "Today's supply decreases" },
                  { step: 4, text: "Today's price goes up" },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500 text-white font-black flex items-center justify-center flex-shrink-0">
                      {item.step}
                    </div>
                    <p className="text-slate-700 font-semibold pt-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-300 transform transition-all duration-300 hover:scale-105">
              <div className="flex justify-center mb-3">
                <Scale size={32} className="text-red-600" />
              </div>
              <h4 className="font-black text-red-600 mb-2">Congress Says</h4>
              <p className="text-sm text-slate-700">
                "Excessive speculation drives up prices artificially"
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-300 transform transition-all duration-300 hover:scale-105">
              <div className="flex justify-center mb-3">
                <MessageCircle size={32} className="text-green-600" />
              </div>
              <h4 className="font-black text-green-600 mb-2">Traders Say</h4>
              <p className="text-sm text-slate-700">
                "That's ridiculous—we provide market liquidity"
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-2xl border-2 border-amber-300 transform transition-all duration-300 hover:scale-105">
              <div className="flex justify-center mb-3">
                <TrendingUp size={32} className="text-amber-600" />
              </div>
              <h4 className="font-black text-amber-600 mb-2">Economists Find</h4>
              <p className="text-sm text-slate-700">
                "Negligible role in 2008 price spikes"
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-4xl font-black mb-12 text-center text-slate-800">
            <Gauge className="inline mr-3" size={40} />
            Extraction Costs Around the World
          </h3>
          <div className="grid gap-6">
            {extractionCosts.map((item, index) => {
              const Icon = item.icon;
              return (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl p-8 border-2 border-slate-300 shadow-lg"
                style={{ backgroundColor: item.color }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Icon size={48} className="text-slate-700" />
                    <div className="text-left">
                      <div className="text-2xl font-black text-slate-900">{item.location}</div>
                      <div className="text-sm text-slate-600 font-semibold">Range: ${item.range}/barrel</div>
                    </div>
                  </div>
                  <div className="text-4xl font-black text-slate-900">${item.cost}</div>
                </div>
              </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl p-10 border-2 border-yellow-400 shadow-xl">
          <h3 className="text-4xl font-black mb-8 text-center text-orange-600">Jason's Roller Coaster</h3>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border-2 border-yellow-400 mb-6">
              <p className="text-lg text-slate-800 mb-6 leading-relaxed font-semibold">
                The person for whom it just barely makes economic sense to turn their well on is setting the global
                price.
              </p>
              <div className="border-l-4 border-yellow-500 pl-6">
                <h4 className="font-black text-2xl mb-3 text-yellow-600">Anel Well Number Three</h4>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Jason has an unused well. Should he plug it permanently, or wait for prices to recover? This decision
                  represents the marginal cost of production.
                </p>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="flex-1 px-5 py-4 bg-red-50 border-2 border-red-300 rounded-xl font-bold text-red-700 text-center flex items-center justify-center gap-2">
                    <TrendingDown size={20} />
                    Low prices → Plug the well
                  </div>
                  <div className="flex-1 px-5 py-4 bg-green-50 border-2 border-green-300 rounded-xl font-bold text-green-700 text-center flex items-center justify-center gap-2">
                    <TrendingUp size={20} />
                    High prices → Turn it on
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center text-slate-700 font-semibold text-lg">
              This emotional roller coaster determines the marginal barrel—and thus the world price.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
