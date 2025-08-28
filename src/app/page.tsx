// src/app/page.tsx
import { SeccionProductos } from "@/components/ui/SeccionProductos";
import { SeccionNoticias } from "@/components/ui/SeccionNoticias";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  

  

  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 items-center gap-10 pt-16 md:pt-24">
            {/* Texto */}
            <div className="order-2 md:order-1">
              <div className="h-1.5 w-16 bg-secondary rounded-full mb-6" />
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-primary drop-shadow-[0_4px_0_var(--uap-yellow)]">
                Mulita
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                Plataforma web del <strong>Proyecto Mulita</strong>: informate, comprá el kit y
                compartí actividades educativas. Pensado para escuelas de nivel
                <strong> primario y secundario</strong>, con una comunidad que crece día a día. Mulita
                es <strong>marca registrada</strong> y su modelo de robot es <em>Open Source</em>.
              </p>

              <div className="mt-8 flex items-center gap-4">
                {/* Comunidad */}
                <Link href="/comunidad" className="btn btn--blue">
                  Comunidad <span aria-hidden>→</span>
                </Link>

                {/* Ver Tienda */}
                <Link href="/tienda" className="btn btn--outline">
                  Ver Tienda
                </Link>

              </div>
            </div>

            {/* Imagen */}
            <div className="order-1 md:order-2 relative w-full aspect-[4/3] md:aspect-auto">
              <Image
                alt="Robot Mulita"
                src="/Logo Mulita-13.svg" 
                fill
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE INFO - público general */}
      <section className="mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-light p-6">
            <h3 className="text-xl font-bold">Aprender con Mulita</h3>
            <p className="mt-3 text-muted-foreground">
              Mulita es un <strong>robot programable</strong> sencillo de usar, ideal para iniciar a
              niñas, niños y adolescentes en robótica, programación y electrónica.
              La plataforma reúne contenidos, ejemplos y manuales para docentes y
              estudiantes, todo en un mismo lugar.
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-muted-foreground">
              <li>Guías de uso, misión y visión del proyecto.</li>
              <li>Casos de implementación en escuelas.</li>
              <li>Documentación técnica y manuales de construcción.</li>
            </ul>
            <Link href="/noticias" className="mt-4 inline-block text-primary font-medium">
              Ver novedades →
            </Link>
          </div>

          <div className="rounded-2xl border border-light p-6">
            <h3 className="text-xl font-bold">Comunidad educativa</h3>
            <p className="mt-3 text-muted-foreground">
              Registrate para <strong>subir actividades</strong> (texto, PDF, imágenes o video),
              organizarlas por <em>materias</em> y <em>niveles</em>, y participar en el foro con
              comentarios y “me gusta”. También podés crear colecciones y llevar
              tus favoritos.
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-muted-foreground">
              <li>Perfiles de usuario y de docente con institución y ubicación.</li>
              <li>Foro colaborativo con crédito al autor al reutilizar actividades.</li>
              <li>Colecciones personales y lista de favoritos.</li>
            </ul>
            <Link href="/comunidad" className="mt-4 inline-block text-primary font-medium">
              Entrar a la comunidad →
            </Link>
          </div>

          <div className="rounded-2xl border border-light p-6">
            <h3 className="text-xl font-bold">Tienda y pedido simple</h3>
            <p className="mt-3 text-muted-foreground">
              Mirá kits y piezas con precios, agregá al carrito y generá tu
              <strong> orden por WhatsApp</strong> con los datos requeridos para facturación.
              Coordinamos el pago por ese medio y te acompañamos con la info que
              necesitás para empezar.
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-muted-foreground">
              <li>Kits completos y piezas por separado.</li>
              <li>Formulario de cierre con DNI/CUIT/CUIL y razón social.</li>
              <li>Soporte en español, portugués e inglés.</li>
            </ul>
            <Link href="/tienda" className="mt-4 inline-block text-primary font-medium">
              Ir a la tienda →
            </Link>
          </div>
        </div>
      </section>

      {/* NOTICIAS */}
      <SeccionNoticias />


      {/* PRODUCTOS DESTACADOS */}
      <SeccionProductos />

      {/* FAQ breve / CTA final */}
      <section className="mt-24 mb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-light p-6">
            <h3 className="text-lg font-bold">¿Para quién es?</h3>
            <p className="mt-3 text-muted-foreground">
              Visitantes que quieren conocer el proyecto, <strong>docentes</strong> que buscan
              recursos y <strong>compradores</strong> (escuelas, instituciones o particulares) que
              desean adquirir el kit o piezas.
            </p>
          </div>
          <div className="rounded-xl border border-light p-6">
            <h3 className="text-lg font-bold">¿Cómo se compra?</h3>
            <p className="mt-3 text-muted-foreground">
              Seleccionás productos, confirmás tus datos y el sistema genera una
              <strong> orden por WhatsApp</strong> con tu pedido y datos de facturación. Luego
              coordinamos el pago por ese medio.
            </p>
          </div>
          <div className="rounded-xl border border-light p-6">
            <h3 className="text-lg font-bold">Idiomas</h3>
            <p className="mt-3 text-muted-foreground">
              La plataforma está disponible en <strong>español</strong>, <strong>portugués</strong> e
              <strong> inglés</strong> para facilitar su uso en distintos países.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
