import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function Header() {
  const { usuario, logout, tieneRol } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <Navbar style={{ backgroundColor: '#0a1628' }} expand="lg">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ color: '#fff', fontWeight: 700 }}
        >
          📚 Libreria VM
        </Navbar.Brand>

        <Nav className="ms-auto align-items-center">
          <Nav.Link
            as={Link}
            to="/"
            style={{ color: '#94a3b8' }}
          >
            Inicio
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/catalogo"
            style={{ color: '#94a3b8' }}
          >
            Catálogo
          </Nav.Link>

          {tieneRol('ADMIN') && (
            <Nav.Link
              as={Link}
              to="/libros/nuevo"
              style={{ color: '#94a3b8' }}
            >
              Nuevo Libro
            </Nav.Link>
          )}

          {usuario ? (
            <>
              <Navbar.Text
                className="ms-3"
                style={{ color: '#fff' }}
              >
                {usuario.nombre} ({usuario.rol})
              </Navbar.Text>

              <Button
                variant="outline-light"
                size="sm"
                className="ms-3"
                onClick={handleLogout}
              >
                Cerrar sesión
              </Button>
            </>
          ) : (
            <Nav.Link
              as={Link}
              to="/login"
              style={{ color: '#94a3b8' }}
            >
              Iniciar sesión
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header