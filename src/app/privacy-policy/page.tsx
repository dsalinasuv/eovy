import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import { Wordmark } from '@/components/web/Wordmark';

export const metadata: Metadata = {
  title: 'Política de Privacidad y Protección de Datos (RGPD) | Eovy',
  description: 'Tratamiento de datos personales conforme al Reglamento General de Protección de Datos (RGPD) en Eovy (CustomAI Solutions Lab S.L.).',
};

export default function PrivacyPolicyPage() {
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
            <p className="text-eo-leaf text-xs font-semibold uppercase tracking-wider mb-2">Legal · Cumplimiento RGPD</p>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Política de Privacidad y Protección de Datos</h1>
            <p className="text-slate-500 text-xs mt-2">Última actualización: Noviembre 2026 · Titular: CustomAI Solutions Lab S.L.</p>
          </div>

          <div className="space-y-8 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-6">

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2">1. Responsable del Tratamiento</h2>
              <p>
                El responsable del tratamiento de los datos personales recabados a través de la plataforma <strong>Eovy</strong> es:
              </p>
              <div className="mt-3 p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1 text-xs">
                <p><strong>Razón Social:</strong> CustomAI Solutions Lab S.L.</p>
                <p><strong>Domicilio Social:</strong> Calle Santa Genoveva Torres 30, 46019 Valencia, España.</p>
                <p><strong>Contacto de Privacidad y DPO:</strong> <a href="mailto:hello@ecoailab.es" className="text-eo-leaf font-semibold hover:underline">hello@ecoailab.es</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2">2. Finalidades y Base Jurídica del Tratamiento</h2>
              <p>
                De conformidad con el <strong>Reglamento (UE) 2016/679 (RGPD)</strong> y la <strong>Ley Orgánica 3/2018 (LOPDGDD)</strong>, los datos personales facilitados serán tratados para:
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-xs border-collapse border border-slate-200 rounded-lg overflow-hidden">
                  <thead className="bg-slate-50 text-slate-800">
                    <tr>
                      <th className="border border-slate-200 p-2.5 text-left font-semibold">Datos</th>
                      <th className="border border-slate-200 p-2.5 text-left font-semibold">Finalidad</th>
                      <th className="border border-slate-200 p-2.5 text-left font-semibold">Base Jurídica</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-200 p-2.5">Nombre, correo corporativo, empresa y mensaje</td>
                      <td className="border border-slate-200 p-2.5">Atención y respuesta a solicitudes de contacto y demostraciones privadas</td>
                      <td className="border border-slate-200 p-2.5">Consentimiento expreso del interesado (Art. 6.1.a RGPD)</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-2.5">Dirección IP y cabeceras de navegación mínimas</td>
                      <td className="border border-slate-200 p-2.5">Seguridad perimetral, prevención de abusos (honeypot) y rate limiting</td>
                      <td className="border border-slate-200 p-2.5">Interés legítimo en la ciberseguridad del sistema (Art. 6.1.f RGPD)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2">3. Principio de Minimización y Cero Almacenamiento Innecesario</h2>
              <p>
                La web corporativa de Eovy opera bajo una arquitectura desacoplada y sin estado de base de datos. Los mensajes remitidos mediante el formulario de contacto se procesan y transmiten directamente a través de protocolo seguro SMTP hacia el correo oficial del titular, sin quedar registrados en bases de datos web intermedias ni compartirse con terceros proveedores publicitarios.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2">4. Plazo de Conservación</h2>
              <p>
                Los datos de contacto se conservarán durante el tiempo estrictamente necesario para atender la consulta corporativa planteada y, en su caso, mientras se mantenga la relación comercial o precontractual, tras lo cual serán suprimidos o bloqueados conforme a los plazos legales de prescripción.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2">5. Derechos del Usuario (ARCO+)</h2>
              <p>
                El usuario puede ejercer en cualquier momento sus derechos de <strong>acceso, rectificación, supresión, limitación del tratamiento, oposición y portabilidad</strong> enviando una comunicación escrita, acompañada de copia de documento acreditativo de su identidad, a:
              </p>
              <p className="mt-2 font-mono text-xs text-eo-leaf font-semibold">
                hello@ecoailab.es (Ref: Ejercicio Derechos Privacidad Eovy)
              </p>
              <p className="mt-2">
                Asimismo, le informamos de su derecho a presentar una reclamación ante la autoridad de control competente, la <strong>Agencia Española de Protección de Datos (AEPD)</strong> en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-eo-leaf hover:underline">www.aepd.es</a>, en caso de considerar vulnerados sus derechos.
              </p>
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
