// components/SmoothScroll.tsx
'use client';

import { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

export default function SmoothScroll() {
  useEffect(() => {
    // Налаштування глобальних опцій для плавного скролу
    const options = {
      smooth: true,
      duration: 2000,
    };

    // Додати плавний скрол до всіх посилань з href="#..."
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        e.preventDefault();
        const elementId = target.hash.substring(1);
        const element = document.getElementById(elementId);
        
        if (element) {
          const offsetTop = element.offsetTop;
          scroll.scrollTo(offsetTop, options);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return null;
}