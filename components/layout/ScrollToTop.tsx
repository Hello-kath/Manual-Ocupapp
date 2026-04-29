'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const carbon = useCarbonClasses();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`scroll-to-top fixed bottom-8 right-8 p-3 ${carbon.btnPrimary} rounded shadow-lg z-50`}
          aria-label="Volver al inicio"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
}
