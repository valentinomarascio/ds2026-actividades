const autorService = require('../services/autor.service')

async function getAll(req, res) {
  const autores = await autorService.findAll()

  return res.status(200).json(autores)
}

async function getById(req, res) {
  const id = Number(req.params.id)

  const autor = await autorService.findById(id)

  if (!autor) {
    return res.status(404).json({
      error: 'Autor no encontrado'
    })
  }

  return res.status(200).json(autor)
}

async function create(req, res) {
  const nuevoAutor = await autorService.create(req.body)

  return res.status(201).json(nuevoAutor)
}

async function update(req, res) {
  const id = Number(req.params.id)

  const autorActualizado = await autorService.update(id, req.body)

  if (!autorActualizado) {
    return res.status(404).json({
      error: 'Autor no encontrado'
    })
  }

  return res.status(200).json(autorActualizado)
}

async function remove(req, res) {
  const id = Number(req.params.id)

  const eliminado = await autorService.remove(id)

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