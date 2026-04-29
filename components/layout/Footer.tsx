'use client';

import { useCarbonClasses } from '@/hooks/useCarbonClasses';

export function Footer() {
  const carbon = useCarbonClasses();

  return (
    <footer className={`${carbon.layer02} mt-auto border-t ${carbon.border}`}>
      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <p className={`text-sm ${carbon.textPrimary}`}>
            Sistema de Manuales de Usuario &copy; {new Date().getFullYear()}
          </p>
          <p className={`text-xs mt-2 ${carbon.textHelper}`}>
            Documentación técnica para uso interno
          </p>
        </div>
      </div>
    </footer>
  );
}
