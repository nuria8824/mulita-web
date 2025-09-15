"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { setUser } = useUser();

  const onContinuarClick = async () => {
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, contrasena }),
        credentials: "include", // ✅ Importante para enviar cookies
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError("Credenciales incorrectas");
        return;
      }

      // Actualizamos el contexto del usuario
      setUser(data.user);

      // Redirigimos al inicio
      router.push("/");
    } catch (err) {
      console.error(err);
      setError("Error en el servidor");
    }
  };

  const inputClass =
    "w-full shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-lg border border-gray-300 h-10 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600";

  const buttonClass =
    "w-full bg-[#003c71] text-white rounded-lg h-10 flex items-center justify-center cursor-pointer hover:bg-blue-800";

  return (
    <div className="w-full bg-white flex flex-col items-center justify-start font-Inter text-base text-black pt-24 pb-6">
      <div className="w-96 flex flex-col items-center justify-start gap-6">
        <div className="flex flex-col items-center gap-1 text-center text-black">
          <h1 className="text-2xl font-semibold leading-[150%] tracking-tight">
            Iniciar Sesión
          </h1>
          <p className="text-base text-[#003c71] leading-[150%]">
            Introduce tu email y contraseña
          </p>
        </div>

        <div className="flex flex-col gap-2 w-full text-[#003c71]">
          <label className="inline-block w-52 font-bold">Correo electrónico</label>
          <input
            type="email"
            placeholder="usuario@mulita.com"
            className={inputClass}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="inline-block w-full font-bold mt-2">Contraseña</label>
          <input
            type="password"
            placeholder="contraseña"
            className={inputClass}
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <div className="w-full">
          <button
            type="button"
            className={buttonClass}
            onClick={onContinuarClick}
            disabled={!email || !contrasena}
          >
            <span className="font-medium text-white leading-[150%]">
              Continuar
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
