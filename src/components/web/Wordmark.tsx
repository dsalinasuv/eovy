import React from 'react';
import Link from 'next/link';

export function Wordmark({ tone = 'dark', size = 'md' }: { tone?: 'dark' | 'light'; size?: 'sm' | 'md' | 'lg' }) {
  const color = tone === 'light' ? 'text-white' : 'text-eo-ink';
  const scale = size === 'lg' ? 'text-6xl' : size === 'sm' ? 'text-2xl' : 'text-4xl';
  return (
    <Link href="/" className="leading-none" aria-label="Eovy">
      <span className={`font-semibold tracking-tight ${scale} ${color}`}>Eovy</span>
    </Link>
  );
}
