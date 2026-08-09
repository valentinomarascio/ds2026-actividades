const libroService = require('../services/libro.service')

function getAll(req, res) {
  const libros = libroService.findAll()

  return res.status(200).json(libros)
}

function getById(req, res) {
  const id = Number(req.params.id)

  const libro = libroService.findById(id)

  if (!libro) {
    return res.status(404).json({
      error: 'Libro no encontrado'
    })
  }

  return res.status(200).json(libro)
}

function create(req, res) {
  const nuevoLibro = libroService.create(req.body)

  return res.status(201).json(nuevoLibro)
}

function update(req, res) {
  const id = Number(req.params.id)

  const libroActualizado = libroService.update(id, req.body)

  if (!libroActualizado) {
    return res.status(404).json({
      error: 'Libro no encontrado'
    })
  }

  return res.status(200).json(libroActualizado)
}

function remove(req, res) {
  const id = Number(req.params.id)

  const eliminado = libroService.remove(id)

  if (!eliminado) {
    return res.status(404).json({
      error: 'Libro no encontrado'
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