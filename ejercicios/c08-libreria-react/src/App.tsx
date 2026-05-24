import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LibroCard from './components/LibroCard'

const libros = [
  { id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', imagen: 'https://covers.openlibrary.org/b/id/8739161-M.jpg' },
  { id: 2, titulo: 'El principito', autor: 'Antoine de Saint-Exupéry', imagen: 'https://covers.openlibrary.org/b/id/8227823-M.jpg' },
  { id: 3, titulo: '1984', autor: 'George Orwell', imagen: 'https://covers.openlibrary.org/b/id/7222246-M.jpg' },
  { id: 4, titulo: 'Don Quijote', autor: 'Miguel de Cervantes', imagen: 'https://covers.openlibrary.org/b/id/8351988-M.jpg' },
  { id: 5, titulo: 'Harry Potter', autor: 'J.K. Rowling', imagen: 'https://covers.openlibrary.org/b/id/9255566-M.jpg' },
  { id: 6, titulo: 'El alquimista', autor: 'Paulo Coelho', imagen: 'https://covers.openlibrary.org/b/id/8259414-M.jpg' },
]

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Hero */}
      <div className="py-5 text-white text-center" style={{ backgroundColor: '#0a1628' }}>
        <div className="container">
          <h1 className="display-4 fw-bold">Bienvenido a Libreria VM</h1>
          <p className="lead">Descubrí los libros que no sabias que necesitabas</p>
          <a href="#" className="btn btn-lg" style={{ backgroundColor: '#1a3a6b', borderColor: '#1a3a6b', color: 'white' }}>
            Ver catálogo
          </a>
        </div>
      </div>

      {/* Libros destacados */}
      <div className="container my-5" style={{ flex: 1 }}>
        <h2 className="mb-4">Libros destacados</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {libros.map(libro => (
            <LibroCard
              key={libro.id}
              titulo={libro.titulo}
              autor={libro.autor}
              imagen={libro.imagen}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App