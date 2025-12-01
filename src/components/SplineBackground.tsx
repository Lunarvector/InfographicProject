import { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineBackground() {
  return (
    <Suspense fallback={null}>
      <div className="absolute inset-0 w-full h-full">
        <Spline
          scene="https://prod.spline.design/RwlXk1TApW7z4Y55/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </Suspense>
  );
}
