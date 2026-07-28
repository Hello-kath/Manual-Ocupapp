'use client';

import { BookOpen } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';

interface ToCItem {
  id: string;
  title: string;
  level: number;
  parent?: string;
}

interface TableOfContentsProps {
  items: ToCItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const carbon = useCarbonClasses();

  // Opens the (closed) accordion trigger inside a container; returns true if it clicked to open.
  const openIfClosed = (containerId: string) => {
    const container = document.getElementById(containerId);
    if (!container) return false;
    const trigger = container.querySelector('button[data-state]') as HTMLElement | null;
    if (trigger && trigger.getAttribute('data-state') === 'closed') {
      trigger.click();
      return true;
    }
    return false;
  };

  const scrollToSection = (id: string, parent?: string) => {
    // If the target lives inside a role accordion, open that role first (it mounts the module).
    const openedParent = parent ? openIfClosed(`anchor-${parent}`) : false;

    const go = () => {
      const anchor = document.getElementById(`anchor-${id}`);
      if (!anchor) return;
      const trigger = anchor.querySelector('button[data-state]') as HTMLElement | null;
      const wasClosed = trigger && trigger.getAttribute('data-state') === 'closed';
      if (wasClosed) trigger!.click();
      setTimeout(
        () => anchor.scrollIntoView({ behavior: 'smooth', block: 'start' }),
        wasClosed ? 300 : 0,
      );
    };

    // Give the parent role a moment to mount its children before scrolling to them.
    if (openedParent) setTimeout(go, 140);
    else go();
  };

  return (
    <nav className="bg-purple-50 dark:bg-purple-900/20 border border-ocupapp-purple dark:border-ocupapp-purple-light rounded-lg p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-5 h-5 text-ocupapp-purple dark:text-ocupapp-purple-light" />
        <h2 className={`text-xl font-semibold ${carbon.textPrimary}`}>
          Indice
        </h2>
      </div>
      <ul className="space-y-2">
        {items.map((item) =>
          item.level === 1 ? (
            <li key={item.id} className="mt-4 first:mt-0">
              <button
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-xs font-bold uppercase tracking-wide ${carbon.textPrimary} hover:text-ocupapp-purple dark:hover:text-ocupapp-purple-light transition-colors`}
              >
                {item.title}
              </button>
            </li>
          ) : (
            <li key={item.id} className="ml-3">
              <button
                onClick={() => scrollToSection(item.id, item.parent)}
                className="text-left text-ocupapp-purple dark:text-ocupapp-purple-light hover:text-purple-900 dark:hover:text-purple-100 hover:underline transition-colors w-full"
              >
                {item.title}
              </button>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}
