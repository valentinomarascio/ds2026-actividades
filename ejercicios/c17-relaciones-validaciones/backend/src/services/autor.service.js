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
  return prisma.autor.update({
    where: { id },
    data
  })
}

async function remove(id) {
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