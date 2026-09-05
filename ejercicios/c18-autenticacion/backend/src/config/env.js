function obligatorio(nombre) {
  const valor = process.env[nombre]

  if (!valor) {
    throw new Error(`Falta ${nombre} en el .env`)
  }

  return valor
}

const JWT_SECRET = obligatorio('JWT_SECRET')
const JWT_EXPIRES_IN = '2h'
const SALT_ROUNDS = 10

module.exports = {
  JWT_SECRET,
  JWT_EXPIRES_IN,
  SALT_ROUNDS
}