'use client';

import { BookOpen } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';

interface ToCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: ToCItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const carbon = useCarbonClasses();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6 mb-8`}>
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        <h2 className={`text-xl font-semibold ${carbon.textPrimary}`}>
          Tabla de Contenidos
        </h2>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className={`${item.level === 2 ? 'ml-0' : 'ml-4'}`}
          >
            <button
              onClick={() => scrollToSection(item.id)}
              className="text-left text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 hover:underline transition-colors w-full"
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
