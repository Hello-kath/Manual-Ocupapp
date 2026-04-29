'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { Home } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-[#0f62fe] to-[#00539a] shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-semibold text-white hover:opacity-90 transition-opacity flex items-center gap-2">
            <Home className="w-6 h-6" />
            Sistema de Manuales IBM
          </Link>
          <div className="flex items-center gap-6">
            <nav>
              <Link
                href="/"
                className="text-white hover:opacity-80 transition-opacity text-sm font-medium"
              >
                Inicio
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
