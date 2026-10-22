import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

type PrivateRouteProps = {
  children: React.ReactNode
  rol?: 'ADMIN' | 'CLIENTE'
}

function PrivateRoute({ children, rol }: PrivateRouteProps) {
  const { cargando, estaAutenticado, tieneRol } = useAuth()

  if (cargando) {
    return <p className="text-center mt-5">Cargando...</p>
  }

  if (!estaAutenticado) {
    return <Navigate to="/login" replace />
  }

  if (rol && !tieneRol(rol)) {
    return <Navigate to="/sin-permiso" replace />
  }

  return children
}

export default PrivateRoute