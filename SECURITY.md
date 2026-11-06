# Política de Seguridad · Eovy

> **Titular:** CustomAI Solutions Lab S.L.  
> **Contacto Oficial:** [hello@ecoailab.es](mailto:hello@ecoailab.es)

---

## 1. Alcance y Compromiso

CustomAI Solutions Lab S.L. se compromete a garantizar la seguridad, confidencialidad e integridad de la infraestructura web y los sistemas de Eovy. La seguridad es un pilar fundamental en todos nuestros ciclos de ingeniería y despliegue.

---

## 2. Reporte Responsable de Vulnerabilidades

Si descubres una posible vulnerabilidad de seguridad en este repositorio o en cualquiera de nuestros servicios, solicitamos que nos lo notifiques de forma **privada y confidencial**.

### Procedimiento de Notificación:
1. Envía un correo electrónico a **hello@ecoailab.es** con el asunto: `[REPORTE SEGURIDAD] - Breve descripción`.
2. Proporciona información técnica detallada que nos permita reproducir el hallazgo:
   - URL o endpoint afectado.
   - Pasos detallados para reproducir el escenario.
   - Prueba de concepto (PoC) sin impacto destructivo.
   - Evaluación del impacto potencial.
3. No reveles ni divulgues la vulnerabilidad públicamente hasta que el equipo de seguridad de CustomAI Solutions Lab S.L. haya confirmado su resolución.

### Nuestro Compromiso:
- Confirmaremos la recepción de tu reporte en un plazo máximo de **48 horas laborables**.
- Mantendremos una comunicación transparente durante el proceso de investigación y mitigación.
- Procederemos al despliegue de las correcciones pertinentes con la máxima prioridad.

---

## 3. Prácticas de Ciberseguridad Aplicadas

Este proyecto implementa:
- **Aislamiento de Red:** La web no cuenta con acceso directo a bases de datos ni a la API interna de inferencia.
- **Cero Secretos en Código:** Ninguna credencial, clave o token sensible se almacena en el control de versiones. Todas las variables de entorno se inyectan en tiempo de ejecución.
- **Cabeceras HTTP de Seguridad:** Implementación de `Content-Security-Policy`, `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Strict-Transport-Security` (HSTS) y `Referrer-Policy`.
- **Protección Perimetral y Anti-Spam:** Formularios protegidos con campo trampa (*honeypot*), saneamiento estricto de inputs y límites de frecuencia por IP (*rate limiting*).

