import { useEffect } from 'react'
import type { Libro } from '../types/libro'
import LibroCard from '../components/LibroCard'

const libros: Libro[] = [
  { id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', imagen: 'https://covers.openlibrary.org/b/id/8739161-M.jpg', precio: 10000, disponible: true },
  { id: 2, titulo: 'El principito', autor: 'Antoine de Saint-Exupéry', imagen: 'https://covers.openlibrary.org/b/id/8227823-M.jpg', precio: 8000, disponible: true },
  { id: 3, titulo: '1984', autor: 'George Orwell', imagen: 'https://covers.openlibrary.org/b/id/7222246-M.jpg', precio: 12000, disponible: true },
  { id: 4, titulo: 'Don Quijote', autor: 'Miguel de Cervantes', imagen: 'https://covers.openlibrary.org/b/id/8351988-M.jpg', precio: 9000, disponible: true },
  { id: 5, titulo: 'Harry Potter', autor: 'J.K. Rowling', imagen: 'https://covers.openlibrary.org/b/id/9255566-M.jpg', precio: 15000, disponible: false },
  { id: 6, titulo: 'El alquimista', autor: 'Paulo Coelho', imagen: 'https://covers.openlibrary.org/b/id/8259414-M.jpg', precio: 7000, disponible: true },
]

function Home() {
  useEffect(() => {
    document.title = 'Libreria VM'
  }, [])

  return (
    <div>
      <div className="py-5 text-white text-center" style={{ backgroundColor: '#0a1628' }}>
        <div className="container">
          <h1 className="display-4 fw-bold">Bienvenido a Libreria VM</h1>
          <p className="lead">Descubrí los libros que no sabias que necesitabas</p>
          <a href="#" className="btn btn-lg" style={{ backgroundColor: '#1a3a6b', color: 'white' }}>
            Ver catálogo
          </a>
        </div>
      </div>
      <div className="container my-5">
        <h2 className="mb-4">Libros destacados</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {libros.map(libro => (
            <LibroCard key={libro.id} id={libro.id} titulo={libro.titulo} autor={libro.autor} imagen={libro.imagen} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home