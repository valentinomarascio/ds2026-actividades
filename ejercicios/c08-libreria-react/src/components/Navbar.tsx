function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#0a1628' }}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <i className="bi bi-book-half me-2"></i>Libreria VM
        </a>
        <div className="navbar-nav ms-auto flex-row gap-3">
          <a className="nav-link active" href="#">Inicio</a>
          <a className="nav-link" href="#">Catálogo</a>
          <a className="nav-link" href="#">Contacto</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar