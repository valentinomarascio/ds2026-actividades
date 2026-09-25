const TOKEN_KEY = 'token'

export function obtenerToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export function guardarToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token)
}

export function eliminarToken() {
  localStorage.removeItem(TOKEN_KEY)
}
