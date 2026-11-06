# Historial de Cambios · Eovy Web

Todos los cambios notables en este repositorio se documentan por fechas, conforme a las directrices de gobernanza técnica de **CustomAI Solutions Lab S.L.**

---

## 2026-11-06

### Seguridad y Hardening
- Actualización de dependencias base (`next@^14.2.35`, `nodemailer@^6.10.0`) solventando CVEs críticas de envenenamiento de caché y SSRF.
- Generación y versionado de `package-lock.json` para garantizar compilaciones inmutables y habilitar el pipeline de CI (`npm ci`).
- Implementación de cabecera `Content-Security-Policy` (CSP) estricta en `next.config.js`.
- Mitigación de fugas de memoria y spoofing de IP en el rate limiter del handler `/api/contact` mediante purga periódica.
- Implementación de casilla de verificación (*checkbox*) de consentimiento obligatorio RGPD en formulario de contacto con validación tanto en cliente como en servidor.
- Sincronización del estado de Google Consent Mode v2 en el montaje inicial para usuarios recurrentes en `CookieBanner.tsx`.

### Añadido
- Suite legal completa adaptada a Eovy y CustomAI Solutions Lab S.L.:
  - Declaración de conformidad con el **EU AI Act** (Reglamento UE 2024/1689 Art. 50 y Art. 14 de supervisión humana).
  - Términos de Servicio y aviso reforzado de **Propiedad Intelectual y Secreto Empresarial** (Ley 1/2019).
  - Política de Privacidad conforme al **RGPD** (Reglamento UE 2016/679) con canal de ejercicio de derechos ante CustomAI Solutions Lab S.L. y la AEPD.
  - Política de Cookies conforme a la **Directiva ePrivacy** con especificación de Consent Mode v2.
- Clave de consentimiento de cookies estandarizada a `eovy_cookie_consent`.
- Archivos de gobernanza de repositorio empresarial: `SECURITY.md`, `CONTRIBUTING.md`, `LICENSE` y `CHANGELOG.md`.
- Flujo de Integración Continua (CI) en GitHub Actions (`.github/workflows/ci.yml`).
- Aislamiento completo de la web y publicación independiente en repositorio GitHub (`dsalinasuv/eovy`).

### Modificado
- Erradicación de iconos y referencias genéricas a IA en las páginas legales, sustituyendo cualquier cliché visual por iconografía técnica sobria (`Scale`, `ShieldCheck`, `Layers`, `Lock`, `Eye`).
- Ajuste del pie de página para reflejar formalmente la titularidad privada y confidencial de CustomAI Solutions Lab S.L.

---

## 2026-10-28

### Añadido
- Soporte multilingüe bilingüe con paridad estricta de tipos (Español en `/` e Inglés en `/en`).
- Secciones informativas técnicas: variables climáticas, horizontes temporales y especificación de API para desarrolladores.
- Formulario de contacto seguro desacoplado mediante transporte SMTP sin persistencia en disco ni base de datos.
- Metadatos estructurados JSON-LD (`FAQPage`, `SoftwareApplication`) y cabeceras canónicas/hreflang.

---

## 2026-10-27

### Añadido
- Separación estructural de la web como contenedor Docker independiente sin base de datos ni acceso a la API (Fase 2).
- Configuración de despliegue para desarrollo local (`docker-compose.yml`) y producción en Coolify (`docker-compose.coolify.yml`).

