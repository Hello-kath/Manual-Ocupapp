'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top fixed bottom-8 right-8 p-3 bg-camposol-primary-green hover:bg-[#4a8a0a] text-white rounded shadow-lg z-50 transition-colors"
          aria-label="Volver al inicio"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
}
