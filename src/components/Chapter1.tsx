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
    controls.autoRotateSpeed = 1.5;

    const orangeMat = new THREE.MeshStandardMaterial({
      color: 0xff5722,
      metalness: 0.4,
      roughness: 0.6,
    });

    const grayMetal = new THREE.MeshStandardMaterial({
      color: 0x8a8a8a,
      metalness: 0.7,
      roughness: 0.4,
    });

    const darkGrayMetal = new THREE.MeshStandardMaterial({
      color: 0x5a5a5a,
      metalness: 0.6,
      roughness: 0.5,
    });

    const tealBase = new THREE.MeshStandardMaterial({
      color: 0x1a4d5c,
      metalness: 0.3,
      roughness: 0.7,
    });

    const groundBase = new THREE.Mesh(
      new THREE.BoxGeometry(9, 0.5, 2.5),
      tealBase
    );
    groundBase.position.set(0, -1.5, 0);
    scene.add(groundBase);

    const supportLeg1 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.08, 2.6, 8),
      orangeMat
    );
    supportLeg1.position.set(-0.5, 0.3, 0.45);
    supportLeg1.rotation.z = 0.3;
    scene.add(supportLeg1);

    const supportLeg2 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.08, 2.6, 8),
      orangeMat
    );
    supportLeg2.position.set(0.5, 0.3, 0.45);
    supportLeg2.rotation.z = -0.3;
    scene.add(supportLeg2);

    const supportLeg3 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.08, 2.6, 8),
      orangeMat
    );
    supportLeg3.position.set(-0.5, 0.3, -0.45);
    supportLeg3.rotation.z = 0.3;
    scene.add(supportLeg3);

    const supportLeg4 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.08, 2.6, 8),
      orangeMat
    );
    supportLeg4.position.set(0.5, 0.3, -0.45);
    supportLeg4.rotation.z = -0.3;
    scene.add(supportLeg4);

    for (let i = 0; i < 3; i++) {
      const y = 0.4 + i * 0.5;
      const crossBeam1 = new THREE.Mesh(
        new THREE.BoxGeometry(1.2 - i * 0.2, 0.06, 0.06),
        orangeMat
      );
      crossBeam1.position.set(0, y, 0.45);
      scene.add(crossBeam1);

      const crossBeam2 = new THREE.Mesh(
        new THREE.BoxGeometry(1.2 - i * 0.2, 0.06, 0.06),
        orangeMat
      );
      crossBeam2.position.set(0, y, -0.45);
      scene.add(crossBeam2);
    }

    const pivotAssembly = new THREE.Group();
    pivotAssembly.position.set(0, 1.6, 0);

    const pivot = new THREE.Mesh(
      new THREE.CylinderGeometry(0.25, 0.25, 0.6, 24),
      grayMetal
    );
    pivot.rotation.z = Math.PI / 2;
    pivotAssembly.add(pivot);

    const beamGroup = new THREE.Group();

    const mainBeam = new THREE.Mesh(
      new THREE.BoxGeometry(6, 0.35, 0.4),
      orangeMat
    );
    beamGroup.add(mainBeam);

    const beamTop = new THREE.Mesh(
      new THREE.BoxGeometry(5.8, 0.15, 0.5),
      grayMetal
    );
    beamTop.position.y = 0.25;
    beamGroup.add(beamTop);

    const horseHeadShape = new THREE.Shape();
    horseHeadShape.moveTo(0, 0);
    horseHeadShape.lineTo(0.8, 0);
    horseHeadShape.lineTo(0.9, 0.5);
    horseHeadShape.lineTo(0.85, 1.2);
    horseHeadShape.lineTo(0.6, 1.7);
    horseHeadShape.lineTo(0.1, 1.8);
    horseHeadShape.lineTo(-0.2, 1.3);
    horseHeadShape.lineTo(-0.2, 0.5);
    horseHeadShape.lineTo(0, 0);

    const hole1 = new THREE.Path();
    hole1.moveTo(0.15, 0.3);
    hole1.lineTo(0.45, 0.3);
    hole1.lineTo(0.45, 0.55);
    hole1.lineTo(0.15, 0.55);
    horseHeadShape.holes.push(hole1);

    const hole2 = new THREE.Path();
    hole2.moveTo(0.15, 0.7);
    hole2.lineTo(0.45, 0.7);
    hole2.lineTo(0.45, 0.95);
    hole2.lineTo(0.15, 0.95);
    horseHeadShape.holes.push(hole2);

    const hole3 = new THREE.Path();
    hole3.moveTo(0.15, 1.1);
    hole3.lineTo(0.45, 1.1);
    hole3.lineTo(0.45, 1.35);
    hole3.lineTo(0.15, 1.35);
    horseHeadShape.holes.push(hole3);

    const horseHead = new THREE.Mesh(
      new THREE.ExtrudeGeometry(horseHeadShape, { depth: 0.5, bevelEnabled: false }),
      orangeMat
    );
    horseHead.position.set(2.8, -0.9, -0.25);
    horseHead.rotation.y = Math.PI / 2;
    beamGroup.add(horseHead);

    const counterweightBase = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 1.2, 1.5),
      orangeMat
    );
    counterweightBase.position.set(-2.5, -0.6, 0);
    beamGroup.add(counterweightBase);

    const wheel1 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.6, 0.6, 0.3, 32),
      darkGrayMetal
    );
    wheel1.position.set(-2.5, -0.6, 0.9);
    wheel1.rotation.z = Math.PI / 2;
    beamGroup.add(wheel1);

    const wheel2 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.5, 0.5, 0.3, 32),
      grayMetal
    );
    wheel2.position.set(-2.5, -0.6, 0.6);
    wheel2.rotation.z = Math.PI / 2;
    beamGroup.add(wheel2);

    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const spoke1 = new THREE.Mesh(
        new THREE.BoxGeometry(0.55, 0.04, 0.15),
        darkGrayMetal
      );
      spoke1.position.set(-2.5, -0.6, 0.9);
      spoke1.rotation.z = angle;
      beamGroup.add(spoke1);
    }

    const cable = new THREE.Mesh(
      new THREE.CylinderGeometry(0.03, 0.03, 5, 8),
      darkGrayMetal
    );
    cable.position.set(3.2, -2.5, 0);
    scene.add(cable);

    const pumpBoxBase = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 0.3, 0.8),
      grayMetal
    );
    pumpBoxBase.position.set(3.2, -1.3, 0);
    scene.add(pumpBoxBase);

    pivotAssembly.add(beamGroup);
    scene.add(pivotAssembly);

    const light1 = new THREE.DirectionalLight(0xffffff, 2);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffa500, 1);
    light2.position.set(-5, 3, -3);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    let animationFrameId: number;
    let angle = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      angle += 0.02;

      const pumpCycle = Math.sin(angle);
      beamGroup.rotation.z = pumpCycle * 0.35;

      cable.scale.y = 1 - pumpCycle * 0.15;
      cable.position.y = -2.5 + pumpCycle * 0.3;

      light2.intensity = 1.2 + Math.sin(angle * 2) * 0.4;

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
          <div className="relative h-[500px] rounded-3xl overflow-hidden mb-8 group hover:scale-[1.02] transition-transform duration-500">
            <OilPumpSpline />

            <div className="absolute bottom-4 right-4 w-40 h-20 rounded-2xl animate-pulse" style={{ backgroundColor: '#c4f4ef' }}>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12 shadow-2xl border border-purple-200 hover:shadow-purple-300/50 transition-all duration-500">
            <div className="grid lg:grid-cols-[2fr,3fr] gap-16">
              <div className="space-y-10">
                <h4 className="text-5xl font-black text-purple-400 mb-10 leading-tight whitespace-nowrap hover:text-purple-500 transition-colors duration-300">
                  The Pumping Unit
                </h4>

                <div className="bg-purple-100/60 rounded-3xl border border-purple-300 shadow-xl p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-5 border-b-2 border-purple-300 hover:border-purple-400 transition-colors duration-300">
                      <div className="font-black text-xl text-purple-900">Type</div>
                      <div className="text-xl text-purple-700 font-black">Stripper Well</div>
                    </div>
                    <div className="flex items-center justify-between pb-5 border-b-2 border-purple-300 hover:border-purple-400 transition-colors duration-300">
                      <div className="font-black text-xl text-purple-900">Output</div>
                      <div className="text-xl text-purple-700 font-black">1-2 barrels/day</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="font-black text-xl text-purple-900">Depth</div>
                      <div className="text-xl text-purple-700 font-black">½ mile down</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-5 border border-purple-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                  <span className="text-lg font-black text-purple-700 block mb-2">💰 Key Fact</span>
                  <p className="text-sm leading-relaxed font-semibold text-slate-800">
                    NPR management "freaked out" about potential oil spills. The team carried{' '}
                    <span className="text-base font-black text-purple-600 hover:text-purple-800 transition-colors duration-200">$10,000 cash</span>
                    {' '}in a briefcase for the purchase.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end">
                <div className="w-full relative bg-white/90 rounded-3xl p-8 shadow-2xl border border-purple-200 hover:shadow-purple-300/50 hover:scale-[1.01] transition-all duration-500">
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
