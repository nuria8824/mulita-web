// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  // Noticias breves (divulgación pública basada en la ERS)
  const posts = [
    {
      id: 1,
      title: "¿Qué es Mulita?",
      excerpt:
        "Un robot educativo impreso en 3D para aprender robótica en primaria y secundaria, dentro de una plataforma web con info, comunidad y tienda.",
      date: "Conocé el proyecto",
    },
    {
      id: 2,
      title: "Comunidad docente",
      excerpt:
        "Registrate para subir actividades, organizar recursos por materias y niveles, comentar y dar “me gusta”. Colaboramos entre escuelas.",
      date: "Únete",
    },
    {
      id: 3,
      title: "Multilenguaje",
      excerpt:
        "La web está pensada para Argentina, Brasil y EE. UU.: disponible en español, portugués e inglés para una comunidad internacional.",
      date: "Idiomas",
    },
  ];

  // Productos destacados (muestra pública)
  const products = [
    { id: 1, name: "Kit Educativo Mulita (completo)", price: "89.00" },
    { id: 2, name: "Piezas individuales (chasis, ruedas, etc.)", price: "Desde 5.00" },
    { id: 3, name: "Sensores y accesorios compatibles", price: "39.00" },
    { id: 4, name: "Repuestos rápidos", price: "12.00" },
  ];

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
                <Link
                  href="/comunidad"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary text-white px-5 py-3 font-semibold shadow-sm hover:brightness-110"
                >
                  Comunidad <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/tienda"
                  className="inline-flex items-center rounded-xl bg-secondary text-secondary-foreground px-5 py-3 font-semibold ring-1 ring-[color:var(--uap-yellow)] hover:brightness-95"
                >
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
          <div className="rounded-2xl border border-border p-6">
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

          <div className="rounded-2xl border border-border p-6">
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

          <div className="rounded-2xl border border-border p-6">
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
      <section className="mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center">Noticias</h2>
          <p className="text-center text-muted-foreground mt-2">
            Comunidad, experiencias en escuelas y mejoras de la plataforma.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article
                key={p.id}
                className="rounded-xl border border-border bg-card p-5 hover:shadow-sm transition"
              >
                <div className="aspect-video rounded-lg bg-muted/70 grid place-items-center text-sm text-muted-foreground">
                  📄
                </div>
                <h3 className="mt-4 font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-3">
                  {p.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{p.date}</span>
                  <Link href={`/noticias/${p.id}`} className="text-primary font-medium">
                    Leer más →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/noticias"
              className="rounded-lg bg-primary text-white px-4 py-2 font-semibold hover:brightness-110"
            >
              Ver todas las noticias
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section className="mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center">
            Productos Destacados
          </h2>
          <p className="text-center text-muted-foreground mt-2">
            Todo lo necesario para implementar Mulita en tu institución.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div
                key={p.id}
                className="rounded-xl border border-border bg-card p-5 flex flex-col"
              >
                <div className="aspect-square rounded-lg bg-muted/70 grid place-items-center text-sm text-muted-foreground">
                  🛒
                </div>
                <div className="mt-4 flex-1">
                  <h3 className="font-semibold">{p.name}</h3>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-bold">${p.price}</span>
                  <div className="flex gap-2">
                    <button className="rounded-md bg-secondary text-secondary-foreground px-3 py-1.5 text-sm font-semibold ring-1 ring-[color:var(--uap-yellow)]">
                      Comprar
                    </button>
                    <button className="rounded-md px-3 py-1.5 text-sm font-semibold border border-border">
                      Detalle
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/tienda"
              className="rounded-lg bg-primary text-white px-4 py-2 font-semibold hover:brightness-110"
            >
              Ver todos los productos
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ breve / CTA final */}
      <section className="mt-24 mb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-border p-6">
            <h3 className="text-lg font-bold">¿Para quién es?</h3>
            <p className="mt-3 text-muted-foreground">
              Visitantes que quieren conocer el proyecto, <strong>docentes</strong> que buscan
              recursos y <strong>compradores</strong> (escuelas, instituciones o particulares) que
              desean adquirir el kit o piezas.
            </p>
          </div>
          <div className="rounded-xl border border-border p-6">
            <h3 className="text-lg font-bold">¿Cómo se compra?</h3>
            <p className="mt-3 text-muted-foreground">
              Seleccionás productos, confirmás tus datos y el sistema genera una
              <strong> orden por WhatsApp</strong> con tu pedido y datos de facturación. Luego
              coordinamos el pago por ese medio.
            </p>
          </div>
          <div className="rounded-xl border border-border p-6">
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
