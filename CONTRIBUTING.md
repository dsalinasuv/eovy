# Normas de Contribución y Buenas Prácticas de Ingeniería · Eovy

> **Software Privado de CustomAI Solutions Lab S.L.**  
> Este documento regula el desarrollo interno y la incorporación de cambios al código de la web corporativa de Eovy.

---

## 1. Principio Fundamental: Propiedad y Confidencialidad

Cualquier aportación, parche o mejora aportada por colaboradores o personal autorizado se incorpora bajo la titularidad exclusiva y confidencial de **CustomAI Solutions Lab S.L.**

---

## 2. Flujo de Trabajo Git

1. **Rama Principal (`main`):**
   - Representa el estado estable listo para despliegue en producción.
   - Protegida contra pushes directos no validados.
2. **Ramas de Trabajo:**
   - Usa ramas descriptivas basadas en Conventional Commits: `feat/nombre-funcionalidad`, `fix/correccion-defecto`, `docs/actualizacion`.
3. **Formato de Mensajes de Commit:**
   - Sigue la especificación de [Conventional Commits](https://www.conventionalcommits.org/):
     - `feat:` Nuevas funcionalidades.
     - `fix:` Correcciones de errores o bugs.
     - `docs:` Actualizaciones de documentación legal o técnica.
     - `style:` Ajustes visuales o formato sin cambio en la lógica.
     - `refactor:` Reestructuración de código sin alterar comportamiento.
     - `test:` Inclusión o ajuste de suites de prueba.

---

## 3. Estándares Técnicos Obligatorios

- **TypeScript Estricto:** No se permite el uso de `any` descontrolado. Los tipos de diccionarios i18n (`src/i18n/`) imponen paridad absoluta entre español e inglés.
- **Sin Clichés de IA en la Interfaz:** Prohibido el uso de iconos esotéricos (`Sparkles`, `Wand`, `Bot`, `Brain`) o gradientes cósmicos genéricos. Se exige iconografía funcional sobria (Lucide) y estética editorial limpia.
- **Cero Secretos:** Prohibido commitear archivos `.env` o credenciales. Cualquier clave debe permanecer en `.env.example` exclusivamente como variable de plantilla sin valores reales.
- **Cumplimiento Legal y RGPD:** Cualquier formulario nuevo debe incorporar casilla de aceptación de privacidad vinculada a `/privacy-policy` y validación de consentimiento conforme a la directriz ePrivacy.

---

## 4. Verificación Previa a la Fusión

Antes de solicitar la integración de cambios en `main`:
1. Ejecutar la compilación TypeScript y validación de tipos: `npm run build` o `npx tsc --noEmit`.
2. Verificar que los contenedores locales levanten sin advertencias: `docker compose up -d --build`.
3. Comprobar que no existan errores de consola (404 o peticiones fallidas) navegando por la web y las páginas legales.
