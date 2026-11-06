import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos de Servicio | EcoAI Lab',
  description: 'Condiciones de uso de EcoAI Lab.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-slate-100 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-slate-900 text-sm flex items-center gap-2.5">
          <div className="relative h-7 w-9 rounded-md overflow-hidden bg-slate-950 border border-slate-700/60 shadow-xs flex items-center justify-center p-0.5">
            <Image
              src="/images/logo_ecoai.png"
              alt="EcoAI Lab"
              width={36}
              height={28}
              className="object-contain w-full h-full"
            />
          </div>
          EcoAI Lab
        </Link>
        <Link href="/" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">← Volver</Link>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-sky-600 text-xs font-semibold uppercase tracking-[0.2em] mb-3">Legal</p>
        <h1 className="text-3xl font-black text-slate-900 mb-2">Términos de Servicio</h1>
        <p className="text-slate-500 text-sm mb-10">Última actualización: octubre 2026</p>

        <div className="space-y-8 text-sm text-slate-600 leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">1. Descripción del Servicio</h2>
            <p>EcoAI Lab proporciona una plataforma de predicción meteorológica estacional y day-ahead para agentes del Mercado Diario de electricidad (OMIE) y gestores de cartera de energías renovables en España. El acceso a los datos operativos está restringido a clientes verificados mediante credenciales.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">2. Condiciones de Uso</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>El acceso a la plataforma privada requiere la aceptación de un contrato de servicio específico.</li>
              <li>Los datos, predicciones y análisis proporcionados son orientativos. No constituyen asesoramiento financiero ni garantizan resultados en los mercados energéticos.</li>
              <li>Queda prohibido redistribuir, revender o publicar los datos de la plataforma sin autorización escrita de EcoAI Lab.</li>
              <li>El usuario es responsable del uso que haga de las predicciones en sus decisiones de oferta al Mercado Diario o contratos de PPA.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">3. Limitación de Responsabilidad</h2>
            <p>EcoAI Lab no será responsable de pérdidas económicas derivadas del uso de las predicciones, incluyendo desvíos en la liquidación del Operador del Sistema (REE), variaciones de precio en el Mercado Diario o decisiones de cobertura financiera basadas en las predicciones estacionales.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">4. Propiedad Intelectual y Licencia Protegida</h2>
            <p>Los modelos algorítmicos, metodologías de calibración, código fuente, interfaces y marcas de la plataforma son propiedad exclusiva y confidencial de <strong>CustomAI Solutions Lab S.L.</strong> Su uso sin licencia comercial o acuerdo bilateral de confidencialidad (NDA) expresamente firmado está estrictamente prohibido y protegido por la legislación de propiedad intelectual y secretos empresariales.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">5. Ley Aplicable y Jurisdicción</h2>
            <p>Estos términos se rigen por la legislación española y la normativa de la Unión Europea. Para cualquier controversia, las partes se someten a los Juzgados y Tribunales de Valencia, con renuncia a cualquier otro fuero.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">6. Contacto Legal</h2>
            <p>Para consultas legales o licenciamiento: <a href="mailto:hello@ecoailab.es" className="text-sky-600 hover:underline">hello@ecoailab.es</a></p>
          </section>

        </div>
      </main>

      <footer className="border-t border-slate-100 py-8 px-6 text-center">
        <div className="flex items-center justify-center gap-6 text-xs text-slate-400">
          <Link href="/privacy-policy" className="hover:text-slate-700">Privacidad</Link>
          <Link href="/terms" className="hover:text-slate-700">Términos</Link>
          <Link href="/cookies" className="hover:text-slate-700">Cookies</Link>
        </div>
      </footer>
    </div>
  );
}
