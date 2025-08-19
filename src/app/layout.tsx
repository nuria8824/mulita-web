// src/app/layout.tsx
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Mulita",
  description: "Comunidad y tienda oficial de Mulita",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="">
      <body className="bg-background text-foreground">
        {/* Top bar */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-border">
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

        <main>{children}</main>

        {/* Footer */}
        <footer className="mt-24 bg-primary text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-lg font-bold tracking-tight">MULITA</h3>
              <p className="mt-3 text-white/80 text-sm">
                Un lugar para aprender, compartir y construir. Sé parte de la comunidad.
              </p>
              <Link
                href="/comunidad"
                className="btn btn--yellow mt-4"
              >
                ¡Únete!
              </Link>
            </div>
            <div>
              <h4 className="font-semibold">Últimas noticias</h4>
              <ul className="mt-3 space-y-2 text-white/80 text-sm">
                <li>• Lanzamiento de kits educativos</li>
                <li>• Talleres de fin de semana</li>
                <li>• Concurso de proyectos</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Contacto</h4>
              <p className="mt-3 text-white/80 text-sm">
                Universidad Adventista del Plata<br />
                Libertador San Martín, Entre Ríos<br />
                <span className="block mt-1">+54 9 343 752101</span>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
