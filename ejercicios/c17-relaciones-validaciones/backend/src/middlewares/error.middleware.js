const { ZodError } = require('zod')

function errorHandler(err, _req, res, _next) {
  if (err instanceof ZodError) {
    return res.status(400).json({
      error: 'Datos inválidos',
      detalles: err.issues
    })
  }

  if (err.code === 'P2002') {
    return res.status(409).json({
      error: 'El registro ya existe'
    })
  }

  if (err.code === 'P2025') {
    return res.status(404).json({
      error: 'Registro no encontrado'
    })
  }

  if (err.code === 'P2003') {
    return res.status(409).json({
      error: 'No se puede realizar la operación por una relación existente'
    })
  }

  console.error(err)

  return res.status(500).json({
    error: 'Error interno del servidor'
  })
}

module.exports = {
  errorHandler
}