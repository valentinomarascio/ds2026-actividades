import type { Libro } from '../types/libro'
import LibroCard from '../components/LibroCard'

const libros: Libro[] = [
  { id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', imagen: 'https://covers.openlibrary.org/b/id/8739161-M.jpg' },
  { id: 2, titulo: 'El principito', autor: 'Antoine de Saint-Exupéry', imagen: 'https://covers.openlibrary.org/b/id/8227823-M.jpg' },
  { id: 3, titulo: '1984', autor: 'George Orwell', imagen: 'https://covers.openlibrary.org/b/id/7222246-M.jpg' },
  { id: 4, titulo: 'Don Quijote', autor: 'Miguel de Cervantes', imagen: 'https://covers.openlibrary.org/b/id/8351988-M.jpg' },
  { id: 5, titulo: 'Harry Potter', autor: 'J.K. Rowling', imagen: 'https://covers.openlibrary.org/b/id/9255566-M.jpg' },
  { id: 6, titulo: 'El alquimista', autor: 'Paulo Coelho', imagen: 'https://covers.openlibrary.org/b/id/8259414-M.jpg' },
]

function Catalogo() {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Catálogo completo</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {libros.map(libro => (
          <LibroCard key={libro.id} id={libro.id} titulo={libro.titulo} autor={libro.autor} imagen={libro.imagen} />
        ))}
      </div>
    </div>
  )
}

export default Catalogo