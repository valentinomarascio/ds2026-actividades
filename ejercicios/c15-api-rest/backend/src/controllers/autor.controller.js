const autorService = require('../services/autor.service')

function getAll(req, res) {
  const autores = autorService.findAll()

  return res.status(200).json(autores)
}

function getById(req, res) {
  const id = Number(req.params.id)

  const autor = autorService.findById(id)

  if (!autor) {
    return res.status(404).json({
      error: 'Autor no encontrado'
    })
  }

  return res.status(200).json(autor)
}

function create(req, res) {
  const nuevoAutor = autorService.create(req.body)

  return res.status(201).json(nuevoAutor)
}

function update(req, res) {
  const id = Number(req.params.id)

  const autorActualizado = autorService.update(id, req.body)

  if (!autorActualizado) {
    return res.status(404).json({
      error: 'Autor no encontrado'
    })
  }

  return res.status(200).json(autorActualizado)
}

function remove(req, res) {
  const id = Number(req.params.id)

  const eliminado = autorService.remove(id)

  if (!eliminado) {
    return res.status(404).json({
      error: 'Autor no encontrado'
    })
  }

  return res.status(204).send()
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}