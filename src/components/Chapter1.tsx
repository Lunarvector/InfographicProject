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

    const brownRed = new THREE.MeshStandardMaterial({
      color: 0x7d3c48,
      metalness: 0.2,
      roughness: 0.8,
    });

    const darkBrown = new THREE.MeshStandardMaterial({
      color: 0x4a2c2f,
      metalness: 0.3,
      roughness: 0.85,
    });

    const blackMetal = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      metalness: 0.7,
      roughness: 0.4,
    });

    const baseMaterial = new THREE.MeshStandardMaterial({
      color: 0x2d2d2d,
      metalness: 0.6,
      roughness: 0.7,
    });

    const groundBase = new THREE.Mesh(
      new THREE.BoxGeometry(8, 0.15, 3.5),
      new THREE.MeshStandardMaterial({ color: 0x3a3a3a, roughness: 0.9 })
    );
    groundBase.position.set(0, -1.6, 0);
    scene.add(groundBase);

    const pumpBase = new THREE.Group();

    const bottomBlock = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 0.9, 1.5),
      brownRed
    );
    bottomBlock.position.set(-1.8, -0.7, 0);
    pumpBase.add(bottomBlock);

    const middleBlock = new THREE.Mesh(
      new THREE.BoxGeometry(1.1, 1.4, 1.1),
      brownRed
    );
    middleBlock.position.set(-0.7, -0.3, 0);
    pumpBase.add(middleBlock);

    const topBlock = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 0.9, 0.7),
      brownRed
    );
    topBlock.position.set(0.1, 0.3, 0);
    pumpBase.add(topBlock);

    const wheelGeometry = new THREE.CylinderGeometry(0.45, 0.45, 0.2, 32);
    const wheel1 = new THREE.Mesh(wheelGeometry, darkBrown);
    wheel1.position.set(-1.8, -0.15, 0);
    wheel1.rotation.z = Math.PI / 2;
    pumpBase.add(wheel1);

    const wheelRim1 = new THREE.Mesh(
      new THREE.TorusGeometry(0.45, 0.05, 8, 32),
      blackMetal
    );
    wheelRim1.position.set(-1.8, -0.15, 0);
    wheelRim1.rotation.y = Math.PI / 2;
    pumpBase.add(wheelRim1);

    const wheel2 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.38, 0.38, 0.18, 32),
      darkBrown
    );
    wheel2.position.set(-0.7, 0.4, 0);
    wheel2.rotation.z = Math.PI / 2;
    pumpBase.add(wheel2);

    const wheelRim2 = new THREE.Mesh(
      new THREE.TorusGeometry(0.38, 0.04, 8, 32),
      blackMetal
    );
    wheelRim2.position.set(-0.7, 0.4, 0);
    wheelRim2.rotation.y = Math.PI / 2;
    pumpBase.add(wheelRim2);

    const wheel3 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.28, 0.28, 0.15, 32),
      darkBrown
    );
    wheel3.position.set(0.1, 0.75, 0);
    wheel3.rotation.z = Math.PI / 2;
    pumpBase.add(wheel3);

    const wheelRim3 = new THREE.Mesh(
      new THREE.TorusGeometry(0.28, 0.03, 8, 32),
      blackMetal
    );
    wheelRim3.position.set(0.1, 0.75, 0);
    wheelRim3.rotation.y = Math.PI / 2;
    pumpBase.add(wheelRim3);

    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const spoke1 = new THREE.Mesh(
        new THREE.BoxGeometry(0.45, 0.03, 0.08),
        blackMetal
      );
      spoke1.position.set(-1.8, -0.15, 0);
      spoke1.rotation.z = angle + Math.PI / 2;
      pumpBase.add(spoke1);

      const spoke2 = new THREE.Mesh(
        new THREE.BoxGeometry(0.38, 0.025, 0.07),
        blackMetal
      );
      spoke2.position.set(-0.7, 0.4, 0);
      spoke2.rotation.z = angle + Math.PI / 2;
      pumpBase.add(spoke2);

      const spoke3 = new THREE.Mesh(
        new THREE.BoxGeometry(0.28, 0.02, 0.06),
        blackMetal
      );
      spoke3.position.set(0.1, 0.75, 0);
      spoke3.rotation.z = angle + Math.PI / 2;
      pumpBase.add(spoke3);
    }

    scene.add(pumpBase);

    const supportLegGeo = new THREE.CylinderGeometry(0.1, 0.1, 3.2, 12);
    const supportLeg1 = new THREE.Mesh(supportLegGeo, darkBrown);
    supportLeg1.position.set(-0.9, 0.6, 0.5);
    supportLeg1.rotation.z = 0.38;
    scene.add(supportLeg1);

    const supportLeg2 = new THREE.Mesh(supportLegGeo, darkBrown);
    supportLeg2.position.set(-0.9, 0.6, -0.5);
    supportLeg2.rotation.z = 0.38;
    scene.add(supportLeg2);

    const supportLeg3 = new THREE.Mesh(supportLegGeo, darkBrown);
    supportLeg3.position.set(0.9, 0.6, 0.5);
    supportLeg3.rotation.z = -0.38;
    scene.add(supportLeg3);

    const supportLeg4 = new THREE.Mesh(supportLegGeo, darkBrown);
    supportLeg4.position.set(0.9, 0.6, -0.5);
    supportLeg4.rotation.z = -0.38;
    scene.add(supportLeg4);

    const crossBeam = new THREE.Mesh(
      new THREE.BoxGeometry(2, 0.12, 0.12),
      darkBrown
    );
    crossBeam.position.set(0, 2.15, 0.5);
    scene.add(crossBeam);

    const crossBeam2 = new THREE.Mesh(
      new THREE.BoxGeometry(2, 0.12, 0.12),
      darkBrown
    );
    crossBeam2.position.set(0, 2.15, -0.5);
    scene.add(crossBeam2);

    const pivotGeometry = new THREE.CylinderGeometry(0.35, 0.35, 0.7, 32);
    const pivot = new THREE.Mesh(pivotGeometry, baseMaterial);
    pivot.position.set(0, 2.05, 0);
    pivot.rotation.z = Math.PI / 2;
    scene.add(pivot);

    const beamGeometry = new THREE.BoxGeometry(6.5, 0.4, 0.5);
    const beam = new THREE.Mesh(beamGeometry, brownRed);
    beam.position.set(0, 2.05, 0);
    scene.add(beam);

    const beamOutline = new THREE.Mesh(
      new THREE.BoxGeometry(6.5, 0.42, 0.52),
      new THREE.MeshStandardMaterial({
        color: 0x3a2428,
        metalness: 0.4,
        roughness: 0.9,
        transparent: true,
        opacity: 0.5
      })
    );
    beamOutline.position.set(0, 2.05, 0);
    scene.add(beamOutline);

    const horseHeadShape = new THREE.Shape();
    horseHeadShape.moveTo(0, 0);
    horseHeadShape.lineTo(0.3, 0.1);
    horseHeadShape.lineTo(1.0, 0.3);
    horseHeadShape.lineTo(1.3, 0.9);
    horseHeadShape.lineTo(1.25, 1.5);
    horseHeadShape.lineTo(0.8, 1.9);
    horseHeadShape.lineTo(0.2, 1.8);
    horseHeadShape.lineTo(-0.15, 1.4);
    horseHeadShape.lineTo(-0.25, 0.8);
    horseHeadShape.lineTo(-0.1, 0.3);
    horseHeadShape.lineTo(0, 0);

    const extrudeSettings = {
      depth: 0.6,
      bevelEnabled: true,
      bevelThickness: 0.08,
      bevelSize: 0.08,
      bevelSegments: 5
    };
    const horseHeadGeometry = new THREE.ExtrudeGeometry(horseHeadShape, extrudeSettings);
    const horseHead = new THREE.Mesh(horseHeadGeometry, brownRed);
    horseHead.position.set(3, 1.15, -0.3);
    horseHead.rotation.y = Math.PI / 2;
    scene.add(horseHead);

    const horseHeadOutline = new THREE.Mesh(horseHeadGeometry,
      new THREE.MeshStandardMaterial({
        color: 0x3a2428,
        metalness: 0.3,
        roughness: 0.9,
        transparent: true,
        opacity: 0.4
      })
    );
    horseHeadOutline.position.set(3.02, 1.15, -0.3);
    horseHeadOutline.rotation.y = Math.PI / 2;
    horseHeadOutline.scale.set(1.02, 1.02, 1.02);
    scene.add(horseHeadOutline);

    const counterweightArm = new THREE.Mesh(
      new THREE.BoxGeometry(0.6, 1.1, 0.6),
      brownRed
    );
    counterweightArm.position.set(-2.7, 1.75, 0);
    scene.add(counterweightArm);

    const counterweight1 = new THREE.Mesh(
      new THREE.BoxGeometry(1.1, 1.6, 1.1),
      brownRed
    );
    counterweight1.position.set(-2.7, 0.7, 0);
    scene.add(counterweight1);

    const counterweight2 = new THREE.Mesh(
      new THREE.BoxGeometry(0.9, 0.3, 0.9),
      darkBrown
    );
    counterweight2.position.set(-2.7, 1.5, 0);
    scene.add(counterweight2);

    const cableTop = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, 0.5, 12),
      blackMetal
    );
    cableTop.position.set(3.3, 2.8, 0);
    scene.add(cableTop);

    const cableGeometry = new THREE.CylinderGeometry(0.05, 0.05, 4.5, 12);
    const cable = new THREE.Mesh(cableGeometry, blackMetal);
    cable.position.set(3.3, 0.5, 0);
    scene.add(cable);

    const pumpBoxBase = new THREE.Mesh(
      new THREE.BoxGeometry(1.2, 0.4, 1.2),
      baseMaterial
    );
    pumpBoxBase.position.set(3.3, -1.3, 0);
    scene.add(pumpBoxBase);

    const pumpBox = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 1.2, 0.8),
      baseMaterial
    );
    pumpBox.position.set(3.3, -0.7, 0);
    scene.add(pumpBox);

    const pumpBoxTop = new THREE.Mesh(
      new THREE.BoxGeometry(0.6, 0.3, 0.6),
      blackMetal
    );
    pumpBoxTop.position.set(3.3, -0.05, 0);
    scene.add(pumpBoxTop);

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
      angle += 0.018;

      const pumpCycle = Math.sin(angle);
      beam.rotation.z = pumpCycle * 0.42;
      beamOutline.rotation.z = pumpCycle * 0.42;
      horseHead.position.y = 1.15 + pumpCycle * 0.7;
      horseHeadOutline.position.y = 1.15 + pumpCycle * 0.7;
      counterweightArm.position.y = 1.75 - pumpCycle * 0.35;
      counterweight1.position.y = 0.7 - pumpCycle * 0.65;
      counterweight2.position.y = 1.5 - pumpCycle * 0.35;
      cable.position.y = 0.5 + pumpCycle * 0.5;
      cableTop.position.y = 2.8 + pumpCycle * 0.7;

      wheel1.rotation.x += 0.022;
      wheel2.rotation.x += 0.028;
      wheel3.rotation.x += 0.035;
      wheelRim1.rotation.x += 0.022;
      wheelRim2.rotation.x += 0.028;
      wheelRim3.rotation.x += 0.035;

      light2.intensity = 1.2 + Math.sin(angle * 2) * 0.5;

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
