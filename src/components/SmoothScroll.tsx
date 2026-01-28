// components/SmoothScroll.tsx
'use client';

import { ReactLenis } from '@studio-freight/react-lenis';

export default function SmoothScroll({ children }: { children: any }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.1,
        duration: 1.2,
        wheelMultiplier: 0.5,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}