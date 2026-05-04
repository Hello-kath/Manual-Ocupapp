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
    const anchor = document.getElementById(`anchor-${id}`);
    if (!anchor) return;

    const trigger = anchor.querySelector('button[data-state]') as HTMLElement;
    if (trigger && trigger.getAttribute('data-state') === 'closed') {
      trigger.click();
      setTimeout(() => {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 350);
    } else {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="bg-purple-50 dark:bg-purple-900/20 border border-fontur-purple dark:border-fontur-purple-light rounded-lg p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-5 h-5 text-fontur-purple dark:text-fontur-purple-light" />
        <h2 className={`text-xl font-semibold ${carbon.textPrimary}`}>
          Indice
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
              className="text-left text-fontur-purple dark:text-fontur-purple-light hover:text-purple-900 dark:hover:text-purple-100 hover:underline transition-colors w-full"
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
