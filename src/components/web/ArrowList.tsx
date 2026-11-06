import React from 'react';
import { ArrowRight } from 'lucide-react';

export function ArrowList({ items }: { items: { title: string; desc: string }[] }) {
  return (
    <ul className="divide-y divide-eo-ink/15 border-y border-eo-ink/15">
      {items.map((item) => (
        <li key={item.title} className="flex gap-4 py-6">
          <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-eo-leaf" aria-hidden="true" />
          <div>
            <h3 className="text-xl font-medium">{item.title}</h3>
            <p className="mt-1 max-w-lg text-eo-ink/80">{item.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
