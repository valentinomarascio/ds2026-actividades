import prisma from '../src/config/prisma'

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

const categorias = [
  { nombre: 'Novela' },
  { nombre: 'Clásico' },
  { nombre: 'Ficción' },
]

const libros = [
  {
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    imagen: 'https://covers.openlibrary.org/b/id/8739161-M.jpg',
    precio: 10000,
    disponible: true,
    cats: ['Novela', 'Clásico'],
  },
  {
    titulo: 'El principito',
    autor: 'Antoine de Saint-Exupéry',
    imagen: 'https://covers.openlibrary.org/b/id/8227823-M.jpg',
    precio: 8000,
    disponible: true,
    cats: ['Ficción', 'Clásico'],
  },
  {
    titulo: '1984',
    autor: 'George Orwell',
    imagen: 'https://covers.openlibrary.org/b/id/7222246-M.jpg',
    precio: 12000,
    disponible: true,
    cats: ['Novela', 'Clásico'],
  },
]

async function main() {
  await prisma.autor.createMany({ data: autores })
  await prisma.categoria.createMany({ data: categorias })

  for (const { autor, cats, ...datos } of libros) {
    await prisma.libro.create({
      data: {
        ...datos,
        autor: {
          connect: { nombre: autor },
        },
        categorias: {
          connect: cats.map((nombre) => ({ nombre })),
        },
      },
    })
  }
}

main()