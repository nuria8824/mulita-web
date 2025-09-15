import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

// GET: traer todas las noticias ordenadas por fecha ASC
export async function GET() {
  try {
    const noticias = await prisma.noticia.findMany({
      orderBy: { createdAt: "asc" },
    });
    return NextResponse.json({ noticias });
  } catch (error) {
    console.error("Error fetching noticias:", error);
    return NextResponse.json({ error: "Error al obtener noticias" }, { status: 500 });
  }
}

// POST: crear una nueva noticia
export async function POST(req: NextRequest) {
  try {
    const user = requireAdmin(req);

    const formData = await req.formData();
    const titulo = formData.get("titulo")?.toString() || "";
    const autor = formData.get("autor")?.toString() || "";
    const introduccion = formData.get("introduccion")?.toString() || "";
    const descripcion = formData.get("descripcion")?.toString() || "";
    const imagenPrincipalFile = formData.get("imagenPrincipal") as File | null;
    const archivoFile = formData.get("archivo") as File | null;

    if (!titulo || !autor || !introduccion || !descripcion || !imagenPrincipalFile) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    const imagenPrincipal = imagenPrincipalFile?.name;
    const archivo = archivoFile?.name || null;

    const noticia = await prisma.noticia.create({
      data: {
        titulo,
        descripcion,
        imagenPrincipal,
        autor,
        introduccion,
        archivo,
      },
    });
    return NextResponse.json({ noticia }, { status: 201 });
  } catch (error) {
    console.error("Error creando noticia:", error);
    return NextResponse.json({ error: "Error al crear noticia" }, { status: 500 });
  }
}