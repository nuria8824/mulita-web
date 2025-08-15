import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Proyecto Mulita",
  description: "Plataforma web educativa",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
          <Link href="/">Inicio</Link> |{" "}
          <Link href="/noticias">Noticias</Link> |{" "}
          <Link href="/auth/login">Login</Link> |{" "}
          <Link href="/auth/register">Registro</Link> |{" "}
          <Link href="/me">Mi perfil</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
