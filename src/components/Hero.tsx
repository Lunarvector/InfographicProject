import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    camera.position.z = 5;

    const torusGeometry = new THREE.TorusGeometry(1.8, 0.6, 64, 200);
    const torusMaterial = new THREE.MeshStandardMaterial({
      color: 0xffa07a,
      metalness: 0.8,
      roughness: 0.2,
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    scene.add(torus);

    const sphereGeometry = new THREE.SphereGeometry(0.3, 64, 64);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      metalness: 1,
      roughness: 0,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.z = -0.5;
    scene.add(sphere);

    const pointLight1 = new THREE.PointLight(0xffa07a, 150);
    pointLight1.position.set(5, 5, 8);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffd700, 100);
    pointLight2.position.set(-5, -5, 8);
    scene.add(pointLight2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      torus.rotation.x += 0.001;
      torus.rotation.y += 0.002;
      torus.rotation.z += 0.001;

      torus.position.x = Math.sin(Date.now() * 0.0005) * 0.3;
      torus.position.y = Math.cos(Date.now() * 0.0003) * 0.3;

      sphere.position.x = Math.cos(Date.now() * 0.0006) * 2;
      sphere.position.y = Math.sin(Date.now() * 0.0004) * 2;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX / window.innerWidth;
      mouseRef.current.y = e.clientY / window.innerHeight;
      camera.position.x = (mouseRef.current.x - 0.5) * 2;
      camera.position.y = -(mouseRef.current.y - 0.5) * 2;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      torusGeometry.dispose();
      torusMaterial.dispose();
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-blue-50">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-rose-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-amber-200 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-sky-200 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 pointer-events-none">
        <div className="inline-block mb-8 px-8 py-3 bg-white/60 backdrop-blur-md rounded-full border border-white/40 shadow-lg">
          <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">
            A Planet Money Story
          </p>
        </div>

        <h1 className="text-8xl md:text-9xl font-black mb-6 leading-tight tracking-tighter">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400">
            The Black
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
            Gold
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Roller Coaster
          </span>
        </h1>

        <p className="text-2xl md:text-3xl font-semibold text-slate-600 mb-4">
          Planet Money Buys Oil
        </p>

        <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
          From a Kansas well to your gas tank. Experience the complete journey of one barrel of oil
          through markets, refineries, and pipelines.
        </p>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none">
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm font-semibold text-slate-600">Scroll to explore</p>
          <div className="animate-bounce">
            <ChevronDown size={32} className="text-rose-400" strokeWidth={3} />
          </div>
        </div>
      </div>
    </section>
  );
}
