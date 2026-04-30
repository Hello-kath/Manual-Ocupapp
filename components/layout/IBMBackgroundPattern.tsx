'use client';

import { useTheme } from '@/contexts/ThemeContext';

export function IBMBackgroundPattern() {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Green gradient */}
      <div
        className="fixed inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #61A60E 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, #94C163 0%, transparent 50%),
                            radial-gradient(circle at 60% 80%, #B2CC36 0%, transparent 50%)`,
        }}
      />

      {/* Camposol logo — bottom right, near scroll button */}
      <img
        src="/camposol-logo.png"
        alt="Camposol"
        style={{
          position: 'fixed',
          bottom: '5%',
          right: '5%',
          width: '350px',
          height: 'auto',
          opacity: isDarkMode ? 0.40 : 0.75,
          animation: 'breatheLogo 4s ease-in-out infinite',
          pointerEvents: 'none',
          filter: isDarkMode
            ? 'drop-shadow(0 0 10px rgba(255,255,255,0.35))'
            : 'drop-shadow(0 3px 8px rgba(0,0,0,0.5)) drop-shadow(0 1px 3px rgba(0,0,0,0.3))',
        }}
      />
    </div>
  );
}
