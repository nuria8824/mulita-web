// src/app/api/register/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // tu cliente Prisma
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      nombre,
      apellido,
      email,
      telefono,
      contrasena,
      docente, // checkbox para rol de docente
      rol, // enviamos el rol directamente desde el formulario
      institucion,
      pais,
      provincia,
      ciudad,
    } = body;

    // Validación básica
    if (!nombre || !apellido || !email || !telefono || !contrasena) {
      return NextResponse.json(
        { success: false, message: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    // Hasheo de contraseña
    const hashedPassword = await bcrypt.hash(contrasena, 10);

    // Crear usuario en la base de datos con Prisma
    const usuario = await prisma.usuario.create({
      data: {
        nombre,
        apellido,
        email,
        telefono: telefono || null,
        contrasena: hashedPassword,
        rol: docente ? "docente" : "usuario", // asignar rol basado en el checkbox
        institucion: institucion || null,
        pais: pais || null,
        provincia: provincia || null,
        ciudad: ciudad || null,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Usuario creado correctamente",
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        email: usuario.email,
        telefono: usuario.telefono,
        rol: usuario.rol,
      },
    });
  } catch (error: any) {
    console.error(error);

    // Manejo de error por email duplicado (Prisma)
    if (error.code === "P2002") {
      return NextResponse.json(
        { success: false, message: "El email ya está registrado" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Error al crear el usuario" },
      { status: 500 }
    );
  }
}
