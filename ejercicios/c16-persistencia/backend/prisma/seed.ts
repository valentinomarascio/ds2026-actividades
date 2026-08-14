import { prisma } from '../src/config/prisma'

const libros = [
  {
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    imagen: 'https://covers.openlibrary.org/b/id/8739161-M.jpg',
    precio: 10000,
    disponible: true,
  },
  {
    titulo: 'El principito',
    autor: 'Antoine de Saint-Exupéry',
    imagen: 'https://covers.openlibrary.org/b/id/8227823-M.jpg',
    precio: 8000,
    disponible: true,
  },
  {
    titulo: '1984',
    autor: 'George Orwell',
    imagen: 'https://covers.openlibrary.org/b/id/7222246-M.jpg',
    precio: 12000,
    disponible: true,
  },
]

const autores = [
  {
    nombre: 'Gabriel García Márquez',
    nacionalidad: 'Colombia',
  },
  {
    nombre: 'Antoine de Saint-Exupéry',
    nacionalidad: 'Francia',
  },
  {
    nombre: 'George Orwell',
    nacionalidad: 'Reino Unido',
  },
]

async function main() {
  await prisma.libro.createMany({ data: libros })
  await prisma.autor.createMany({ data: autores })
}

main()