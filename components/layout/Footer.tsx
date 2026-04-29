'use client';

import { useCarbonClasses } from '@/hooks/useCarbonClasses';

export function Footer() {
  const carbon = useCarbonClasses();

  return (
    <footer className={`${carbon.layer02} mt-auto border-t border-camposol-primary-green/20`}>
      <div className="container mx-auto px-6 py-6">
        <div className="text-center">
          <p className={`text-sm ${carbon.textPrimary}`}>
            Manual de Usuario — Conectados 2.0 &copy; {new Date().getFullYear()} Camposol S.A.
          </p>
          <p className={`text-xs mt-1 ${carbon.textHelper}`}>
            Desarrollado por TBBC
          </p>
        </div>
      </div>
    </footer>
  );
}
