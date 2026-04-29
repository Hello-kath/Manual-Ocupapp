'use client';

import { ReactNode } from 'react';
import { Header } from './Header';
import { ScrollToTop } from './ScrollToTop';
import { IBMBackgroundPattern } from './IBMBackgroundPattern';

interface ManualLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export function ManualLayout({ children }: ManualLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 relative">
      <IBMBackgroundPattern />
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
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
