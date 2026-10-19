const prisma = require('../config/prisma')

async function findAll() {
  return prisma.categoria.findMany()
}

async function findById(id) {
  return prisma.categoria.findUnique({
    where: { id }
  })
}

async function create(data) {
  return prisma.categoria.create({
    data
  })
}

async function update(id, data) {
  return prisma.categoria.update({
    where: { id },
    data
  })
}

async function remove(id) {
  await prisma.categoria.delete({
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
