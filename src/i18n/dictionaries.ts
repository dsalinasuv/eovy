import es from './es.json';
import en from './en.json';

export type Lang = 'es' | 'en';
export type Dict = typeof es;

// Tipar `en` como `Dict` obliga a mantener la paridad de claves con `es`.
export const dictionaries: Record<Lang, Dict> = { es, en };
