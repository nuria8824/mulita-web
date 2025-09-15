"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CrearNoticiaPage() {
  const router = useRouter();
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [introduccion, setIntroduccion] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagenPrincipal, setImagenPrincipal] = useState<File | null>(null);
  const [archivo, setArchivo] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("autor", autor);
    formData.append("introduccion", introduccion);
    formData.append("descripcion", descripcion);
    if (archivo) formData.append("archivo", archivo);

    if (!imagenPrincipal) {
      alert("La imagen principal es obligatoria.");
      return;
    }
    formData.append("imagenPrincipal", imagenPrincipal);

    if (!imagenPrincipal) {
      alert("La imagen principal es obligatoria.");
      return;
    }

    const res = await fetch("/api/noticias", {
      method: "POST",
      body: formData,
      credentials: "include"
    });

    if (res.ok) {
      router.push("/noticias");
    } else {
      alert("Error creando noticia");
    }
  };

  return (
    <div className="w-full bg-white min-h-screen flex flex-col items-center py-12 px-4 text-[#003c71]">
      <div className="w-full max-w-3xl flex flex-col gap-6">
        {/* Encabezado */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-semibold text-black">Crear Nueva Noticia</h1>
          <p className="text-base text-[#003c71]">Introduce los datos</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-white p-6 rounded-lg shadow-md border border-gray-200"
        >
          {/* Título */}
          <div>
            <label className="block text-lg font-semibold mb-2">Título</label>
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Título"
              required
            />
          </div>

          {/* Autor */}
          <div>
            <label className="block text-lg font-semibold mb-2">Autor</label>
            <input
              type="text"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
              className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Autor"
              required
            />
          </div>

          {/* Introducción */}
          <div>
            <label className="block text-lg font-semibold mb-2">Introducción</label>
            <textarea
              value={introduccion}
              onChange={(e) => setIntroduccion(e.target.value)}
              className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 h-28 resize-none focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Introducción"
              required
            />
          </div>

          {/* Imagen principal */}
          <div>
            <label className="block text-lg font-semibold mb-2">Imagen Principal</label>
            <input
              type="file"
              placeholder="Imagen Principal"
              onChange={(e) => setImagenPrincipal(e.target.files?.[0] || null)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 cursor-pointer text-gray-600"
              accept="image/*"
              required
            />
          </div>

          {/* Descripción */}
          <div>
            <label className="block text-lg font-semibold mb-2">Descripción</label>
            <textarea
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 h-36 resize-none focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Descripción"
              required
            />
          </div>

          {/* Archivos/Imágenes extra */}
          <div>
            <label className="block text-lg font-semibold mb-2">Archivos/Imágenes</label>
            <input
              type="file"
              placeholder="Archivos/Imágenes"
              onChange={(e) => setArchivo(e.target.files?.[0] || null)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 cursor-pointer text-gray-600"
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full h-12 bg-[#003c71] text-white font-semibold rounded-md shadow-md hover:bg-[#00264d] transition"
          >
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
}
