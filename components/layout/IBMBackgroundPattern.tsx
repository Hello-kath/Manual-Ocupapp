'use client';

import { useTheme } from '@/contexts/ThemeContext';

interface IBMBackgroundPatternProps {
  opacity?: number;
}

export function IBMBackgroundPattern({ opacity = 0.4 }: IBMBackgroundPatternProps) {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Imagen de fondo con opacity */}
      <div className="fixed inset-0" style={{ overflow: 'hidden', opacity }}>
        <div className="fixed inset-0">
          <img
            src="/login_background_light.png"
            alt="Isometric 3D background"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          {/* Capa oscura en modo oscuro */}
          {isDarkMode && (
            <div
              className="fixed inset-0"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                pointerEvents: 'none'
              }}
            />
          )}
        </div>
      </div>

      {/* Logo IBM - esquina inferior izquierda */}
      <img
        src={isDarkMode ? "/ibm-logo-white.png" : "/ibm-logo.png"}
        alt="IBM Logo"
        style={{
          position: 'fixed',
          bottom: '5%',
          left: '5%',
          width: '180px',
          height: 'auto',
          opacity: isDarkMode ? 0.25 : 0.35,
          animation: 'breatheLogo 4s ease-in-out infinite',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}
