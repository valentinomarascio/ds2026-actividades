import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Alert,
  Button,
  Container,
  Form,
  Spinner,
} from 'react-bootstrap'

import { libroSchema } from '../schemas/libroSchema'
import { apiFetch } from '../services/api'

type Autor = {
  id: number
  nombre: string
  nacionalidad: string
}

function LibroNuevo() {
  const navigate = useNavigate()

  const [autores, setAutores] = useState<Autor[]>([])
  const [loadingAutores, setLoadingAutores] = useState(true)

  const [form, setForm] = useState({
    titulo: '',
    precio: '',
    imagen: '',
    autorId: '',
    disponible: true,
  })

  const [errores, setErrores] = useState<Record<string, string>>({})
  const [errorGeneral, setErrorGeneral] = useState<string | null>(null)
  const [guardando, setGuardando] = useState(false)

  useEffect(() => {
    const cargarAutores = async () => {
      try {
        const resultado = await apiFetch<Autor[]>('/autores')
        setAutores(resultado)
      } catch (e) {
        setErrorGeneral(
          e instanceof Error
            ? e.message
            : 'Error al cargar autores'
        )
      } finally {
        setLoadingAutores(false)
      }
    }

    cargarAutores()
  }, [])

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target

    const checked =
      type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : undefined

    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setErrores({})
    setErrorGeneral(null)

    const resultado = libroSchema.safeParse(form)

    if (!resultado.success) {
      const erroresNuevos: Record<string, string> = {}

      for (const issue of resultado.error.issues) {
        const campo = String(issue.path[0])

        if (!erroresNuevos[campo]) {
          erroresNuevos[campo] = issue.message
        }
      }

      setErrores(erroresNuevos)
      return
    }

    try {
      setGuardando(true)

      await apiFetch('/libros', {
        method: 'POST',
        body: JSON.stringify({
          ...resultado.data,
          categorias: [1],
        }),
      })

      navigate('/catalogo')
    } catch (e) {
      setErrorGeneral(
        e instanceof Error
          ? e.message
          : 'Error al crear el libro'
      )
    } finally {
      setGuardando(false)
    }
  }

  return (
    <Container
      style={{ maxWidth: 480 }}
      className="py-4"
    >
      <h2>Nuevo libro</h2>

      {errorGeneral && (
        <Alert variant="danger">
          {errorGeneral}
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Título</Form.Label>

          <Form.Control
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
            isInvalid={!!errores.titulo}
          />

          <Form.Control.Feedback type="invalid">
            {errores.titulo}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Autor</Form.Label>

          <Form.Select
            name="autorId"
            value={form.autorId}
            onChange={handleChange}
            isInvalid={!!errores.autorId}
            disabled={loadingAutores}
          >
            <option value="">
              {loadingAutores
                ? 'Cargando autores...'
                : 'Seleccionar autor'}
            </option>

            {autores.map((autor) => (
              <option
                key={autor.id}
                value={autor.id}
              >
                {autor.nombre}
              </option>
            ))}
          </Form.Select>

          <Form.Control.Feedback type="invalid">
            {errores.autorId}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>

          <Form.Control
            type="number"
            name="precio"
            value={form.precio}
            onChange={handleChange}
            isInvalid={!!errores.precio}
          />

          <Form.Control.Feedback type="invalid">
            {errores.precio}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Imagen</Form.Label>

          <Form.Control
            name="imagen"
            value={form.imagen}
            onChange={handleChange}
            isInvalid={!!errores.imagen}
            placeholder="https://..."
          />

          <Form.Control.Feedback type="invalid">
            {errores.imagen}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Check
          className="mb-3"
          label="Disponible"
          name="disponible"
          checked={form.disponible}
          onChange={handleChange}
        />

        <Button
          type="submit"
          disabled={guardando}
        >
          {guardando ? (
            <>
              <Spinner
                size="sm"
                animation="border"
                className="me-2"
              />
              Guardando...
            </>
          ) : (
            'Agregar libro'
          )}
        </Button>
      </Form>
    </Container>
  )
}

export default LibroNuevo