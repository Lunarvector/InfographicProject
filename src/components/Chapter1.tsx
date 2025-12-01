import { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { MapPin, DollarSign, Droplets, Zap, Building2, Search, Handshake, Wheat, UserCircle, Fuel } from 'lucide-react';
import OilPumpSpline from './OilPumpSpline';

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

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.enablePan = false;
    controls.minDistance = 3;
    controls.maxDistance = 12;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;

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
      controls.update();
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
          <h2 className="text-7xl md:text-8xl font-black mb-6 text-sky-400 tracking-tight">
            We Buy Oil
          </h2>
          <p className="text-2xl text-slate-600 font-bold tracking-wide">Kansas, where it all began</p>
        </div>

        <div className="mb-16">
          <div className="relative h-[500px] rounded-3xl overflow-hidden mb-8">
            <OilPumpSpline />

            <div className="absolute bottom-4 right-4 w-40 h-20 rounded-2xl" style={{ backgroundColor: '#c4f4ef' }}>
            </div>
          </div>

          <div className="bg-purple-50 rounded-3xl p-12 shadow-2xl border border-purple-200">
            <div className="grid lg:grid-cols-[2fr,3fr] gap-16">
              <div className="space-y-10">
                <h4 className="text-5xl font-black text-purple-400 mb-10 leading-tight whitespace-nowrap">
                  The Pumping Unit
                </h4>

                <div className="bg-purple-100/60 rounded-3xl border border-purple-300 shadow-xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-5 border-b-2 border-purple-300">
                      <div className="font-black text-lg text-purple-900">Type</div>
                      <div className="text-2xl text-purple-700 font-black">Stripper Well</div>
                    </div>
                    <div className="flex items-center justify-between pb-5 border-b-2 border-purple-300">
                      <div className="font-black text-lg text-purple-900">Output</div>
                      <div className="text-2xl text-purple-700 font-black">1-2 barrels/day</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="font-black text-lg text-purple-900">Depth</div>
                      <div className="text-2xl text-purple-700 font-black">½ mile down</div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-100/60 rounded-3xl p-8 border border-purple-300 shadow-xl">
                  <span className="text-4xl font-black text-purple-700 block mb-4">💰 Key Fact</span>
                  <p className="text-lg leading-relaxed font-bold text-slate-800">
                    NPR management "freaked out" about potential oil spills. The team carried{' '}
                    <span className="text-3xl font-black text-purple-600">$10,000 cash</span>
                    {' '}in a briefcase for the purchase.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end">
                <div className="w-full relative bg-white/90 rounded-3xl p-8 shadow-2xl border border-purple-200">
                  <canvas ref={canvasRef} className="rounded-2xl" style={{ width: '100%', height: '600px' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-3xl p-10 shadow-xl border border-sky-300">
            <h3 className="text-4xl font-black mb-10 text-sky-400">
              Types of Oil
            </h3>
            <div className="space-y-8">
              <div className="p-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl border border-blue-300 shadow-lg">
                <div className="flex items-start gap-4 mb-3">
                  <Droplets className="text-blue-600 flex-shrink-0" size={32} />
                  <div>
                    <h4 className="text-2xl font-black text-blue-600 mb-3">Sweet Oil (Light Crude)</h4>
                    <p className="text-slate-800 leading-relaxed font-semibold text-base">
                      Jason's oil is "sweet"—light crude that's more valuable because it doesn't need much processing to
                      become gasoline.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-blue-300">
                  <Zap className="text-green-500" size={24} />
                  <span className="text-lg font-bold text-green-600">High Value</span>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl border border-orange-300 shadow-lg">
                <div className="flex items-start gap-4 mb-3">
                  <Fuel className="text-orange-600 flex-shrink-0" size={32} />
                  <div>
                    <h4 className="text-2xl font-black text-orange-600 mb-3">Heavy Crude</h4>
                    <p className="text-slate-800 leading-relaxed font-semibold text-base">
                      "Dirty and gunky"—heavy crude requires extensive processing. Less valuable but still important for
                      industrial uses.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-orange-300">
                  <Zap className="text-red-500" size={24} />
                  <span className="text-lg font-bold text-red-600">Lower Value</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-10 shadow-xl border border-amber-300">
            <h3 className="text-4xl font-black mb-10 text-amber-400">
              Prices by Location
            </h3>
            <div className="space-y-5">
              {priceData.map((item, index) => (
                <div key={index} className="p-5 bg-white rounded-xl border border-amber-300 shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-black text-lg text-slate-800">{item.location}</span>
                    <span className="text-2xl font-black text-amber-600">${item.price.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-8 p-8 bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl border-2 border-green-500 shadow-xl overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-300/30 rounded-full blur-2xl"></div>
              <div className="text-center relative z-10">
                <div className="text-lg text-slate-700 mb-3 font-black">Final Negotiated Price</div>
                <div className="text-7xl font-black text-green-600 mb-3 drop-shadow-lg">$40.00</div>
                <div className="text-lg text-slate-700 font-bold mb-4">per barrel</div>
                <p className="text-sm text-slate-800 font-semibold leading-relaxed">
                  Down from $41.83 due to $10,000 cash payment. Location matters!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-12 border-2 border-purple-400 shadow-2xl overflow-hidden">
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-purple-300/30 rounded-full blur-3xl"></div>
          <h3 className="text-5xl font-black mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700 drop-shadow-lg relative z-10">Who Gets Paid?</h3>
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              { icon: UserCircle, name: 'Jason Bruns', role: 'Owner & Preacher' },
              { icon: Handshake, name: 'Business Partner', role: 'Co-investor' },
              { icon: Wheat, name: 'The Farmer', role: 'Land Owner' },
            ].map((person, index) => {
              const Icon = person.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 border-2 border-purple-300 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center"
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
