const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const prisma = require('../config/prisma')
const {
  SALT_ROUNDS,
  JWT_SECRET,
  JWT_EXPIRES_IN,
} = require('../config/env')

async function registrar(datos) {
  const hash = await bcrypt.hash(datos.password, SALT_ROUNDS)

  return prisma.usuario.create({
    data: {
      nombre: datos.nombre,
      email: datos.email,
      passwordHash: hash,
    },
    select: {
      id: true,
      email: true,
      nombre: true,
      rol: true,
    },
  })
}

async function login(datos) {
  const usuario = await prisma.usuario.findUnique({
    where: {
      email: datos.email,
    },
  })

  if (!usuario) {
    return null
  }

  const passwordValida = await bcrypt.compare(
    datos.password,
    usuario.passwordHash
  )

  if (!passwordValida) {
    return null
  }

  const token = jwt.sign(
    {
      id: usuario.id,
      rol: usuario.rol,
    },
    JWT_SECRET,
    {
      expiresIn: JWT_EXPIRES_IN,
    }
  )

  return {
    token,
    usuario: {
      id: usuario.id,
      email: usuario.email,
      nombre: usuario.nombre,
      rol: usuario.rol,
    },
  }
}

module.exports = {
  registrar,
  login,
}