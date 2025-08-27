// src/app/api/register/route.ts
import { NextResponse } from "next/server";
import { database } from "@/app/db/connections";
import { randomUUID } from "crypto";
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
      docente,
      institucion,
      pais,
      provincia,
      ciudad,
    } = body;

    if (!nombre || !apellido || !email || !contrasena) {
      return NextResponse.json(
        { success: false, message: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(contrasena, 10);
    const id = randomUUID();

    await database.run(
      `INSERT INTO usuarios 
      (id, nombre, apellido, email, telefono, contrasena, docente, institucion, pais, provincia, ciudad) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        id,
        nombre,
        apellido,
        email,
        telefono || null,
        hashedPassword,
        docente ? 1 : 0,
        institucion || null,
        pais || null,
        provincia || null,
        ciudad || null,
      ]
    );

    return NextResponse.json({ success: true, message: "Usuario creado correctamente" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Error al crear el usuario" }, { status: 500 });
  }
}
