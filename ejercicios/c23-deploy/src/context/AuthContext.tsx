import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

import { apiFetch } from '../services/api'
import {
  eliminarToken,
  guardarToken,
  obtenerToken,
} from '../services/sesion'

type Rol = 'ADMIN' | 'CLIENTE'

type Usuario = {
  id: number
  email: string
  nombre: string
  rol: Rol
}

type LoginResponse = {
  token: string
  usuario: Usuario
}

type AuthContextType = {
  usuario: Usuario | null
  cargando: boolean
  estaAutenticado: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  tieneRol: (rol: Rol) => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const manejarSesionExpirada = () => {
      setUsuario(null)
    }

    window.addEventListener('sesion-expirada', manejarSesionExpirada)

    return () => {
      window.removeEventListener('sesion-expirada', manejarSesionExpirada)
    }
  }, [])

    useEffect(() => {
      const recuperarSesion = async () => {
      const token = obtenerToken()

      if (!token) {
        setCargando(false)
        return
      }

      try {
        const usuarioActual = await apiFetch<Usuario>('/auth/yo')
        setUsuario(usuarioActual)
      } catch {
        eliminarToken()
        setUsuario(null)
      } finally {
        setCargando(false)
      }
    }

    recuperarSesion()
  }, [])

  const login = async (email: string, password: string) => {
    const respuesta = await apiFetch<LoginResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })

    guardarToken(respuesta.token)
    setUsuario(respuesta.usuario)
  }

  const logout = () => {
    eliminarToken()
    setUsuario(null)
  }

  const estaAutenticado = usuario !== null

  const tieneRol = (rol: Rol) => {
    return usuario?.rol === rol
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        cargando,
        estaAutenticado,
        login,
        logout,
        tieneRol,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider')
  }

  return context
}
