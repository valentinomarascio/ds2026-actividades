import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
import { libroSchema } from '../schemas/libroSchema'
import type { Libro } from '../types/libro'

interface Props {
  onAgregar: (libro: Libro) => void
}

function LibroNuevo({ onAgregar }: Props) {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    titulo: '',
    autor: '',
    precio: '',
    disponible: true,
  })

  const [errores, setErrores] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
  }

  const