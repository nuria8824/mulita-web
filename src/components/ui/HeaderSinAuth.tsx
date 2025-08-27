"use client";

import Link from "next/link";

export function HeaderSinAuth() {
 
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-light">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <img
            src="/Logo Mulita-13.svg"
            alt="LogoMulita13"
            className="h-8 w-8 rounded-full object-contain"
          />
          <Link href="/" className="font-semibold tracking-tight">Mulita</Link>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-[15px]">
          <li><Link href="/" className="text-primary font-semibold">Inicio</Link></li>
          <li><Link href="/noticias" className="hover:text-primary">Noticias</Link></li>
          <li><Link href="/comunidad" className="hover:text-primary">Comunidad</Link></li>
          <li><Link href="/tienda" className="hover:text-primary">Tienda</Link></li>
          <li><Link href="/sobre-nosotros" className="hover:text-primary">Sobre nosotros</Link></li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/auth/register"
            className="btn btn--yellow"
          >
            Registro
          </Link>

          <Link
            href="/auth/login"
            className="btn btn--blue"
          >
            Log In
          </Link>

          <button
            className="ml-1 inline-flex items-center gap-1 text-sm px-2 py-1 rounded-lg hover:bg-muted"
            aria-label="Idioma"
            title="Idioma"
          >
            <span className="i-lucide-globe" />
            ES
          </button>
        </div>
      </nav>
      {/* Línea azul bajo la barra */}
      <div className="h-[3px] w-full bg-primary" />
    </header>
  );
}
