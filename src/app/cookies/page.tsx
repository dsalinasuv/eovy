import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import { Wordmark } from '@/components/web/Wordmark';

export const metadata: Metadata = {
  title: 'Política de Cookies y Consentimiento (ePrivacy) | Eovy',
  description: 'Información sobre el uso de cookies y mecanismos de consentimiento conforme a la Directiva ePrivacy en Eovy (CustomAI Solutions Lab S.L.).',
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-sky-500 selection:text-white">
      <nav className="border-b border-slate-200 bg-white/90 backdrop-blur-md px-6 py-4 flex items-center justify-between sticky top-0 z-30">
        <Link href="/" className="flex items-center gap-2.5">
          <Wordmark tone="dark" size="sm" />
        </Link>
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver a Eovy</span>
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm space-y-8">
          <div>
            <p className="text-eo-leaf text-xs font-semibold uppercase tracking-wider mb-2">Legal · Directiva ePrivacy</p>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Política de Cookies</h1>
            <p className="text-slate-500 text-xs mt-2">Última actualización: Noviembre 2026 · Titular: CustomAI Solutions Lab S.L.</p>
          </div>

          <div className="space-y-8 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-6">

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2">1. ¿Qué son las cookies y cómo las gestionamos?</h2>
              <p>
                Una cookie es un fichero que se descarga en su dispositivo al acceder a determinadas páginas web. En <strong>Eovy</strong> aplicamos una estricta política de minimización de cookies conforme a la <strong>Directiva 2002/58/CE (ePrivacy)</strong> y las directrices de la Agencia Española de Protección de Datos (AEPD).
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2">2. Inventario de Cookies del Sitio</h2>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-xs border-collapse border border-slate-200 rounded-lg overflow-hidden">
                  <thead className="bg-slate-50 text-slate-800">
                    <tr>
                      <th className="border border-slate-200 p-2.5 text-left font-semibold">Cookie</th>
                      <th className="border border-slate-200 p-2.5 text-left font-semibold">Proveedor</th>
                      <th className="border border-slate-200 p-2.5 text-left font-semibold">Finalidad</th>
                      <th className="border border-slate-200 p-2.5 text-left font-semibold">Duración</th>
                      <th className="border border-slate-200 p-2.5 text-left font-semibold">Tipo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-200 p-2.5 font-mono text-slate-900">eovy_cookie_consent</td>
                      <td className="border border-slate-200 p-2.5">CustomAI Solutions Lab S.L.</td>
                      <td className="border border-slate-200 p-2.5">Almacena el estado de consentimiento del usuario (aceptado/rechazado)</td>
                      <td className="border border-slate-200 p-2.5">12 meses</td>
                      <td className="border border-slate-200 p-2.5 font-semibold text-emerald-700">Técnica (Necesaria)</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-2.5 font-mono text-slate-900">_ga, _ga_*</td>
                      <td className="border border-slate-200 p-2.5">Google Analytics (Consent Mode v2)</td>
                      <td className="border border-slate-200 p-2.5">Métricas anónimas de tráfico web y rendimiento. Denegadas por defecto.</td>
                      <td className="border border-slate-200 p-2.5">24 meses</td>
                      <td className="border border-slate-200 p-2.5 font-semibold text-sky-700">Analítica (Opcional)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2">3. Implementación de Consent Mode v2</h2>
              <p>
                Este sitio web implementa <strong>Google Consent Mode v2</strong>. Antes de que el usuario emita su consentimiento explícito a través del banner, el estado de almacenamiento analítico (<code className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded">analytics_storage</code>) y publicitario (<code className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded">ad_storage</code>) se establece como <strong>denegado por defecto</strong>. No se cargan cookies de seguimiento hasta que el usuario pulsa deliberadamente el botón &quot;Aceptar&quot;.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2">4. Cómo modificar o desactivar las cookies en su navegador</h2>
              <p>
                Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones de su navegador web:
              </p>
              <ul className="list-disc list-inside text-xs space-y-1.5 pl-2 mt-2">
                <li><strong>Google Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios.</li>
                <li><strong>Mozilla Firefox:</strong> Ajustes → Privacidad y Seguridad → Cookies y datos del sitio.</li>
                <li><strong>Apple Safari:</strong> Ajustes → Privacidad → Bloquear todas las cookies.</li>
                <li><strong>Microsoft Edge:</strong> Configuración → Permisos del sitio → Cookies y datos del sitio.</li>
              </ul>
            </section>

          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-400">
        <p>© {new Date().getFullYear()} CustomAI Solutions Lab S.L. · Todos los derechos reservados. Propiedad privada y confidencial.</p>
      </footer>
    </div>
  );
}
