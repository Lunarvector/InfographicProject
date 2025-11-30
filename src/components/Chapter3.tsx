import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { CokerModel } from './CokerModel';
import { Factory, Flame, Sparkles, TrendingUp, Smartphone, Package, Pill, Wheat } from 'lucide-react';
import DarkBackground from './DarkBackground';

export default function Chapter3() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [timelineYear, setTimelineYear] = useState(1907);

  const barrelOutputs = [
    { product: 'Gasoline', amount: 44, color: '#fecaca' },
    { product: 'Diesel', amount: 23, color: '#fed7aa' },
    { product: 'Jet Fuel', amount: 9, color: '#bfdbfe' },
    { product: 'Heavy Fuel Oil', amount: 5, color: '#d1d5db' },
    { product: 'LPG', amount: 3, color: '#d8b4fe' },
    { product: 'Other', amount: 16, color: '#bbf7d0' },
  ];

  const oilProducts = [
    { name: 'Phone Case', icon: Smartphone, desc: 'Plastic polymers' },
    { name: 'Sneakers', icon: Package, desc: 'Synthetic rubber' },
    { name: 'Clothing', icon: Package, desc: 'Polyester fibers' },
    { name: 'Medicine', icon: Pill, desc: 'Pharmaceutical base' },
    { name: 'Toothpaste', icon: Package, desc: 'Plastic & ingredients' },
    { name: 'Food Pack', icon: Package, desc: 'Plastic containers' },
    { name: 'Fertilizer', icon: Wheat, desc: 'Sulfur byproduct' },
    { name: 'Cosmetics', icon: Sparkles, desc: 'Petroleum base' },
  ];

  const timeline = [
    {
      year: 1907,
      title: 'The Problem',
      desc: 'Expensive materials ruled: sterling silver toothbrushes, tortoise shell combs. Insulation needed 15,000 lac beetles per pound.',
    },
    {
      year: 1909,
      title: "Bakeland's Breakthrough",
      desc: 'Mixed phenol and formaldehyde. The "Bakelizer" iron egg created the first synthetic plastic.',
    },
    {
      year: 1950,
      title: 'Plastic Revolution',
      desc: 'Petroleum plastics replaced expensive materials, making everything affordable.',
    },
    {
      year: 2024,
      title: 'The Future',
      desc: 'Creating alternatives is hard. E.coli plastic shows promise as a cost-competitive substitute.',
    },
  ];

  return (
    <section className="chapter-section min-h-screen py-24 px-6 relative overflow-hidden">
      <DarkBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6 px-6 py-2 bg-orange-500/20 backdrop-blur-xl rounded-full border border-orange-400/30">
            <span className="text-sm font-bold text-orange-400">Chapter 3</span>
          </div>
          <h2 className="text-7xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
            How Oil Got Into Everything
          </h2>
          <p className="text-2xl text-white/70 font-semibold">From refinery to everyday life</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-orange-200">
            <h3 className="text-3xl font-black mb-6 flex items-center gap-3">
              <Factory className="text-orange-500" size={32} />
              The CHS Coker
            </h3>
            <div className="flex justify-center mb-6 bg-slate-50 rounded-2xl p-4 border-2 border-slate-200">
              <Canvas camera={{ position: [5, 3, 8], fov: 75 }} style={{ width: '100%', height: '400px' }}>
                <ambientLight intensity={0.7} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <CokerModel />
              </Canvas>
            </div>
            <div className="space-y-3">
              <div className="bg-orange-50 p-4 rounded-xl border-2 border-orange-300">
                <h4 className="font-black text-orange-600 mb-2">How It Works</h4>
                <p className="text-sm text-slate-700">
                  Sorts hydrocarbon chains by temperature. A "post-industrial water park" separating long and short
                  molecules.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-50 p-3 rounded-xl border-2 border-red-300">
                  <div className="font-black text-red-600 text-lg">🔥 840°F</div>
                  <div className="text-xs text-slate-600">Sear a steak</div>
                </div>
                <div className="bg-blue-50 p-3 rounded-xl border-2 border-blue-300">
                  <div className="font-black text-blue-600 text-lg">❄️ 360°F</div>
                  <div className="text-xs text-slate-600">Bake a cake</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-yellow-200">
            <h3 className="text-3xl font-black mb-6 flex items-center gap-3">
              <Flame className="text-yellow-500" size={32} />
              From One Barrel
            </h3>
            <div className="space-y-4">
              {barrelOutputs.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-800">{item.product}</span>
                    <span className="font-black text-lg" style={{ color: item.color }}>
                      {item.amount}%
                    </span>
                  </div>
                  <div className="h-5 bg-slate-200 rounded-full overflow-hidden border-2 border-slate-300 group-hover:shadow-lg transition-all">
                    <div
                      className="h-full transition-all duration-500 ease-out rounded-full"
                      style={{
                        width: `${item.amount}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-green-50 border-2 border-green-300 rounded-xl">
              <h4 className="font-bold text-green-700 mb-1">Plus:</h4>
              <p className="text-sm text-slate-700">
                Natural gas, propane, butane, and sulfur (for fertilizer)
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16 bg-white rounded-3xl p-10 shadow-xl border-2 border-purple-200">
          <h3 className="text-4xl font-black mb-8 text-center flex items-center justify-center gap-3">
            <Sparkles className="text-purple-500" size={40} />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Oil Is In Everything
            </span>
          </h3>
          <p className="text-center text-slate-700 mb-8 font-semibold text-lg">
            Click items to discover their petroleum connections
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {oilProducts.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedItem(item.name)}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-110 ${
                  selectedItem === item.name
                    ? 'border-purple-500 bg-purple-100 scale-110 shadow-lg'
                    : 'border-slate-300 bg-slate-50 hover:border-purple-300'
                }`}
              >
                <div className="flex justify-center mb-3">
                  {(() => {
                    const Icon = item.icon;
                    return <Icon size={40} className="text-purple-600" />;
                  })()}
                </div>
                <div className="font-bold text-sm text-center text-slate-900">{item.name}</div>
              </button>
            ))}
          </div>
          {selectedItem && (
            <div className="p-6 bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-400 rounded-2xl animate-fade-in">
              <h4 className="font-black text-xl mb-2 text-purple-600">{selectedItem}</h4>
              <p className="text-slate-800">
                {oilProducts.find((p) => p.name === selectedItem)?.desc}
              </p>
            </div>
          )}
        </div>

        <div className="mb-16">
          <h3 className="text-4xl font-black mb-8 text-center flex items-center justify-center gap-3">
            <TrendingUp className="text-yellow-600" size={40} />
            The Plastic Revolution
          </h3>
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-yellow-300">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-orange-400 to-red-400" />
              <div className="space-y-8">
                {timeline.map((event, index) => (
                  <button
                    key={index}
                    onClick={() => setTimelineYear(event.year)}
                    className={`relative ml-16 p-6 rounded-2xl border-2 transition-all duration-500 text-left transform hover:scale-105 ${
                      timelineYear === event.year
                        ? 'border-yellow-500 bg-yellow-100 scale-105 shadow-lg'
                        : 'border-slate-300 bg-slate-50 hover:border-yellow-400'
                    }`}
                  >
                    <div className="absolute -left-12 top-6 w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center border-4 border-white shadow-lg z-10">
                      <div className="w-2 h-2 rounded-full bg-yellow-600" />
                    </div>
                    <div className="text-3xl font-black mb-2 text-yellow-600">{event.year}</div>
                    <div className="text-xl font-bold mb-2 text-slate-900">{event.title}</div>
                    <p className="text-slate-700 leading-relaxed">{event.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl p-10 border-2 border-green-400 shadow-xl">
          <h3 className="text-3xl font-black mb-6 text-center text-green-700">The Future of Plastics</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-red-400 p-8 rounded-2xl">
              <h4 className="text-2xl font-black mb-4 text-red-600">The Challenge</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl border-2 border-red-300">
                  <span className="font-bold text-slate-800">Peppermint Oil (Natural)</span>
                  <span className="text-2xl font-black text-red-600">$20/kg</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border-2 border-green-300">
                  <span className="font-bold text-slate-800">Petroleum Polyethylene</span>
                  <span className="text-2xl font-black text-green-600">$2/kg</span>
                </div>
              </div>
              <p className="text-sm text-slate-700 mt-6 leading-relaxed font-semibold">
                Natural alternatives are 10x more expensive—a massive economic challenge.
              </p>
            </div>

            <div className="bg-white border-2 border-green-400 p-8 rounded-2xl">
              <h4 className="text-2xl font-black mb-4 text-green-700">The Promise</h4>
              <p className="text-slate-800 mb-6 leading-relaxed">
                E.coli-produced plastic shows promise. It's stretchy, rubber-band-like, and could match petroleum
                prices.
              </p>
              <div className="p-4 bg-green-50 rounded-xl border-2 border-green-300">
                <p className="text-sm text-slate-700 italic">
                  "Leo Bakeland's great-granddaughter now avoids plastic, showing how attitudes evolved from revolutionary
                  material to environmental concern."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
