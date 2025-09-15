import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyPassword, signToken } from "@/lib/auth";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  contrasena: z.string().min(6),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, contrasena } = loginSchema.parse(body);

    const user = await prisma.usuario.findUnique({ where: { email } });
    if (!user) return NextResponse.json({ success: false }, { status: 401 });

    const valid = await verifyPassword(user.contrasena, contrasena);
    if (!valid) return NextResponse.json({ success: false }, { status: 401 });

    const token = signToken({ id: user.id, email: user.email, rol: user.rol });

    const res = NextResponse.json({ success: true, user: { id: user.id, email: user.email } });
    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 días
      path: "/",
    });

    return res;
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
}
