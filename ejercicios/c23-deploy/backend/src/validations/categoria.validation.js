const { z } = require('zod')

const categoriaCreateSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(1, 'El nombre es obligatorio')
    .max(100)
})

const categoriaUpdateSchema = categoriaCreateSchema.partial()

module.exports = {
  categoriaCreateSchema,
  categoriaUpdateSchema
}