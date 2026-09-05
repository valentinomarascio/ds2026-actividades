import bcrypt from 'bcrypt'
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

const usuarios = [
  {
    email: 'admin@libreria.test',
    nombre: 'Admin',
    rol: 'ADMIN' as const,
    password: 'Admin1234',
  },
  {
    email: 'cliente@libreria.test',
    nombre: 'Cliente',
    rol: 'CLIENTE' as const,
    password: 'Cliente1234',
  },
]

async function main() {
  await prisma.autor.createMany({
    data: autores,
    skipDuplicates: true,
  })

  await prisma.categoria.createMany({
    data: categorias,
    skipDuplicates: true,
  })

  for (const { autor, cats, ...datos } of libros) {
    const existente = await prisma.libro.findFirst({
      where: { titulo: datos.titulo },
    })

    if (!existente) {
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

  for (const { password, ...datos } of usuarios) {
    await prisma.usuario.upsert({
      where: { email: datos.email },
      update: {},
      create: {
        ...datos,
        passwordHash: await bcrypt.hash(password, 10),
      },
    })
  }
}

main()