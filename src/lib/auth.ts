import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

// Hash de contraseña
export const hashPassword = async (password: string) =>
  await bcrypt.hash(password, 10);

// Comparar contraseña
export const verifyPassword = async (hash: string, password: string) =>
  await bcrypt.compare(password, hash);

// Generar JWT
export const signToken = (payload: object) =>
  jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });

// Verificar JWT
export const verifyToken = (token: string) =>
  jwt.verify(token, JWT_SECRET);
