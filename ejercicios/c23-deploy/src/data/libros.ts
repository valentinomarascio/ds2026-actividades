import type { Libro } from '../types/libro'

export const librosIniciales: Libro[] = [
  {
    id: 1,
    titulo: 'Cien años de soledad',
    autorId: 1,
    autor: {
      id: 1,
      nombre: 'Gabriel García Márquez',
      nacionalidad: 'Colombia',
    },
    imagen: 'https://covers.openlibrary.org/b/id/8739161-M.jpg',
    precio: 10000,
    disponible: true,
  },
  {
    id: 2,
    titulo: 'El principito',
    autorId: 2,
    autor: {
      id: 2,
      nombre: 'Antoine de Saint-Exupéry',
      nacionalidad: 'Francia',
    },
    imagen: 'https://covers.openlibrary.org/b/id/8227823-M.jpg',
    precio: 8000,
    disponible: true,
  },
]