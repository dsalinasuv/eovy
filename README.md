# Eovy — Web Pública

Landing pública institucional, páginas legales, soporte multilingüe y formulario de contacto por SMTP para **Eovy** (forecasting meteorológico y climático subestacional para energías renovables).

---

## 🏛️ Arquitectura y Aislamiento

- **Stack técnico:** Next.js 14 (App Router), React 18, Tailwind CSS, TypeScript.
- **Aislamiento estricto:** Contenedor Docker independiente sin base de datos ni acceso a la API interna, cumpliendo la directriz de arquitectura de servicios desacoplados.
- **Contacto seguro:** Formulario gestionado por SMTP (`/api/contact`) con validación de campo trampa (*honeypot*), límites por IP y cabeceras saneadas, sin persistencia en disco ni base de datos.
- **SEO e Internacionalización:** Español (`/`) e Inglés (`/en`) con paridad total de claves y metadatos SEO (`hreflang`, canonicals, Open Graph, Schema.org `FAQPage` y `SoftwareApplication`).

---

## 🚀 Despliegue en Local (Docker)

### 1. Variables de Entorno

Copia la plantilla de variables de entorno y ajusta los valores necesarios:

```bash
cp .env.example .env
```

| Variable | Descripción | Valor por defecto (local) |
|---|---|---|
| `NODE_ENV` | Entorno de ejecución | `production` / `development` |
| `SITE_URL` | URL base pública de la landing | `http://localhost:3005` |
| `NEXT_PUBLIC_APP_URL` | URL de la plataforma autenticada | `http://localhost:3006` |
| `CONTACT_TO` | Destinatario de los mensajes de contacto | `hello@ecoailab.es` |
| `SMTP_HOST` | Servidor SMTP para envío de correos | `smtp.ejemplo.com` |
| `SMTP_PORT` | Puerto SMTP | `587` |
| `SMTP_SECURITY` | Seguridad TLS (`starttls`, `ssl`, `none`) | `starttls` |
| `SMTP_USER` | Usuario SMTP | `usuario_smtp` |
| `SMTP_PASSWORD` | Contraseña SMTP | `clave_smtp` |
| `SMTP_FROM` | Dirección remitente | `hello@ecoailab.es` |

### 2. Construcción y Arranque

```bash
docker compose up -d --build
```

El servicio estará disponible en:
- **Español:** [http://localhost:3005](http://localhost:3005)
- **Inglés:** [http://localhost:3005/en](http://localhost:3005/en)

### 3. Comandos Útiles

```bash
# Ver estado del contenedor
docker compose ps

# Seguir registros en tiempo real
docker compose logs -f

# Detener el servicio
docker compose down

# Reiniciar
docker compose restart
```

---

## ☁️ Despliegue en Producción (Coolify)

Este repositorio incluye `docker-compose.coolify.yml` listo para despliegues continuos mediante Coolify:

1. Conectar este repositorio (`dsalinasuv/eovy`) en Coolify como servicio Docker Compose.
2. Seleccionar el archivo de compose `docker-compose.coolify.yml`.
3. Configurar en Coolify las variables de entorno (`SITE_URL`, `APP_URL`, `CONTACT_TO`, `SMTP_*`).
4. Desplegar. El contenedor se ejecuta con límite de memoria optimizado (600M) y reinicio automático.

---

## 📁 Estructura del Repositorio

```
├── Dockerfile                   # Imagen base Node 20 Alpine optimizada
├── docker-compose.yml           # Orquestación de desarrollo local (puerto 3005)
├── docker-compose.coolify.yml   # Configuración de producción para Coolify
├── .env.example                 # Plantilla de variables seguras
├── public/                      # Imágenes WebP y vídeos de alta definición
├── src/
│   ├── app/                     # Páginas (Home, Legal, API Contact, i18n /en)
│   ├── components/              # Componentes visuales y accesibles de UI
│   ├── i18n/                    # Diccionarios bilingües con paridad (es.json, en.json)
│   ├── lib/                     # Utilidades SEO, metadatos y configuración
│   └── middleware.ts            # Seguridad de cabeceras HTTP y redirecciones
├── tailwind.config.js           # Paleta de diseño y tokens de interfaz
└── tsconfig.json                # Configuración TypeScript
```

---

## ⚖️ Titularidad y Licencia

- **Titular:** CustomAI Solutions Lab S.L. — Todos los derechos reservados.
- **Contacto oficial:** [hello@ecoailab.es](mailto:hello@ecoailab.es)
- Consulta el archivo [`LICENSE`](./LICENSE) para las condiciones de uso y restricciones.
