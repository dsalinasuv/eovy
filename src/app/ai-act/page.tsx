import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ShieldCheck, Scale, FileText, CheckCircle2, Lock, Cpu, Eye, UserCheck } from 'lucide-react';

export const metadata = {
  title: 'Conformidad con el EU AI Act (Reglamento UE 2024/1689) | EcoAI Weather',
  description: 'Declaración de transparencia algorítmica, gobernanza de datos y supervisión humana conforme al Reglamento Europeo de Inteligencia Artificial (EU AI Act).',
};

export default function AIActCompliancePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-sky-500 selection:text-white">
      {/* Top Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-sky-600 transition">
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a EcoAI Weather</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-12 rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center">
              <Image src="/images/logo_ecoai.png" alt="EcoAI Logo" width={80} height={60} className="object-cover scale-105" />
            </div>
            <span className="text-xs font-bold text-slate-900">Gobernanza de IA · EU AI Act</span>
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
              Última actualización: Octubre 2026 · Titular del Sistema: <strong>CustomAI Solutions Lab S.L.</strong>
            </p>
          </div>

          {/* 1. Clasificación del Sistema */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Scale className="w-5 h-5 text-sky-600" />
              1. Clasificación del Sistema de Inteligencia Artificial
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>EcoAI Weather</strong> es una plataforma de software de analítica predictiva meteorológica y optimización financiera de energía renovable desarrollada por <strong>EcoAI Lab (CustomAI Solutions Lab S.L.)</strong>.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Bajo la categorización de riesgos del <strong>Reglamento (UE) 2024/1689 (EU AI Act)</strong>, la plataforma se clasifica como un <strong>Sistema de IA de Riesgo Específico sujeto a Obligaciones de Transparencia (Artículo 50)</strong>. No constituye un sistema de alto riesgo autónomo según el Anexo III, ya que sus predicciones no ejecutan maniobras automáticas sobre la infraestructura física de la red eléctrica nacional sin autorización humana explícita.
            </p>
          </section>

          {/* 2. Principio Human-in-the-Loop */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-sky-600" />
              2. Supervisión Humana (Human-in-the-Loop — Artículo 14)
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              El diseño de EcoAI Weather garantiza en todo momento la supervisión humana efectiva:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1.5 pl-2">
              <li><strong>Herramienta de Decisión Asistida:</strong> Los despachadores y operadores de mercado conservan en todo momento la potestad final para confirmar, editar o anular las ofertas enviadas a OMIE y REE.</li>
              <li><strong>Capacidad de Parada y Anulación (Override):</strong> Los usuarios con perfil de operador pueden desconectar la ingesta automática de pronósticos en caso de eventos climáticos anómalos o de fuerza mayor.</li>
            </ul>
          </section>

          {/* 3. Transparencia Algorítmica y Explicabilidad */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Eye className="w-5 h-5 text-sky-600" />
              3. Transparencia Algorítmica y No-Opacidad (Artículo 13 y 50)
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Rechazamos las metodologías de "caja negra" inescrutables. EcoAI Weather combina:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-xs uppercase text-slate-700 block mb-1">Modelos Fundacionales & Física</span>
                <p className="text-xs text-slate-600">Modelos atmosféricos basados en reanálisis ERA-5 acoplados a ecuaciones físicas deterministas (pvlib y windpowerlib).</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-xs uppercase text-slate-700 block mb-1">Conformal Prediction Cuantílica</span>
                <p className="text-xs text-slate-600">Garantía matemática con intervalos finitos calibrados al 90% de confianza donde los cuantiles nunca se cruzan (P10 ≤ P50 ≤ P90).</p>
              </div>
            </div>
          </section>

          {/* 4. Gobernanza de Datos y Fuentes de Reanálisis */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-sky-600" />
              4. Gobernanza y Calidad de los Datos (Artículo 10)
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Las fuentes de datos utilizadas cumplen con rigurosos criterios de integridad, trazabilidad y veracidad:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1.5 pl-2">
              <li><strong>ERA-5 Reanalysis:</strong> Copernicus Climate Change Service (ECMWF) con resolución espacial de 0.25° y horaria.</li>
              <li><strong>SEAS5 Ensemble:</strong> 51 miembros de predicción estacional S2S para horizontes de 1 a 6 meses.</li>
              <li><strong>Precios de Liquidación:</strong> Operador del Mercado Ibérico de Energía (OMIE) y Sistema de Información del Operador del Sistema (ESIOS / Red Eléctrica de España).</li>
              <li><strong>Prohibición de Datos Sintéticos No Validados:</strong> Se prohíbe el uso de datos aleatorios o generados artificialmente sin calibración física real.</li>
            </ul>
          </section>

          {/* 5. Ciberseguridad y Robustez */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-sky-600" />
              5. Ciberseguridad y Robustez Técnica (Artículo 15)
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              El sistema se audita sistemáticamente contra las vulnerabilidades del <strong>OWASP Top 10</strong> y el <strong>OWASP Machine Learning Security Top 10</strong>:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 pl-2">
              <li>Aislamiento de credenciales en variables de entorno estrictamente privadas en el servidor (<code className="text-xs bg-slate-100 px-1 py-0.5 rounded font-mono">.env</code>).</li>
              <li>Canales de telemetría protegidos bajo cifrado TLS 1.3 con certificados HSTS activos.</li>
              <li>Protección contra ataques de inyección y envenenamiento de datos de entrenamiento (data poisoning).</li>
            </ul>
          </section>

          {/* 6. Contacto y Responsable de Gobernanza */}
          <section className="pt-4 border-t border-slate-100">
            <h2 className="text-sm font-bold text-slate-900 mb-2">Contacto de Cumplimiento Regulatorio y DPO</h2>
            <p className="text-xs text-slate-600">
              Para auditorías de conformidad, acceso a fichas técnicas de los modelos o consultas sobre el EU AI Act:
            </p>
            <p className="text-xs text-sky-700 font-mono mt-2">
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
        <p>© {new Date().getFullYear()} EcoAI Weather · CustomAI Solutions Lab S.L. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
