"use client";

import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditarNoticiaPage() {
  const params = useParams();
  const router = useRouter();

  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [introduccion, setIntroduccion] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagenPrincipal, setImagenPrincipal] = useState<File | string | null>(null);
  const [archivo, setArchivo] = useState<File | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Cargar noticia existente
  useEffect(() => {
    const fetchNoticia = async () => {
      try {
        const res = await fetch(`/api/noticias/${params.id}`);
        if (!res.ok) throw new Error("Noticia no encontrada");
        const data = await res.json();
        const n = data.noticia;

        setTitulo(n.titulo);
        setAutor(n.autor);
        setIntroduccion(n.introduccion);
        setDescripcion(n.descripcion);
        setImagenPrincipal(n.imagenPrincipal);
        setArchivo(null);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNoticia();
  }, [params.id]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("titulo", titulo);
      formData.append("autor", autor);
      formData.append("introduccion", introduccion);
      formData.append("descripcion", descripcion);

      if (imagenPrincipal instanceof File) formData.append("imagenPrincipal", imagenPrincipal);
      if (archivo) formData.append("archivo", archivo);

      const res = await fetch(`/api/noticias/${params.id}`, {
        method: "PATCH",
        body: formData,
        credentials: "include",
      });

      if (!res.ok) throw new Error("Error actualizando noticia");

      router.push(`/noticias/${params.id}`);
    } catch (err) {
      console.error(err);
      alert("Error actualizando noticia");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <p className="text-center mt-10">Cargando noticia...</p>;

  return (
    <div className="w-full bg-white min-h-screen flex flex-col items-center py-12 px-4 text-[#003c71]">
      <div className="w-full max-w-3xl flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-semibold text-black">Editar Noticia</h1>
          <p className="text-base text-[#003c71]">Modifica los datos</p>
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
            {typeof imagenPrincipal === "string" && (
              <img src={imagenPrincipal} alt="Imagen actual" className="w-full h-48 object-cover rounded" />
            )}
            <input
              type="file"
              placeholder="Imagen Principal"
              onChange={(e) => setImagenPrincipal(e.target.files?.[0] || null)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 cursor-pointer text-gray-600"
              accept="image/*"
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
            {archivo && <p>Archivo seleccionado: {archivo.name}</p>}
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
            disabled={submitting}
            className="w-full h-12 bg-[#003c71] text-white font-semibold rounded-md shadow-md hover:bg-[#00264d] transition"
          >
            {submitting ? "Guardando..." : "Guardar cambios"}
          </button>
        </form>
      </div>
    </div>
  );
}
