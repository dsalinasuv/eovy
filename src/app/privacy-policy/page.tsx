import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | EcoAI Lab',
  description: 'Información sobre el tratamiento de datos personales en EcoAI Lab.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Mini nav */}
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
        <h1 className="text-3xl font-black text-slate-900 mb-2">Política de Privacidad</h1>
        <p className="text-slate-500 text-sm mb-10">Última actualización: octubre 2026</p>

        <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-8">

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">1. Responsable del Tratamiento</h2>
            <p className="text-slate-600">
              <strong>CustomAI Solutions Lab S.L.</strong> (titular de EcoAI Lab)<br />
              Domicilio: Valencia, Calle Santa Genoveva Torres 30, España.<br />
              Contacto de Privacidad & DPO: <a href="mailto:hello@ecoailab.es" className="text-sky-600 hover:underline">hello@ecoailab.es</a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">2. Datos Recogidos y Finalidad</h2>
            <table className="w-full text-xs border-collapse border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Dato</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Finalidad</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Base legal</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr>
                  <td className="border border-slate-200 px-3 py-2">Nombre, email, empresa</td>
                  <td className="border border-slate-200 px-3 py-2">Gestión de demos y contacto comercial</td>
                  <td className="border border-slate-200 px-3 py-2">Consentimiento (Art. 6.1.a RGPD)</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 px-3 py-2">Datos de navegación (IP, cookies analíticas)</td>
                  <td className="border border-slate-200 px-3 py-2">Mejora del servicio y analítica web</td>
                  <td className="border border-slate-200 px-3 py-2">Consentimiento previo (ePrivacy)</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">Credenciales de acceso (clientes)</td>
                  <td className="border border-slate-200 px-3 py-2">Acceso a la plataforma privada</td>
                  <td className="border border-slate-200 px-3 py-2">Ejecución de contrato (Art. 6.1.b)</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">3. Plazo de Conservación</h2>
            <p className="text-slate-600">Los datos de contacto se conservan durante <strong>24 meses</strong> desde la última interacción, o hasta que el usuario solicite su supresión. Las cookies analíticas expiran según su configuración (máximo 13 meses).</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">4. Derechos del Usuario</h2>
            <p className="text-slate-600 mb-2">Puede ejercer los siguientes derechos enviando un email a <a href="mailto:hello@ecoailab.es" className="text-sky-600 hover:underline font-mono">hello@ecoailab.es</a>:</p>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              <li>Acceso, rectificación y supresión de datos</li>
              <li>Limitación y oposición al tratamiento</li>
              <li>Portabilidad de los datos</li>
              <li>Retirada del consentimiento en cualquier momento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">5. Transferencias Internacionales</h2>
            <p className="text-slate-600">No se realizan transferencias internacionales de datos fuera del Espacio Económico Europeo, salvo el uso de Google Analytics (EE. UU.) bajo las garantías del Marco de Privacidad UE–EE. UU. (adequacy decision).</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">6. Reclamaciones</h2>
            <p className="text-slate-600">Tiene derecho a presentar una reclamación ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong> en <a href="https://www.aepd.es" className="text-sky-600 hover:underline" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.</p>
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
