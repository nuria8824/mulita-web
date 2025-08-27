// src/app/layout.tsx
import { HeaderSinAuth } from "@/components/ui/HeaderSinAuth";
import "./globals.css";
import Link from "next/link";
import { Footer } from "@/components/ui/Footer";

export const metadata = {
  title: "Mulita",
  description: "Comunidad y tienda oficial de Mulita",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="">
      <body className="bg-background text-foreground">
        {/* Top bar */}
        <HeaderSinAuth />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
