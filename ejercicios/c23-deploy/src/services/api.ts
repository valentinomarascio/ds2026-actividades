import { eliminarToken, obtenerToken } from './sesion'
const API_URL = import.meta.env.VITE_API_URL

type ApiErrorResponse = {
  error?: string
  mensaje?: string
}
export class ApiError extends Error {
  status: number

  constructor(mensaje: string, status: number) {
    super(mensaje)
    this.name = 'ApiError'
    this.status = status
  }
}

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = obtenerToken()

  const headers = new Headers(options.headers)

  if (!headers.has('Content-Type') && options.body) {
    headers.set('Content-Type', 'application/json')
  }

  if (token) {
    headers.set('Authorization', `Bearer ${token}`)
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  })

  if (!response.ok) {
  let mensaje = `Error ${response.status}`

  try {
    const data: ApiErrorResponse = await response.json()
    mensaje = data.error || data.mensaje || mensaje
  } catch {
    // Si la respuesta no viene en JSON, conservamos el mensaje genérico.
  }

  if (response.status === 401) {
    eliminarToken()
    window.dispatchEvent(new Event('sesion-expirada'))
  }

  throw new ApiError(mensaje, response.status)
}

  if (response.status === 204) {
    return undefined as T
  }

  return response.json() as Promise<T>
}
