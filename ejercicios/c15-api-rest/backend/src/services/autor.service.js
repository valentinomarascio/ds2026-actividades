let autores = [
  {
    id: 1,
    nombre: 'Gabriel García Márquez'
  },
  {
    id: 2,
    nombre: 'Antoine de Saint-Exupéry'
  },
  {
    id: 3,
    nombre: 'George Orwell'
  }
]

function findAll() {
  return autores
}

function findById(id) {
  return autores.find((autor) => autor.id === id)
}

function create(data) {
  const nuevoAutor = {
    id: Date.now(),
    ...data
  }

  autores.push(nuevoAutor)

  return nuevoAutor
}

function update(id, data) {
  const index = autores.findIndex((autor) => autor.id === id)

  if (index === -1) {
    return null
  }

  autores[index] = {
    ...autores[index],
    ...data,
    id
  }

  return autores[index]
}

function remove(id) {
  const index = autores.findIndex((autor) => autor.id === id)

  if (index === -1) {
    return false
  }

  autores.splice(index, 1)

  return true
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
}