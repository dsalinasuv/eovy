import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Mail } from 'lucide-react';
import { Wordmark } from '@/components/web/Wordmark';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between selection:bg-sky-500 selection:text-white">
      {/* Top Header */}
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Wordmark tone="dark" size="sm" />
        </Link>
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver al inicio</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-md w-full text-center bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-eo-dawn text-eo-leaf font-mono text-xl font-bold border border-eo-leaf/20">
            404
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Página no encontrada</h1>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              La dirección a la que intenta acceder no existe, ha sido trasladada o se encuentra temporalmente restringida.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-eo-leaf hover:bg-eo-leafDark text-white text-xs font-semibold rounded-xl transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Ir al inicio</span>
            </Link>
            <a
              href="mailto:hello@ecoailab.es"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-xl transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Soporte técnico</span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-400">
        <p>© {new Date().getFullYear()} CustomAI Solutions Lab S.L. · Todos los derechos reservados. Propiedad privada y confidencial.</p>
      </footer>
    </div>
  );
}
