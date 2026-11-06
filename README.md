# Eovy — Web Corporativa

> **Software Privado y Confidencial**  
> **Titular:** CustomAI Solutions Lab S.L. — Todos los derechos reservados.  
> **Contacto:** [hello@ecoailab.es](mailto:hello@ecoailab.es)

---

## 🔒 Aviso de Propiedad Intelectual y Confidencialidad

Este repositorio contiene el código fuente, diseño, componentes y documentación de la **web corporativa de Eovy**, plataforma de inteligencia climática y forecasting meteorológico subestacional para energías renovables. 

Todo el material incluido es **propiedad privada y confidencial de CustomAI Solutions Lab S.L.** Queda terminantemente prohibida su copia, distribución, ingeniería inversa o uso no autorizado sin previa licencia contractual expresa o acuerdo bilateral de confidencialidad (NDA).

---

## 🏛️ Arquitectura y Principios de Aislamiento

La web opera bajo los más altos estándares de seguridad y desacoplamiento para infraestructuras B2B críticas:

- **Stack Técnico:** Next.js 14 (App Router), React 18, Tailwind CSS, TypeScript estricto.
- **Aislamiento Perimetral Completo:** El contenedor web opera en red independiente y **no tiene acceso a bases de datos ni conexión con la API interna**, mitigando superficies de ataque externas.
- **Formulario Seguro sin Persistencia:** El contacto corporativo (`/api/contact`) se procesa en tiempo real vía SMTP seguro (TLS) con validación de campo trampa (*honeypot*), saneamiento de cabeceras y limitación por IP. No almacena datos en disco ni en base de datos.
- **Internacionalización y SEO:** Español (`/`) e Inglés (`/en`) con paridad rigurosa de claves y marcado semántico avanzado (`hreflang`, canonicals, Open Graph, Schema.org `FAQPage` y `SoftwareApplication`).

---

## ⚖️ Gobernanza y Cumplimiento Normativo

La plataforma incorpora una suite legal y de transparencia completa y auditable:

1. **Protección de Datos (RGPD UE 2016/679 & LOPDGDD 3/2018):**
   - Política de privacidad accesible en [`/privacy-policy`](src/app/privacy-policy/page.tsx).
   - Minimización estricta de datos y ejercicio de derechos ARCO+ ante CustomAI Solutions Lab S.L. y la AEPD.
2. **Cookies y Directiva ePrivacy (2002/58/CE):**
   - Política de cookies accesible en [`/cookies`](src/app/cookies/page.tsx).
   - Implementación de **Google Consent Mode v2**: denegado por defecto (`analytics_storage: 'denied'`, `ad_storage: 'denied'`). Sin cookies de terceros activas antes de la aceptación expresa del usuario.
   - Banner de cookies accesible con opciones simétricas de aceptación y rechazo.
3. **Reglamento de Inteligencia Artificial (EU AI Act · UE 2024/1689):**
   - Declaración de conformidad y transparencia algorítmica en [`/ai-act`](src/app/ai-act/page.tsx).
   - Clasificación bajo el Artículo 50 (sistemas de IA con obligaciones específicas de transparencia).
   - Principio *Human-in-the-Loop* (Art. 14): previsiones explicables como soporte a la decisión, sin control automático sobre activos de red.
4. **Términos de Servicio y Licencia Privada:**
   - Condiciones contractuales y fuero judicial en Valencia (España) en [`/terms`](src/app/terms/page.tsx).

---

## 🚀 Despliegue en Local (Docker)

### 1. Variables de Entorno

Copiar la plantilla oficial de variables de entorno y configurar los valores requeridos:

```bash
cp .env.example .env
```

| Variable | Descripción | Valor Local por Defecto |
|---|---|---|
| `NODE_ENV` | Entorno de ejecución (`production` / `development`) | `production` |
| `SITE_URL` | Dominio base de la web | `http://localhost:3005` |
| `NEXT_PUBLIC_APP_URL` | URL de la consola de aplicación privada | `http://localhost:3006` |
| `CONTACT_TO` | Buzón oficial de recepción | `hello@ecoailab.es` |
| `SMTP_HOST` | Host del servidor SMTP | `smtp.ejemplo.com` |
| `SMTP_PORT` | Puerto de conexión SMTP | `587` |
| `SMTP_SECURITY` | Modo de cifrado (`starttls`, `ssl`, `none`) | `starttls` |
| `SMTP_USER` | Usuario de autenticación SMTP | `usuario_smtp` |
| `SMTP_PASSWORD` | Contraseña SMTP | `clave_smtp` |
| `SMTP_FROM` | Dirección remitente verificada | `hello@ecoailab.es` |

### 2. Ejecución con Docker Compose

```bash
docker compose up -d --build
```

El servicio estará disponible en:
- **Español:** [http://localhost:3005](http://localhost:3005)
- **Inglés:** [http://localhost:3005/en](http://localhost:3005/en)

### 3. Operación y Diagnóstico

```bash
# Inspeccionar estado
docker compose ps

# Visualizar registros en tiempo real
docker compose logs -f

# Parada del servicio
docker compose down

# Reinicio controlado
docker compose restart
```

---

## ☁️ Despliegue en Producción (Coolify)

El repositorio incluye el manifiesto `docker-compose.coolify.yml` para despliegues continuos:

1. Vincular el repositorio privado en la consola de Coolify.
2. Seleccionar el archivo `docker-compose.coolify.yml`.
3. Inyectar en el panel de variables de Coolify las credenciales seguras de producción (`SITE_URL`, `APP_URL`, `CONTACT_TO`, `SMTP_*`).
4. Desplegar. El servicio incluye límites estáticos de memoria (600M) y política de reinicio `always`.

---

## 📁 Estructura del Proyecto

```
├── Dockerfile                   # Imagen base Node 20 Alpine securizada
├── docker-compose.yml           # Pila de ejecución local (puerto 3005)
├── docker-compose.coolify.yml   # Pila de despliegue en producción para Coolify
├── .env.example                 # Plantilla segura de variables
├── .gitignore                   # Exclusión estricta de secretos y compilados
├── .dockerignore                # Optimización de contexto de compilación
├── LICENSE                      # Licencia propietaria CustomAI Solutions Lab S.L.
├── SECURITY.md                  # Política corporativa de seguridad y reporte de fallos
├── CONTRIBUTING.md              # Normas internas de desarrollo y estilo
├── CHANGELOG.md                 # Historial de cambios fechados sin versiones
├── public/                      # Recursos multimedia optimizados
├── src/
│   ├── app/                     # Rutas (Landing, /en, Legal, Contact API)
│   ├── components/              # Componentes de UI sobrios sin clichés de IA
│   ├── i18n/                    # Diccionarios bilingües con paridad (es.json, en.json)
│   ├── lib/                     # Librería de SEO y configuración de dominio
│   └── middleware.ts            # Cabeceras HTTP de seguridad (CSP, HSTS)
├── tailwind.config.js           # Tokens y paleta corporativa
└── tsconfig.json                # Configuración TypeScript estricta
```

---

## 🛡️ Seguridad y Divulgación de Vulnerabilidades

Cualquier hallazgo o reporte de seguridad debe ser canalizado de forma confidencial a través de la política descrita en [`SECURITY.md`](./SECURITY.md) escribiendo a [hello@ecoailab.es](mailto:hello@ecoailab.es).

---

## ⚖️ Licencia y Propiedad Legal

© 2026 CustomAI Solutions Lab S.L. Todos los derechos reservados.  
Consulta el archivo [`LICENSE`](./LICENSE) para información legal y restricciones aplicables.
