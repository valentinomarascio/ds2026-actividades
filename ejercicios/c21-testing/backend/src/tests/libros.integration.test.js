const request = require('supertest')
const app = require('../app')

describe('POST /api/libros', () => {
  it('rechaza con 401 una solicitud sin token', async () => {
    const respuesta = await request(app)
      .post('/api/libros')
      .send({
        titulo: 'Rayuela',
        precio: 5000,
        imagen: 'rayuela.jpg',
        autorId: 1,
      })

    expect(respuesta.status).toBe(401)

    expect(respuesta.body).toEqual({
      error: 'Falta el token',
    })
  })
})

