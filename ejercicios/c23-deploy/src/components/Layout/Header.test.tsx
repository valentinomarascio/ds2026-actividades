import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'
import { useAuth } from '../../context/AuthContext'

vi.mock('../../context/AuthContext', () => ({
  useAuth: vi.fn(),
}))

const useAuthMock = vi.mocked(useAuth)

function simularUsuario(rol: 'ADMIN' | 'CLIENTE') {
  useAuthMock.mockReturnValue({
    usuario: {
      id: 1,
      email: 'usuario@test.com',
      nombre: 'Valentino',
      rol,
    },
    cargando: false,
    estaAutenticado: true,
    login: vi.fn(),
    logout: vi.fn(),
    tieneRol: (rolPermitido) => rol === rolPermitido,
  })
}

describe('Header según el rol', () => {
  it('muestra Nuevo Libro cuando el usuario es ADMIN', () => {
    simularUsuario('ADMIN')

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    expect(screen.getByText('Nuevo Libro')).toBeInTheDocument()
  })

  it('oculta Nuevo Libro cuando el usuario es CLIENTE', () => {
    simularUsuario('CLIENTE')

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    expect(screen.queryByText('Nuevo Libro')).not.toBeInTheDocument()
  })
})

