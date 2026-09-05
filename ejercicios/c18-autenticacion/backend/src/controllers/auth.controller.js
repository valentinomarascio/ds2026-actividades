const authService = require('../services/auth.service')

async function registrar(req, res) {
  const usuario = await authService.registrar(req.body)

  return res.status(201).json(usuario)
}

async function login(req, res) {
  const resultado = await authService.login(req.body)

  if (!resultado) {
    return res.status(401).json({
      error: 'Credenciales inválidas',
    })
  }

  return res.json(resultado)
}

module.exports = {
  registrar,
  login,
  yo,
}

function yo(req, res) {
  return res.json({
    usuario: req.usuario,
  })
}