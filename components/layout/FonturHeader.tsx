'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import Image from 'next/image';

export function FonturHeader() {
  return (
    <header className="bg-gradient-to-r from-[#7B2D8B] to-[#5a1f68] shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/manuales/fontur" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Image
              src="/fontur-logo.png"
              alt="Fontur"
              width={48}
              height={48}
              className="h-10 w-auto"
              unoptimized
            />
            <span className="text-white font-semibold text-lg hidden sm:block border-l border-white/30 pl-3">
              Manual de Usuario
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <span className="text-white/80 text-sm font-medium hidden md:block">
              Fontur
            </span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
