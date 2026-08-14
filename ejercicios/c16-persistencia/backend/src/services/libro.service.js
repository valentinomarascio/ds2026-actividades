const prisma = require('../config/prisma')

async function findAll() {
  return prisma.libro.findMany()
}

async function findById(id) {
  return prisma.libro.findUnique({
    where: { id }
  })
}

async function create(data) {
  return prisma.libro.create({
    data
  })
}

async function update(id, data) {
  try {
    return await prisma.libro.update({
      where: { id },
      data
    })
  } catch (error) {
    return null
  }
}

async function remove(id) {
  try {
    await prisma.libro.delete({
      where: { id }
    })

    return true
  } catch (error) {
    return false
  }
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
}