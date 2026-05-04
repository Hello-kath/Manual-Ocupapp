'use client';

import { ReactNode } from 'react';
import { FonturHeader } from './FonturHeader';
import { ScrollToTop } from './ScrollToTop';
import { FonturBackgroundPattern } from './FonturBackgroundPattern';

interface FonturManualLayoutProps {
  children: ReactNode;
}

export function FonturManualLayout({ children }: FonturManualLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 relative">
      <FonturBackgroundPattern />
      <div className="relative z-10 min-h-screen flex flex-col">
        <FonturHeader />
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
