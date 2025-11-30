import { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineBackground() {
  return (
    <Suspense fallback={null}>
      <div className="absolute inset-0 z-0 opacity-40">
        <Spline
          scene="https://prod.spline.design/RwlXk1TApW7z4Y55/scene.splinecode"
        />
      </div>
    </Suspense>
  );
}
