import { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { MapPin, DollarSign, Droplets, Zap, Building2, Search, Handshake, Wheat, UserCircle, Fuel } from 'lucide-react';

export default function Chapter1() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedOil, setSelectedOil] = useState<'sweet' | 'heavy'>('sweet');
  const [activeLocation, setActiveLocation] = useState(0);

  const journey = [
    { city: 'Kansas City, MO', icon: Building2, desc: 'Starting point' },
    { city: 'Wichita, KS', icon: Search, desc: 'Finding the oil field' },
    { city: 'McPherson, KS', icon: Handshake, desc: 'Meeting Jason Bruns' },
  ];

  const priceData = [
    { location: 'Kansas Commons', price: 38.5, color: '#fecaca' },
    { location: 'South Central Kansas', price: 39.2, color: '#fed7aa' },
    { location: 'Eastern Kansas', price: 37.8, color: '#fef08a' },
    { location: 'Nebraska', price: 40.1, color: '#bbf7d0' },
    { location: 'Oklahoma Sweet', price: 41.83, color: '#bfdbfe' },
  ];

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });

    renderer.setSize(500, 500);
    camera.position.set(4, 3, 6);
    camera.lookAt(0, 0, 0);

    const baseGeometry = new THREE.BoxGeometry(2.5, 0.3, 2.5);
    const baseMaterial = new THREE.MeshStandardMaterial({
      color: 0xc084fc,
      metalness: 0.4,
      roughness: 0.6,
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = -1.2;
    scene.add(base);

    const poleGeometry = new THREE.CylinderGeometry(0.12, 0.12, 3.5, 16);
    const poleMaterial = new THREE.MeshStandardMaterial({ color: 0xd8b4fe });
    const pole = new THREE.Mesh(poleGeometry, poleMaterial);
    pole.position.set(0, 0.5, 0);
    scene.add(pole);

    const beamGeometry = new THREE.BoxGeometry(4.5, 0.25, 0.4);
    const beamMaterial = new THREE.MeshStandardMaterial({
      color: 0xfbbf24,
      metalness: 0.9,
      roughness: 0.1,
    });
    const beam = new THREE.Mesh(beamGeometry, beamMaterial);
    beam.position.set(0, 2.2, 0);
    scene.add(beam);

    const hammerGeometry = new THREE.BoxGeometry(0.6, 1.8, 0.6);
    const hammerMaterial = new THREE.MeshStandardMaterial({
      color: 0xfca5a5,
      metalness: 0.7,
      roughness: 0.2,
    });
    const hammer = new THREE.Mesh(hammerGeometry, hammerMaterial);
    hammer.position.set(1.8, 1, 0);
    scene.add(hammer);

    const light1 = new THREE.DirectionalLight(0xfbbf24, 1.5);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xfca5a5, 80);
    light2.position.set(-4, 3, 3);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    let animationFrameId: number;
    let angle = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      angle += 0.015;
      beam.rotation.z = Math.sin(angle) * 0.35;
      hammer.position.y = 1 + Math.sin(angle) * 0.6;
      base.position.y = -1.2 + Math.sin(angle * 0.5) * 0.05;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (object.material instanceof THREE.Material) {
            object.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, []);

  return (
    <section className="chapter-section min-h-screen py-24 px-6 relative overflow-hidden bg-white">

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-8xl md:text-9xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 drop-shadow-lg">
            We Buy Oil
          </h2>
          <p className="text-3xl text-slate-600 font-bold">Kansas, where it all began</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-rose-200 hover:shadow-3xl hover:scale-[1.02] transition-all duration-500">
              <h3 className="text-3xl font-black mb-8 flex items-center gap-3">
                <MapPin className="text-rose-500" size={32} />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">
                  The Journey
                </span>
              </h3>
              <div className="space-y-4">
                {journey.map((stop, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveLocation(index)}
                    className={`w-full flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                      activeLocation === index
                        ? 'bg-gradient-to-r from-rose-200 to-orange-100 border-2 border-rose-500 scale-105'
                        : 'bg-slate-100 border-2 border-transparent hover:bg-slate-200'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                        activeLocation === index
                          ? 'bg-rose-500 text-white scale-125'
                          : 'bg-slate-300 text-slate-600'
                      }`}
                    >
                      {(() => {
                        const Icon = stop.icon;
                        return <Icon size={20} />;
                      })()}
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-lg text-slate-900">{stop.city}</div>
                      <div className="text-sm text-slate-600">{stop.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-8 border-2 border-amber-300">
              <p className="text-sm leading-relaxed">
                <span className="font-black text-rose-600">Key fact:</span> NPR management "freaked out" about potential
                oil spills. The team carried <span className="font-bold text-amber-600">$10,000 cash</span> in a briefcase
                for the purchase.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-purple-200 flex flex-col items-center">
              <h4 className="text-2xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                The Pumping Unit
              </h4>
              <canvas ref={canvasRef} className="rounded-2xl bg-slate-50" />
              <div className="mt-6 w-full space-y-3">
                <div className="flex items-center justify-between p-3 bg-purple-100 rounded-xl border border-purple-300">
                  <span className="font-bold text-purple-900">Type:</span>
                  <span className="text-purple-700">Stripper Well</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-pink-100 rounded-xl border border-pink-300">
                  <span className="font-bold text-pink-900">Output:</span>
                  <span className="text-pink-700">1-2 barrels/day</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-100 rounded-xl border border-blue-300">
                  <span className="font-bold text-blue-900">Depth:</span>
                  <span className="text-blue-700">½ mile down</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-blue-200">
            <h3 className="text-3xl font-black mb-8 flex items-center gap-3">
              <Droplets className="text-blue-500" size={32} />
              <span>Types of Oil</span>
            </h3>
            <div className="flex gap-3 mb-8">
              {(['sweet', 'heavy'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedOil(type)}
                  className={`flex-1 py-4 px-6 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 ${
                    selectedOil === type
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg scale-105'
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                >
                  {type === 'sweet' ? (
                    <>
                      <Droplets className="inline mr-2" size={20} />
                      Sweet Oil
                    </>
                  ) : (
                    <>
                      <Fuel className="inline mr-2" size={20} />
                      Heavy
                    </>
                  )}
                </button>
              ))}
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-300 min-h-[200px] flex flex-col justify-center">
              {selectedOil === 'sweet' ? (
                <div className="space-y-4">
                  <h4 className="text-2xl font-black text-blue-600">Sweet Oil (Light Crude)</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Jason's oil is "sweet"—light crude that's more valuable because it doesn't need much processing to
                    become gasoline.
                  </p>
                  <div className="flex items-center gap-3 pt-4">
                    <Zap className="text-green-500" size={24} />
                    <span className="text-lg font-bold text-green-600">High Value</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <h4 className="text-2xl font-black text-orange-600">Heavy Crude</h4>
                  <p className="text-slate-700 leading-relaxed">
                    "Dirty and gunky"—heavy crude requires extensive processing. Less valuable but still important for
                    industrial uses.
                  </p>
                  <div className="flex items-center gap-3 pt-4">
                    <Zap className="text-red-500" size={24} />
                    <span className="text-lg font-bold text-red-600">Lower Value</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-amber-200">
            <h3 className="text-3xl font-black mb-8 flex items-center gap-3">
              <DollarSign className="text-amber-600" size={32} />
              Prices by Location
            </h3>
            <div className="space-y-4">
              {priceData.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-700">{item.location}</span>
                    <span className="text-xl font-black text-amber-600">${item.price.toFixed(2)}</span>
                  </div>
                  <div className="h-4 bg-slate-200 rounded-full overflow-hidden border-2 border-slate-300 group-hover:border-amber-400 transition-all">
                    <div
                      className="h-full transition-all duration-500 ease-out"
                      style={{
                        width: `${(item.price / 42) * 100}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-400">
              <div className="text-center">
                <div className="text-sm text-slate-600 mb-2 font-semibold">Final Negotiated Price</div>
                <div className="text-5xl font-black text-green-600 mb-2">$40.00</div>
                <div className="text-sm text-slate-600 font-semibold">per barrel</div>
                <p className="text-xs text-slate-700 mt-4 leading-relaxed">
                  Down from $41.83 due to $10,000 cash payment. Location matters!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-10 border-2 border-purple-300">
          <h3 className="text-3xl font-black mb-8 text-center text-purple-600">Who Gets Paid?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: UserCircle, name: 'Jason Bruns', role: 'Owner & Preacher' },
              { icon: Handshake, name: 'Business Partner', role: 'Co-investor' },
              { icon: Wheat, name: 'The Farmer', role: 'Land Owner' },
            ].map((person, index) => {
              const Icon = person.icon;
              return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                <div className="flex justify-center mb-4">
                  <Icon size={48} className="text-purple-600" />
                </div>
                <div className="font-bold text-lg text-slate-900">{person.name}</div>
                <div className="text-sm text-slate-600 font-semibold">{person.role}</div>
              </div>
            );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
