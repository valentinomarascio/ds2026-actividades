const { authorize } = require('./auth.middleware')

describe('authorize', () => {
  it('rechaza con 403 a un CLIENTE que intenta acceder como ADMIN', () => {
    const req = {
      usuario: {
        id: 1,
        rol: 'CLIENTE',
      },
    }

    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    }

    const next = vi.fn()

    authorize('ADMIN')(req, res, next)

    expect(res.status).toHaveBeenCalledWith(403)
    expect(res.json).toHaveBeenCalledWith({
      error: 'No tenés permiso para esta operación',
    })
    expect(next).not.toHaveBeenCalled()
  })
})

