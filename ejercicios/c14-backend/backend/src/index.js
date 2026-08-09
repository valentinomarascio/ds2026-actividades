const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    mensaje: 'API de librería funcionando con Docker',
    estado: 'ok'
  })
})

app.get('/health', (req, res) => {
  res.json({
    api: 'ok',
    db: 'postgres configurado por Docker Compose'
  })
})

app.get('/libros', (req, res) => {
  const libros = [
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

  res.json(libros)
})

app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`)
})
