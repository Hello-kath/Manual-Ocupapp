'use client';

import { useTheme } from '@/contexts/ThemeContext';

export function OcupappBackgroundPattern() {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <img
        src="/tbbc-logo.png"
        alt="Ocupapp"
        style={{
          position: 'fixed',
          bottom: '5%',
          right: '5%',
          width: '220px',
          height: 'auto',
          opacity: isDarkMode ? 0.12 : 0.35,
          animation: 'breatheLogo 4s ease-in-out infinite',
          pointerEvents: 'none',
          filter: isDarkMode
            ? 'drop-shadow(0 0 10px rgba(255,255,255,0.25))'
            : 'drop-shadow(0 3px 8px rgba(0,0,0,0.25)) drop-shadow(0 1px 3px rgba(0,0,0,0.15))',
        }}
      />
    </div>
  );
}
