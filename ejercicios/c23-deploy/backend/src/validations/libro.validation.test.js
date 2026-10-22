const { libroCreateSchema } = require('./libro.validation')

describe('libroCreateSchema', () => {
  it('rechaza un libro con precio negativo', () => {
    const libro = {
      titulo: 'Rayuela',
      precio: -5,
      imagen: 'rayuela.jpg',
      autorId: 1
    }

    const resultado = libroCreateSchema.safeParse(libro)

    expect(resultado.success).toBe(false)
  })
})
