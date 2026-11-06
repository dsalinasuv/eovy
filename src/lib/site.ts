// Dominios por variable de entorno: ninguno se fija en el código.
export const SITE_URL = (process.env.SITE_URL ?? 'http://localhost:3005').replace(/\/$/, '');
