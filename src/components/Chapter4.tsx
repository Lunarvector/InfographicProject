import { useState, useEffect } from 'react';
import { Wind, Zap, Trees, TrendingDown, Globe2, AlertTriangle, ChevronRight, Factory, Fuel, GraduationCap, Ship, Waves, Battery } from 'lucide-react';

export default function Chapter4() {

  const frackingImpacts = [
    {
      title: 'Economic Power',
      desc: 'US became largest global producer',
      icon: Globe2,
      type: 'positive',
    },
    {
      title: 'Global Markets',
      desc: 'Lower prices hurt Venezuela, Russia, Saudi Arabia',
      icon: TrendingDown,
      type: 'neutral',
    },
    {
      title: 'Jobs & Security',
      desc: 'Domestic jobs and energy independence',
      icon: Zap,
      type: 'positive',
    },
    {
      title: 'Environmental',
      desc: 'Cheap oil pushes out alternatives',
      icon: AlertTriangle,
      type: 'negative',
    },
  ];

  return (
    <section className="chapter-section min-h-screen py-24 px-6 relative overflow-hidden bg-white">

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-green-400 tracking-tight whitespace-nowrap">
            Imagine a World Without Oil
          </h2>
          <p className="text-2xl text-slate-600 font-bold tracking-wide">Alternate histories and possibilities</p>
        </div>

        <div className="mb-16 bg-white rounded-3xl p-10 shadow-xl border border-green-200">
          <h3 className="text-4xl font-black mb-10 text-center text-slate-900">From Refinery to Your Tank</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Factory, title: 'The Pipeline', desc: '3 mph through J-Hawk Pipeline' },
              { icon: Fuel, title: 'Tank Farms', desc: 'Batches separated at Council Bluffs' },
              { icon: Fuel, title: 'Gas Station', desc: 'Money flows through many hands' },
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-200 shadow-lg">
                <div className="flex justify-center mb-4">
                  <Icon size={64} className="text-blue-700" />
                </div>
                <h4 className="font-black text-xl mb-3 text-center text-blue-700">{step.title}</h4>
                <p className="text-sm text-slate-700 text-center leading-relaxed">{step.desc}</p>
              </div>
            );
            })}
          </div>
        </div>

        <div className="mb-16 bg-white rounded-3xl p-10 shadow-xl border border-blue-300">
          <h3 className="text-4xl font-black mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
            The Fracking Revolution
          </h3>
          <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-2xl">
            <h4 className="text-2xl font-black mb-4 text-blue-600">Nick Steinsberger's Innovation</h4>
            <p className="text-slate-800 leading-relaxed font-semibold">
              Slick water fracking using soapy water instead of gel revolutionized oil extraction. The US became the
              world's largest oil and gas producer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {frackingImpacts.map((impact, index) => {
              const Icon = impact.icon;
              const borderColor =
                impact.type === 'positive'
                  ? 'border-green-200'
                  : impact.type === 'negative'
                    ? 'border-red-200'
                    : 'border-yellow-200';
              const bgColor =
                impact.type === 'positive'
                  ? 'bg-green-50'
                  : impact.type === 'negative'
                    ? 'bg-red-50'
                    : 'bg-yellow-50';

              return (
                <div key={index} className={`${bgColor} border ${borderColor} p-6 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
                  <div className="flex items-start gap-4">
                    <Icon className="w-8 h-8 flex-shrink-0 mt-1" style={{
                      color: impact.type === 'positive' ? '#16a34a' : impact.type === 'negative' ? '#dc2626' : '#eab308'
                    }} />
                    <div>
                      <h4 className="font-black text-lg mb-1 text-slate-900">{impact.title}</h4>
                      <p className="text-sm text-slate-700">{impact.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-6xl font-black mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            The Great Debate
          </h3>
          <p className="text-center text-2xl text-slate-700 mb-16 font-bold max-w-4xl mx-auto leading-relaxed">
            Could we have built our modern world without fossil fuels?
          </p>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl border-2 border-blue-300 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <GraduationCap size={64} className="text-blue-700" />
                  <div>
                    <h4 className="text-3xl font-black text-blue-700">Joel Mo (Historian)</h4>
                    <p className="text-slate-600 font-semibold">Economic optimist</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl border-2 border-blue-400">
                    <h5 className="text-2xl font-black mb-3 text-blue-600">Core Argument</h5>
                    <p className="text-slate-800 text-lg leading-relaxed font-semibold">
                      "Human ingenuity would have found alternatives. Economic necessity drives innovation."
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { icon: Ship, title: 'Transportation', text: 'Canals with horses for goods' },
                      { icon: Waves, title: 'Energy', text: 'Lunar and tidal power' },
                      { icon: Battery, title: 'Electric Cars', text: 'Battery swaps every 40 miles' },
                    ].map((item, idx) => {
                      const Icon = item.icon;
                      return (
                      <div key={idx} className="bg-white p-5 rounded-xl border-2 border-blue-300 transform transition-all duration-300 hover:scale-105">
                        <div className="flex justify-center mb-2">
                          <Icon size={40} className="text-blue-600" />
                        </div>
                        <h6 className="font-black text-center mb-2 text-blue-600">{item.title}</h6>
                        <p className="text-xs text-slate-700 text-center">{item.text}</p>
                      </div>
                    );
                    })}
                  </div>

                  <div className="bg-blue-300/20 p-6 rounded-2xl border-2 border-blue-400">
                    <p className="text-lg text-slate-800 italic font-semibold">
                      "Market forces would create equilibrium: high prices → incentivize alternatives → sustainable
                      cycle."
                    </p>
                  </div>
                </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-3xl border-2 border-orange-300 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <Zap size={64} className="text-orange-700" />
                  <div>
                    <h4 className="text-3xl font-black text-orange-700">David Keith (Physicist)</h4>
                    <p className="text-slate-600 font-semibold">Technological realist</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl border-2 border-orange-400">
                    <h5 className="text-2xl font-black mb-3 text-orange-600">Core Argument</h5>
                    <p className="text-slate-800 text-lg leading-relaxed font-semibold">
                      "Progress would be 10 times slower. Fossil fuels are foundational for modern infrastructure."
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl border-2 border-orange-300">
                      <h6 className="font-black text-lg mb-4 text-orange-600">Infrastructure Problem</h6>
                      <p className="text-sm text-slate-800 mb-4 leading-relaxed">
                        Steel and concrete need massive energy. Can't build without fossil fuels:
                      </p>
                      <ul className="space-y-2 text-xs text-slate-700 font-semibold">
                        <li className="flex items-center gap-2">
                          <ChevronRight size={16} className="text-orange-600" />
                          Dams for hydroelectric
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight size={16} className="text-orange-600" />
                          Railroad tracks
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight size={16} className="text-orange-600" />
                          Modern wind turbines
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border-2 border-orange-300">
                      <h6 className="font-black text-lg mb-4 text-orange-600">Historical Evidence</h6>
                      <div className="p-4 bg-red-50 border-2 border-red-400 rounded-xl mb-4">
                        <div className="text-4xl font-black text-red-600 text-center mb-2">97%</div>
                        <p className="text-xs text-center text-slate-800 font-semibold">
                          Original forests destroyed before 1900 (wood-powered trains)
                        </p>
                      </div>
                      <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                        Without fossil fuels, deforestation would be catastrophic.
                      </p>
                    </div>
                  </div>

                  <div className="bg-orange-300/20 p-6 rounded-2xl border-2 border-orange-400">
                    <p className="text-lg text-slate-800 italic font-semibold">
                      "Can't bootstrap modern society without fossil fuel energy density. Every green tech we build
                      requires massive fossil fuel inputs."
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl p-10 border border-green-400 shadow-xl">
          <h3 className="text-4xl font-black mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
            The Forest Question
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-red-200 p-8 rounded-2xl shadow-lg">
              <h4 className="text-2xl font-black mb-4 text-red-600">Keith's Reality</h4>
              <p className="text-slate-800 mb-6 leading-relaxed">
                Before 1900, we cut down 97% of America's original forests for wood fuel. Fossil fuels actually saved
                our forests.
              </p>
              <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                <p className="text-sm text-slate-800 font-semibold leading-relaxed">
                  Without fossils, deforestation would have left North America as barren as European wastelands.
                </p>
              </div>
            </div>

            <div className="bg-white border border-green-200 p-8 rounded-2xl shadow-lg">
              <h4 className="text-2xl font-black mb-4 text-green-700">Mo's Counter</h4>
              <p className="text-slate-800 mb-6 leading-relaxed">
                As wood became scarce and expensive, market forces would incentivize sustainable forestry and new tree
                growth.
              </p>
              <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                <p className="text-sm text-slate-800 font-semibold leading-relaxed">
                  High resource prices → plant more trees → sustainable equilibrium emerges naturally.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-100 border-2 border-yellow-500 rounded-2xl text-center">
            <p className="text-lg text-slate-900 font-black">
              Both perspectives have merit. Truth likely lies between inevitable innovation and physical constraints.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
