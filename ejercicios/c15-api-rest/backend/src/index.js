const express = require('express')
const cors = require('cors')
require('dotenv').config()

const libroRoutes = require('./routes/libro.routes')
const autorRoutes = require('./routes/autor.routes')

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

app.use('/api/libros', libroRoutes)
app.use('/api/autores', autorRoutes)

app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`)
})