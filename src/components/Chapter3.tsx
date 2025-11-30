import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { CokerModel } from './CokerModel';
import { Factory, Flame, Sparkles, TrendingUp, Smartphone, Shirt, Pill, Apple, ShoppingBag } from 'lucide-react';

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
    { name: 'Phone Case', icon: Smartphone, desc: 'Made from petroleum-based plastic polymers like polycarbonate and TPU. The entire casing relies on oil-derived materials for durability and flexibility.' },
    { name: 'Sneakers', icon: ShoppingBag, desc: 'Synthetic rubber soles are made from petroleum. The cushioning foam, artificial leather, and even the glue holding it together are all oil-based products.' },
    { name: 'Clothing', icon: Shirt, desc: 'Polyester, nylon, and acrylic fabrics are all synthetic fibers made from petroleum. Even "microfiber" athletic wear is essentially plastic derived from oil.' },
    { name: 'Medicine', icon: Pill, desc: 'Pharmaceutical manufacturing uses petroleum as a base for many medications. The plastic pill bottles and blister packs are also oil-derived.' },
    { name: 'Toothpaste', icon: Sparkles, desc: 'Contains petroleum-based ingredients like propylene glycol and synthetic colorants. The plastic tube packaging is also made from oil.' },
    { name: 'Food Packaging', icon: Apple, desc: 'Plastic containers, cling wrap, and food storage bags are all made from petroleum-based polymers like polyethylene and polypropylene.' },
    { name: 'Fertilizer', icon: TrendingUp, desc: 'Modern fertilizers use sulfur and other petroleum byproducts. The entire industrial agriculture system depends on oil-based chemicals.' },
    { name: 'Cosmetics', icon: Sparkles, desc: 'Makeup, lotions, and perfumes contain petroleum-based ingredients like mineral oil, petrolatum, and paraffin wax for texture and preservation.' },
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
    <section className="chapter-section min-h-screen py-24 px-6 relative overflow-hidden bg-white">

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-yellow-600 to-amber-500 drop-shadow-lg leading-tight">
            How Oil Got<br/>Into Everything
          </h2>
          <p className="text-3xl text-slate-600 font-bold">From refinery to everyday life</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-orange-200">
            <h3 className="text-3xl font-black mb-6 flex items-center gap-3">
              <Factory className="text-orange-500" size={32} />
              The CHS Coker
            </h3>
            <div className="flex justify-center mb-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-6 border-2 border-orange-200 shadow-xl">
              <Canvas camera={{ position: [0, 0, 12], fov: 50 }} style={{ width: '100%', height: '500px' }}>
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
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-red-50 p-2 rounded-lg border border-red-300">
                  <div className="font-black text-red-600 text-sm">🔥 840°F</div>
                  <div className="text-xs text-slate-600">Sear</div>
                </div>
                <div className="bg-blue-50 p-2 rounded-lg border border-blue-300">
                  <div className="font-black text-blue-600 text-sm">❄️ 360°F</div>
                  <div className="text-xs text-slate-600">Bake</div>
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
              Oil Is In<br/>Everything
            </span>
          </h3>
          <p className="text-center text-slate-700 mb-8 font-semibold text-lg">
            Hover over items to discover their petroleum connections
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {oilProducts.map((item, index) => {
              const Icon = item.icon;
              return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl border-2 border-slate-300 bg-slate-50 hover:border-purple-500 hover:bg-purple-100 hover:scale-105 transition-all duration-300 transform cursor-pointer"
              >
                <div className="flex justify-center mb-3">
                  <Icon size={48} className="text-purple-600 group-hover:scale-110 transition-transform" />
                </div>
                <div className="font-black text-base text-center text-slate-900">{item.name}</div>

                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-80 p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="font-black text-sm mb-2">{item.name}</div>
                  <p className="text-xs leading-relaxed">{item.desc}</p>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-pink-600"></div>
                </div>
              </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-5xl font-black mb-12 text-center text-slate-900">
            The Plastic Revolution
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((event, index) => (
              <div
                key={index}
                className="relative p-8 rounded-3xl border-2 border-yellow-400 bg-gradient-to-br from-yellow-100 to-yellow-50 shadow-xl text-left"
              >
                <div className="text-6xl font-black mb-4 text-yellow-600">
                  {event.year}
                </div>
                <div className="text-2xl font-bold mb-3 text-slate-900">
                  {event.title}
                </div>
                <p className="text-slate-700 leading-relaxed text-sm">
                  {event.desc}
                </p>
              </div>
            ))}
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
