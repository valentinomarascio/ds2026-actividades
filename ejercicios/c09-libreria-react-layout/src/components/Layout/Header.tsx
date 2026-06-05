import { Navbar, Nav, Container } from 'react-bootstrap'

function Header() {
  return (
    <Navbar style={{ backgroundColor: '#0a1628' }} expand="lg">
      <Container>
        <Navbar.Brand href="#" style={{ color: '#fff', fontWeight: 700 }}>
          📚 Libreria VM
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#" style={{ color: '#94a3b8' }}>Inicio</Nav.Link>
          <Nav.Link href="#" style={{ color: '#94a3b8' }}>Catálogo</Nav.Link>
          <Nav.Link href="#" style={{ color: '#94a3b8' }}>Contacto</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header