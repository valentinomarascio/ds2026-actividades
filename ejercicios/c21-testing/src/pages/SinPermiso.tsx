import { Link } from 'react-router-dom'

function SinPermiso() {
  return (
    <div className="container my-5 text-center">
      <h2>Sin permiso</h2>

      <p className="mt-3">
        No tenés permisos para acceder a esta página.
      </p>

      <Link to="/catalogo" className="btn btn-primary mt-2">
        Volver al catálogo
      </Link>
    </div>
  )
}

export default SinPermiso