const express = require('express')
const cors = require('cors')
require('dotenv').config()

const authRoutes = require('./routes/auth.routes')
const categoriaRoutes = require('./routes/categoria.routes')
const libroRoutes = require('./routes/libro.routes')
const autorRoutes = require('./routes/autor.routes')
const { errorHandler } = require('./middlewares/error.middleware')

const app = express()

const PORT = process.env.PORT || 3000

const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:5173'
]

app.use(cors({
  origin: allowedOrigins
}))

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

app.use('/api/libros', libroRoutes)
app.use('/api/autores', autorRoutes)
app.use('/api/categorias', categoriaRoutes)
app.use('/api/auth', authRoutes)

app.use((req, res) => {
  return res.status(404).json({
    error: 'Ruta no encontrada',
  })
})

app.use(errorHandler)

module.exports = app
