const categoriaService = require('../services/categoria.service')

async function getAll(req, res) {
  const categorias = await categoriaService.findAll()

  return res.status(200).json(categorias)
}

async function getById(req, res) {
  const id = Number(req.params.id)

  const categoria = await categoriaService.findById(id)

  if (!categoria) {
    return res.status(404).json({
      error: 'Categoría no encontrada'
    })
  }

  return res.status(200).json(categoria)
}

async function create(req, res) {
  const nuevaCategoria = await categoriaService.create(req.body)

  return res.status(201).json(nuevaCategoria)
}

async function update(req, res) {
  const id = Number(req.params.id)

  const categoriaActualizada = await categoriaService.update(id, req.body)

  return res.status(200).json(categoriaActualizada)
}

async function remove(req, res) {
  const id = Number(req.params.id)

  await categoriaService.remove(id)

  return res.status(204).send()
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}