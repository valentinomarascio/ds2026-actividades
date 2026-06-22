import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import LibroDetalle from './pages/LibroDetalle'
import LibroNuevo from './pages/LibroNuevo'

import type { Libro } from './types/libro'

function App() {
  const [libros, setLibros] = useState<Libro[]>([
    {
      id: 1,
      titulo: 'Cien años de soledad',
      autor: 'Gabriel García Márquez',
      imagen: 'https://covers.openlibrary.org/b/id/8739161-M.jpg',
      precio: 10000,
      disponible: true,
    },
    {
      id: 2,
      titulo: 'El principito',
      autor: 'Antoine de Saint-Exupéry',
      imagen: 'https://covers.openlibrary.org/b/id/8227823-M.jpg',
      precio: 8000,
      disponible: true,
    },
    {
      id: 3,
      titulo: '1984',
      autor: 'George Orwell',
      imagen: 'https://covers.openlibrary.org/b/id/7222246-M.jpg',
      precio: 12000,
      disponible: true,
    },
  ])

  const agregarLibro = (nuevo: Libro) => {
    setLibros([...libros, nuevo])
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/catalogo"
          element={<Catalogo libros={libros} />}
        />

        <Route path="/libros/:id" element={<LibroDetalle />} />

        <Route
          path="/libros/nuevo"
          element={<LibroNuevo onAgregar={agregarLibro} />}
        />
      </Routes>
    </Layout>
  )
}

export default App