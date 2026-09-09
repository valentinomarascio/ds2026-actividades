function validate(schema) {
  return (req, _res, next) => {
    const resultado = schema.safeParse(req.body)

    if (!resultado.success) {
      return next(resultado.error)
    }

    req.body = resultado.data
    next()
  }
}

function validateParams(schema) {
  return (req, _res, next) => {
    const resultado = schema.safeParse(req.params)

    if (!resultado.success) {
      return next(resultado.error)
    }

    req.params = resultado.data
    next()
  }
}

module.exports = {
  validate,
  validateParams
}