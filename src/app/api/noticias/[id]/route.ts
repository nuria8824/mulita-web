import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

// GET: traer una noticia por ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const noticia = await prisma.noticia.findUnique({
      where: { id: Number(id) },
    });

    if (!noticia) {
      return NextResponse.json({ error: "Noticia no encontrada" }, { status: 404 });
    }

    return NextResponse.json({ noticia });
  } catch (error) {
    console.error("Error fetching noticia:", error);
    return NextResponse.json({ error: "Error al obtener noticia" }, { status: 500 });
  }
}

// PATCH: editar una noticia existente
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  requireAdmin(req);

  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();
  if (!id) {
    return NextResponse.json({ error: "ID de noticia es requerido" }, { status: 400 });
  }

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

  const noticia = await prisma.noticia.update({
    where: { id: Number(id) },
    data: { titulo, autor, introduccion, descripcion, imagenPrincipal, archivo },
  });

  return NextResponse.json({ noticia });
}

// DELETE: eliminar una noticia
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const user = requireAdmin(req);
  
  const { id } = params;

  await prisma.noticia.delete({
    where: { id: Number(id) },
  });

  return NextResponse.json({ message: "Noticia eliminada correctamente" });
}
