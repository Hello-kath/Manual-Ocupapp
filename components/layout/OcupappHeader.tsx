'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import Image from 'next/image';

export function OcupappHeader() {
  return (
    <header className="bg-gradient-to-r from-ocupapp-purple to-ocupapp-primary shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/manuales/ocupapp" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Image
              src="/tbbc-logo.png"
              alt="Ocupapp"
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
              Ocupapp
            </span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
