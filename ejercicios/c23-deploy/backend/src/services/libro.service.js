const prisma = require('../config/prisma')

/**
 * @typedef {import('@prisma/client').Prisma.LibroGetPayload<{
 *   include: { autor: true }
 * }>} LibroConAutor
 */

/**
 * @typedef {import('@prisma/client').Prisma.LibroGetPayload<{
 *   include: { autor: true, categorias: true }
 * }>} LibroDetalle
 */

/**
 * @param {boolean|undefined} disponible
 * @returns {Promise<LibroConAutor[]>}
 */
async function findAll(disponible) {
  return prisma.libro.findMany({
    where: {
      disponible
    },
    include: {
      autor: true
    }
  })
}

/**
 * @param {number} id
 * @returns {Promise<LibroDetalle|null>}
 */
async function findById(id) {
  return prisma.libro.findUnique({
    where: { id },
    include: {
      autor: true,
      categorias: true
    }
  })
}

async function create(data) {
  const { categorias, ...datos } = data

  return prisma.libro.create({
    data: {
      ...datos,
      categorias: categorias
        ? {
            connect: categorias.map((id) => ({ id }))
          }
        : undefined
    },
    include: {
      autor: true,
      categorias: true
    }
  })
}

async function update(id, data) {
  const { categorias, ...datos } = data

  return prisma.libro.update({
    where: { id },
    data: {
      ...datos,
      categorias: categorias
        ? {
            set: categorias.map((id) => ({ id }))
          }
        : undefined
    },
    include: {
      autor: true,
      categorias: true
    }
  })
}

async function remove(id) {
  await prisma.libro.delete({
    where: { id }
  })

  return true
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
}