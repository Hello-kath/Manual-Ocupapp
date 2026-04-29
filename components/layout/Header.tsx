'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import Image from 'next/image';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-[#61A60E] to-[#4a8a0a] shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Image
              src="/camposol-logo.png"
              alt="Camposol"
              width={140}
              height={40}
              className="h-9 w-auto"
              unoptimized
            />
            <span className="text-white font-semibold text-lg hidden sm:block border-l border-white/30 pl-3">
              Manual de Usuario
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <span className="text-white/80 text-sm font-medium hidden md:block">
              Conectados 2.0
            </span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
