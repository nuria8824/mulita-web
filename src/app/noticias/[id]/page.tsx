"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Noticia {
  id: number;
  titulo: string;
  autor: string;
  introduccion: string;
  descripcion: string;
  imagenPrincipal: string;
  archivo?: string;
  createdAt: string;
}

export default function NoticiaDetalle() {
  const params = useParams();
  const [noticia, setNoticia] = useState<Noticia | null>(null);
  const [loading, setLoading] = useState(true);

  const formatDate = (dateString: string) => {
    if (!dateString) return "Sin fecha";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Sin fecha";
    return date.toLocaleDateString();
  }

  useEffect(() => {
    const fetchNoticia = async () => {
      try {
        const res = await fetch(`/api/noticias/${params.id}`);
        if (res.ok) {
          const data = await res.json();
          setNoticia(data.noticia || data);
        } else {
          console.error("No se pudo cargar la noticia");
          setNoticia(null);
        }
      } catch (err) {
        console.error("Error cargando noticia:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNoticia();
  }, [params.id]);

  if (loading) return <div className="text-center py-10">Cargando noticia...</div>;
  if (!noticia) return <div className="text-center py-10">No se encontró la noticia</div>;

  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4 md:px-16 flex flex-col gap-6">
      <div className="shador-lg border border-gray-200 overflow-hidden flex flex-col gap-6 p-6 rounded-lg bg-white">
        <h1 className="text-4xl font-bold text-[#003c71]">{noticia.titulo}</h1>
        <p className="text-sm text-[#6d758f]">
          Por {noticia.autor} - {formatDate(noticia.createdAt)}
        </p>
        <p className="text-base text-gray-800">{noticia.introduccion}</p>
        <img
          src={noticia.imagenPrincipal}
          alt={noticia.titulo}
          className="w-full h-64 object-cover rounded-lg"
        />
        <p className="text-base text-gray-800">{noticia.descripcion}</p>
        {noticia.archivo && (
          <a
            href={noticia.archivo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Descargar archivo
          </a>
        )}
      </div>
    </div>
  );
}
