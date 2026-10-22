const libroService = require('../services/libro.service')

async function getAll(req, res) {
  const libros = await libroService.findAll()

  return res.status(200).json(libros)
}

async function getById(req, res) {
  const id = Number(req.params.id)

  const libro = await libroService.findById(id)

  if (!libro) {
    return res.status(404).json({
      error: 'Libro no encontrado'
    })
  }

  return res.status(200).json(libro)
}

async function create(req, res) {
  const nuevoLibro = await libroService.create(req.body)

  return res.status(201).json(nuevoLibro)
}

async function update(req, res) {
  const id = Number(req.params.id)

  const libroActualizado = await libroService.update(id, req.body)

  if (!libroActualizado) {
    return res.status(404).json({
      error: 'Libro no encontrado'
    })
  }

  return res.status(200).json(libroActualizado)
}

async function remove(req, res) {
  const id = Number(req.params.id)

  const eliminado = await libroService.remove(id)

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