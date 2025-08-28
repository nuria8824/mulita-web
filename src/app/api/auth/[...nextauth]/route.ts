import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt", // Usamos JWT en lugar de sesiones en BD
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 7, // 7 días
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // 🔹 Buscar usuario en tu base de datos con Prisma
        const user = await prisma.usuario.findUnique({
          where: { email: credentials?.email },
        });

        if (!user) return null;

        // 🔹 Verificar contraseña (usa bcrypt)
        const validPassword = await bcrypt.compare(
          credentials!.password,
          user.contrasena
        );

        if (!validPassword) return null;

        // 🔹 Retornamos el usuario
        return { id: user.id, email: user.email, rol: user.rol };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.rol = user.rol;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.rol = token.rol;
      }
      return session;
    },
  },
  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
