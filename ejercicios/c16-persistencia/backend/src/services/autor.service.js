const prisma = require('../config/prisma')

async function findAll() {
  return prisma.autor.findMany()
}

async function findById(id) {
  return prisma.autor.findUnique({
    where: { id }
  })
}

async function create(data) {
  return prisma.autor.create({
    data
  })
}

async function update(id, data) {
  const autor = await prisma.autor.findUnique({
    where: { id }
  })

  if (!autor) {
    return null
  }

  return prisma.autor.update({
    where: { id },
    data
  })
}

async function remove(id) {
  const autor = await prisma.autor.findUnique({
    where: { id }
  })

  if (!autor) {
    return false
  }

  await prisma.autor.delete({
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