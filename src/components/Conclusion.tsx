import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Fuel, Zap, Hammer, TrendingUp, Wrench, Factory, Wheat, Droplet } from 'lucide-react';
import DarkBackground from './DarkBackground';

export default function Conclusion() {
  const carCanvasRef = useRef<HTMLCanvasElement>(null);
  const [showMilkshake, setShowMilkshake] = useState(false);

  useEffect(() => {
    if (!carCanvasRef.current) return;

    const scene = new THREE.Scene();
    scene.background = null;
    const camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: carCanvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(800, 600);
    renderer.setPixelRatio(window.devicePixelRatio);
    camera.position.set(5, 3, 8);
    camera.lookAt(0, 0, 0);

    const carBody = new THREE.BoxGeometry(4, 1.5, 2);
    const carMaterial = new THREE.MeshStandardMaterial({
      color: 0x60a5fa,
      metalness: 0.8,
      roughness: 0.2,
    });
    const body = new THREE.Mesh(carBody, carMaterial);
    body.position.y = 1;
    scene.add(body);

    const carTop = new THREE.BoxGeometry(2.5, 1, 1.8);
    const top = new THREE.Mesh(carTop, carMaterial);
    top.position.set(-0.3, 2, 0);
    scene.add(top);

    const wheelGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.3, 32);
    const wheelMaterial = new THREE.MeshStandardMaterial({
      color: 0x1f2937,
      metalness: 0.5,
    });

    const wheelPositions = [
      { x: 1.5, z: 1.2 },
      { x: 1.5, z: -1.2 },
      { x: -1.5, z: 1.2 },
      { x: -1.5, z: -1.2 },
    ];

    const wheels: THREE.Mesh[] = [];
    wheelPositions.forEach((pos) => {
      const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
      wheel.position.set(pos.x, 0.4, pos.z);
      wheel.rotation.z = Math.PI / 2;
      scene.add(wheel);
      wheels.push(wheel);
    });

    const nozzleGeometry = new THREE.CylinderGeometry(0.15, 0.15, 1.5, 16);
    const nozzleMaterial = new THREE.MeshStandardMaterial({
      color: 0xfbbf24,
      metalness: 0.9,
      roughness: 0.05,
    });
    const nozzle = new THREE.Mesh(nozzleGeometry, nozzleMaterial);
    nozzle.position.set(3, 2, 1);
    nozzle.rotation.z = Math.PI / 4;
    scene.add(nozzle);

    const hoseGeometry = new THREE.CylinderGeometry(0.08, 0.08, 2, 16);
    const hoseMaterial = new THREE.MeshStandardMaterial({
      color: 0x6b7280,
      metalness: 0.4,
    });
    const hose = new THREE.Mesh(hoseGeometry, hoseMaterial);
    hose.position.set(2.5, 1.5, 1);
    hose.rotation.z = Math.PI / 3;
    scene.add(hose);

    const light1 = new THREE.DirectionalLight(0xffffff, 1);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xfbbf24, 100);
    light2.position.set(3, 2, 1);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    let animationFrameId: number;
    let rotation = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      rotation += 0.005;
      wheels.forEach((wheel) => {
        wheel.rotation.x = rotation;
      });

      body.position.y = 1 + Math.sin(rotation * 2) * 0.02;
      top.position.y = 2 + Math.sin(rotation * 2) * 0.02;

      camera.position.x = 5 * Math.cos(rotation * 0.2);
      camera.position.z = 8 * Math.sin(rotation * 0.2);
      camera.lookAt(0, 1, 0);

      renderer.render(scene, camera);
    };

    animate();

    const timer = setTimeout(() => setShowMilkshake(true), 2000);

    return () => {
      clearTimeout(timer);
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
    <section className="chapter-section min-h-screen py-24 px-6 relative overflow-hidden">
      <DarkBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
            The Journey Complete
          </h2>
          <p className="text-2xl text-white/70 font-semibold">From Kansas well to your gas tank</p>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-yellow-400 mb-12">
          <div className="flex justify-center mb-8">
            <canvas ref={carCanvasRef} className="rounded-2xl" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>

          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-100 text-yellow-900 rounded-full font-black text-xl border-2 border-yellow-400 shadow-lg">
              <Fuel size={28} />
              Planet Money Diesel
            </div>
            <p className="text-slate-800 text-lg max-w-2xl mx-auto leading-relaxed font-semibold">
              Watch as Planet Money's diesel, extracted from Jason's Kansas well, refined at the CHS Coker, and
              transported through pipelines, finally fuels a vehicle.
            </p>
          </div>
        </div>

        {showMilkshake && (
          <div
            className="bg-gradient-to-br from-purple-100 to-blue-100 p-12 rounded-3xl border-2 border-purple-400 relative shadow-2xl animate-fade-in"
            style={{
              animation: 'fadeInUp 1s ease forwards',
            }}
          >
            <div className="text-center mb-10">
              <div className="flex justify-center mb-6">
                <Droplet size={80} className="text-purple-600 animate-bounce" />
              </div>
              <h3 className="text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                I Drink Your Milkshake
              </h3>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-semibold">
                Inspired by the iconic scene from <span className="italic font-black text-purple-600">There Will Be Blood</span>,
                where Daniel Plainview explains directional drilling
              </p>
            </div>

            <div className="relative max-w-2xl mx-auto mb-10">
              <div className="bg-white rounded-2xl p-8 border-2 border-purple-400 shadow-lg">
                <div className="flex items-start justify-between mb-10">
                  <div className="text-center flex-1">
                    <div className="flex justify-center mb-3">
                      <Factory size={64} className="text-purple-600" />
                    </div>
                    <div className="text-sm font-bold text-slate-700">Your Property</div>
                    <div className="text-xs text-slate-600 font-semibold">Oil Field</div>
                  </div>

                  <div className="flex-1 flex flex-col items-center">
                    <div
                      className="w-1 bg-gradient-to-b from-purple-500 to-yellow-500 mb-3"
                      style={{
                        height: '120px',
                        animation: 'flowDown 2s ease-in-out infinite',
                      }}
                    />
                    <Droplet size={48} className="text-yellow-600 animate-bounce" />
                  </div>

                  <div className="text-center flex-1">
                    <div className="flex justify-center mb-3">
                      <Wheat size={64} className="text-green-600" />
                    </div>
                    <div className="text-sm font-bold text-slate-700">Neighbor's Property</div>
                    <div className="text-xs text-slate-600 font-semibold">Surface Only</div>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-2xl border-2 border-purple-300">
                  <p className="text-slate-800 italic text-center text-lg font-bold mb-4">
                    "There it is. It's right over there. And I own it because I've drilled and it comes up through
                    here. You see? So I drink your water. I drink it up!"
                  </p>
                  <p className="text-center text-sm text-slate-600 font-semibold">
                    — Daniel Plainview, There Will Be Blood (2007)
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-slate-800 text-base max-w-2xl mx-auto leading-relaxed font-semibold">
                This metaphor brilliantly captures how oil beneath the surface can be extracted from wells drilled on
                adjacent properties—much like how a long straw can drink from a neighboring milkshake.
              </p>
            </div>
          </div>
        )}

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
