import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { apiFetch } from '../services/api'

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .pipe(z.email('Email inválido')),
  password: z
    .string()
    .min(1, 'La contraseña es obligatoria'),
})

type LoginData = z.infer<typeof loginSchema>

type LoginResponse = {
  token: string
  usuario: {
    id: number
    email: string
    nombre: string
    rol: 'ADMIN' | 'CLIENTE'
  }
}

function Login() {
  const navigate = useNavigate()

  const [form, setForm] = useState<LoginData>({
    email: '',
    password: '',
  })

  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    const resultado = loginSchema.safeParse(form)

    if (!resultado.success) {
      setError(resultado.error.issues[0].message)
      return
    }

    try {
      setLoading(true)

      const respuesta = await apiFetch<LoginResponse>('/auth/login', {
        method: 'POST',
        body: JSON.stringify(resultado.data),
      })

      localStorage.setItem('token', respuesta.token)

      navigate('/catalogo')
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : 'Error al iniciar sesión'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container my-5" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4">Iniciar sesión</h2>

      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>

          <input
            id="password"
            name="password"
            type="password"
            className="form-control"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={loading}
        >
          {loading ? 'Ingresando...' : 'Ingresar'}
        </button>
      </form>
    </div>
  )
}

export default Login