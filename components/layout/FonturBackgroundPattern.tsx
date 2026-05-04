'use client';

import { useTheme } from '@/contexts/ThemeContext';

export function FonturBackgroundPattern() {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <div
        className="fixed inset-0"
        style={{
          backgroundImage: `url('/fontur-background-pattern.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: isDarkMode ? 0.06 : 0.08,
        }}
      />
      <img
        src="/fontur-logo.2.png"
        alt="Fontur"
        style={{
          position: 'fixed',
          bottom: '5%',
          right: '5%',
          width: '280px',
          height: 'auto',
          opacity: isDarkMode ? 0.20 : 0.65,
          animation: 'breatheLogo 4s ease-in-out infinite',
          pointerEvents: 'none',
          filter: isDarkMode
            ? 'drop-shadow(0 0 10px rgba(255,255,255,0.25))'
            : 'drop-shadow(0 3px 8px rgba(0,0,0,0.4)) drop-shadow(0 1px 3px rgba(0,0,0,0.2))',
        }}
      />
    </div>
  );
}
