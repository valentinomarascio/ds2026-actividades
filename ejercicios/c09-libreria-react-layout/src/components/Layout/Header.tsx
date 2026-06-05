import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar style={{ backgroundColor: '#0a1628' }} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: '#fff', fontWeight: 700 }}>
          📚 Libreria VM
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" style={{ color: '#94a3b8' }}>Inicio</Nav.Link>
          <Nav.Link as={Link} to="/catalogo" style={{ color: '#94a3b8' }}>Catálogo</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header