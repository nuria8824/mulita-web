import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/auth";
import { z } from "zod";

const registerSchema = z.object({
  nombre: z.string(),
  apellido: z.string(),
  email: z.string().email(),
  telefono: z.string().min(10).max(15),
  contrasena: z.string().min(6),
  rol: z.enum(["usuario", "docente"]),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = registerSchema.parse(body);

    const hashedPassword = await hashPassword(data.contrasena);

    const user = await prisma.usuario.create({
      data: { ...data, contrasena: hashedPassword },
    });

    return NextResponse.json({ success: true, user: { id: user.id, email: user.email } });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
}
