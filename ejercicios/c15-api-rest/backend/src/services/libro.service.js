let libros = [
  {
    id: 1,
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    imagen: 'https://covers.openlibrary.org/b/id/8739161-M.jpg',
    precio: 10000,
    disponible: true
  },
  {
    id: 2,
    titulo: 'El principito',
    autor: 'Antoine de Saint-Exupéry',
    imagen: 'https://covers.openlibrary.org/b/id/8227823-M.jpg',
    precio: 8000,
    disponible: true
  },
  {
    id: 3,
    titulo: '1984',
    autor: 'George Orwell',
    imagen: 'https://covers.openlibrary.org/b/id/7222246-M.jpg',
    precio: 12000,
    disponible: true
  }
]

function findAll() {
  return libros
}

function findById(id) {
  return libros.find((libro) => libro.id === id)
}

function create(data) {
  const nuevoLibro = {
    id: Date.now(),
    ...data
  }

  libros.push(nuevoLibro)

  return nuevoLibro
}

function update(id, data) {
  const index = libros.findIndex((libro) => libro.id === id)

  if (index === -1) {
    return null
  }

  libros[index] = {
    ...libros[index],
    ...data,
    id
  }

  return libros[index]
}

function remove(id) {
  const index = libros.findIndex((libro) => libro.id === id)

  if (index === -1) {
    return false
  }

  libros.splice(index, 1)

  return true
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
}