export type Noticia = {
    id: number;
    titulo: string;
    autor: string;
    fecha: Date;
    introduccion: string;
    imagenPrincipal: string;
    descripcion: string;
    imagenesOArchivos?: string[];
};

export type Producto = {
    id: number;
    nombre: string;
    descripcion: string;
    precio: string;
    imagen: string;
};

export type Usuario = {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    contraseñaHash: string;
    rol: 'superAdmin' | 'admin' | 'docente' | 'estudiante';
    institucion?: string;
    pais?: string;
    provincia?: string;
    ciudad?: string;
}
