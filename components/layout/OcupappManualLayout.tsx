'use client';

import { ReactNode } from 'react';
import { OcupappHeader } from './OcupappHeader';
import { ScrollToTop } from './ScrollToTop';
import { OcupappBackgroundPattern } from './OcupappBackgroundPattern';

interface OcupappManualLayoutProps {
  children: ReactNode;
}

export function OcupappManualLayout({ children }: OcupappManualLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 relative">
      <OcupappBackgroundPattern />
      <div className="relative z-10 min-h-screen flex flex-col">
        <OcupappHeader />
        <main className="flex-1">
          <div className="container mx-auto px-6 py-8">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-sm p-8 border border-gray-300 dark:border-gray-600 rounded-lg">
              {children}
            </div>
          </div>
        </main>
        <ScrollToTop />
      </div>
    </div>
  );
}
