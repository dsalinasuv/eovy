import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Scale, FileText, Lock, Layers, Eye, UserCheck } from 'lucide-react';
import { Wordmark } from '@/components/web/Wordmark';

export const metadata = {
  title: 'Conformidad con el EU AI Act (Reglamento UE 2024/1689) | Eovy',
  description: 'Declaración de transparencia algorítmica, gobernanza de datos y supervisión humana conforme al Reglamento Europeo de Inteligencia Artificial (EU AI Act).',
};

export default function AIActCompliancePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-sky-500 selection:text-white">
      {/* Top Header */}
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition">
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a Eovy</span>
          </Link>
          <div className="flex items-center gap-4">
            <Wordmark tone="dark" size="sm" />
            <span className="hidden sm:inline-block text-xs font-medium text-slate-400">|</span>
            <span className="text-xs font-semibold text-slate-700">EU AI Act (UE 2024/1689)</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm space-y-8">
          
          <div className="border-b border-slate-100 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 border border-emerald-500/20 text-xs font-bold mb-3">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Reglamento (UE) 2024/1689 del Parlamento Europeo y del Consejo</span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Declaración de Conformidad con el EU AI Act
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Última actualización: Noviembre 2026 · Titular del Sistema: <strong>CustomAI Solutions Lab S.L.</strong>
            </p>
          </div>

          {/* 1. Clasificación del Sistema */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Scale className="w-5 h-5 text-eo-leaf" />
              1. Clasificación del Sistema de Inteligencia Artificial
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>Eovy</strong> es una plataforma de analítica y predicción meteorológica y climática subestacional para energías renovables (parques eólicos y plantas fotovoltaicas) desarrollada y operada de forma exclusiva por <strong>CustomAI Solutions Lab S.L.</strong>
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Bajo la categorización de riesgos del <strong>Reglamento (UE) 2024/1689 (EU AI Act)</strong>, la plataforma se clasifica como un <strong>Sistema de IA de Riesgo Específico sujeto a Obligaciones de Transparencia (Artículo 50)</strong>. No constituye un sistema de alto riesgo autónomo según el Anexo III, dado que sus previsiones constituyen soporte técnico para la planificación y no ejecutan maniobras automáticas sobre la infraestructura física de la red eléctrica sin intervención humana.
            </p>
          </section>

          {/* 2. Principio Human-in-the-Loop */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-eo-leaf" />
              2. Supervisión Humana (Human-in-the-Loop — Artículo 14)
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              El diseño de Eovy garantiza en todo momento la supervisión humana efectiva:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1.5 pl-2">
              <li><strong>Herramienta de Soporte a la Decisión:</strong> Los operadores de activos y gestores energéticos conservan en todo momento la potestad final para evaluar y actuar conforme a sus propios protocolos.</li>
              <li><strong>Control y Trazabilidad:</strong> Los usuarios con perfil técnico pueden auditar el origen temporal de cada previsión, la climatología de referencia y las bandas de incertidumbre asociadas.</li>
            </ul>
          </section>

          {/* 3. Transparencia Algorítmica y Explicabilidad */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Eye className="w-5 h-5 text-eo-leaf" />
              3. Transparencia Algorítmica y Explicabilidad (Artículos 13 y 50)
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Rechazamos las metodologías de &quot;caja negra&quot; inescrutables. Eovy combina:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-xs uppercase text-slate-700 block mb-1">Modelos Estadísticos y Físicos</span>
                <p className="text-xs text-slate-600">Modelos atmosféricos basados en reanálisis horario ERA-5 de Copernicus acoplados a ecuaciones físicas deterministas y líneas base de persistencia.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-xs uppercase text-slate-700 block mb-1">Incertidumbre Cuantílica Calibrada</span>
                <p className="text-xs text-slate-600">Estimación probabilística rigurosa con cuantiles monótonos no cruzados (P10 ≤ P50 ≤ P90) y anomalías expresadas frente a climatologías de entrenamiento estrictas.</p>
              </div>
            </div>
          </section>

          {/* 4. Gobernanza de Datos y Calidad */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-eo-leaf" />
              4. Gobernanza y Calidad de los Datos (Artículo 10)
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Las fuentes de datos utilizadas cumplen rigurosos criterios de integridad, trazabilidad y veracidad:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1.5 pl-2">
              <li><strong>ERA-5 Reanalysis:</strong> Copernicus Climate Change Service (ECMWF) con resolución espacial canónica y cobertura horaria continua.</li>
              <li><strong>Predictores Atmosféricos Regionales:</strong> Geopotencial Z500 y patrones de teleconexión (NAO) verificados contra literatura científica arbitrada.</li>
              <li><strong>Prohibición Estricta de Datos Sintéticos:</strong> Queda terminantemente prohibido el uso de datos simulados o inventados sin anclaje en observaciones físicas reales.</li>
            </ul>
          </section>

          {/* 5. Ciberseguridad y Robustez */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-eo-leaf" />
              5. Ciberseguridad y Robustez Técnica (Artículo 15)
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              El sistema se audita sistemáticamente bajo principios de mínimo privilegio y aislamiento de servicios:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 pl-2">
              <li>Aislamiento de la web corporativa: sin acceso directo a bases de datos ni conexión interna con la API de datos.</li>
              <li>Comunicaciones cifradas mediante TLS 1.3 con cabeceras estrictas de seguridad (HSTS, Content-Security-Policy, X-Frame-Options).</li>
              <li>Protección y custodia de secretos exclusivamente en variables de entorno de servidor sin exposición al cliente.</li>
            </ul>
          </section>

          {/* 6. Contacto y Responsable de Gobernanza */}
          <section className="pt-4 border-t border-slate-100">
            <h2 className="text-sm font-bold text-slate-900 mb-2">Contacto de Cumplimiento Regulatorio y DPO</h2>
            <p className="text-xs text-slate-600">
              Para auditorías de conformidad, consultas sobre gobernanza de modelos o requerimientos regulatorios:
            </p>
            <p className="text-xs text-eo-leaf font-mono mt-2">
              Correo Oficial: <a href="mailto:hello@ecoailab.es" className="underline font-bold">hello@ecoailab.es</a>
            </p>
            <p className="text-xs text-slate-500 mt-1">
              CustomAI Solutions Lab S.L. · Calle Santa Genoveva Torres 30, Valencia, España.
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-400">
        <p>© {new Date().getFullYear()} CustomAI Solutions Lab S.L. · Todos los derechos reservados. Propiedad privada y confidencial.</p>
      </footer>
    </div>
  );
}
