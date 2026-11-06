import { NextRequest, NextResponse } from 'next/server';

// Expone el idioma de la ruta al layout para emitir <html lang> correcto en el servidor.
export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  const isEn = request.nextUrl.pathname === '/en' || request.nextUrl.pathname.startsWith('/en/');
  headers.set('x-lang', isEn ? 'en' : 'es');
  return NextResponse.next({ request: { headers } });
}

export const config = { matcher: ['/((?!_next|api|.*\\..*).*)'] };
