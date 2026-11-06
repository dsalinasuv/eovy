import React from 'react';

export function SectionPill({
  children,
  tone = 'dark',
}: {
  children: React.ReactNode;
  tone?: 'dark' | 'light';
}) {
  const colors = tone === 'light' ? 'border-white/50 text-white' : 'border-eo-ink/30 text-eo-ink';
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-wider ${colors}`}
    >
      {children}
    </span>
  );
}
