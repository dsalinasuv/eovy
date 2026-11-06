import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import { Wordmark } from '@/components/web/Wordmark';

export const metadata: Metadata = {
  title: 'Términos de Servicio y Aviso de Propiedad Intelectual | Eovy',
  description: 'Condiciones de uso, titularidad y derechos de propiedad intelectual de Eovy (CustomAI Solutions Lab S.L.).',
};

export default function TermsPage() {
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
            <p className="text-eo-leaf text-xs font-semibold uppercase tracking-wider mb-2">Legal · Propiedad Privada</p>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Términos de Servicio y Licencia Privada</h1>
            <p className="text-slate-500 text-xs mt-2">Última actualización: Noviembre 2026 · Titular: CustomAI Solutions Lab S.L.</p>
          </div>

          <div className="space-y-8 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-6">

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2">1. Titularidad y Descripción del Servicio</h2>
              <p>
                <strong>Eovy</strong> es una plataforma y software corporativo privado de forecasting meteorológico y climático subestacional para energías renovables, desarrollado, operado y titularidad exclusiva de <strong>CustomAI Solutions Lab S.L.</strong> (con domicilio en Calle Santa Genoveva Torres 30, Valencia, España, y correo de contacto <a href="mailto:hello@ecoailab.es" className="text-eo-leaf hover:underline">hello@ecoailab.es</a>).
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2">2. Propiedad Intelectual, Derechos de Autor y Secreto Empresarial</h2>
              <p>
                Este software, su código fuente, arquitectura, algoritmos de predicción, modelos matemáticos, metodologías de calibración, interfaces visuales, textos, logotipos y documentación técnica asociada (en adelante, el &quot;Software&quot;) son <strong>propiedad exclusiva y confidencial de CustomAI Solutions Lab S.L.</strong>
              </p>
              <p className="mt-2">
                Queda terminantemente prohibida la reproducción, duplicación, distribución, comercialización, cesión a terceros, descompilación, ingeniería inversa o cualquier forma de extracción automatizada de datos (<em>scraping</em>) sin el consentimiento previo, expreso y por escrito de CustomAI Solutions Lab S.L. Todos los derechos morales y de explotación económica están legalmente reservados.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2">3. Condiciones de Acceso y Uso Profesional</h2>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>El acceso a la plataforma de previsiones y a sus interfaces de programación (API) está restringido a clientes corporativos con contrato de servicio activo o acuerdo bilateral de confidencialidad (NDA) debidamente suscrito.</li>
                <li>Las credenciales de acceso son personales, confidenciales e intransferibles. Queda prohibida la compartición de claves de acceso o tokens entre entidades no autorizadas.</li>
                <li>Las previsiones climáticas proporcionadas son herramientas científicas de soporte a la planificación técnica y operativa; no constituyen garantías absolutas de rendimiento financiero ni asesoramiento mercantil en mercados de derivados.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2">4. Limitación de Responsabilidad</h2>
              <p>
                CustomAI Solutions Lab S.L. aplica los más altos estándares científicos y de aseguramiento de calidad sobre sus datos de reanálisis y modelos de predicción. No obstante, dada la naturaleza intrínsecamente estocástica de la física atmosférica, CustomAI Solutions Lab S.L. no responderá por pérdidas económicas indirectas, desvíos en ofertas al mercado diario o contingencias climáticas extraordinarias no imputables a dolo o negligencia grave.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2">5. Ley Aplicable y Jurisdicción</h2>
              <p>
                Los presentes términos y cualquier controversia relativa a la plataforma se regirán por la legislación mercantil y civil española. Para la resolución de cualquier conflicto derivado de su interpretación o ejecución, las partes se someten a la jurisdicción exclusiva de los Juzgados y Tribunales de la ciudad de Valencia (España), con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
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
