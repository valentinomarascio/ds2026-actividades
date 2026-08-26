const { z } = require('zod')

const autorCreateSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(1, 'El nombre es obligatorio')
    .max(200),

  nacionalidad: z
    .string()
    .trim()
    .min(1, 'La nacionalidad es obligatoria')
})

const autorUpdateSchema = autorCreateSchema.partial()

module.exports = {
  autorCreateSchema,
  autorUpdateSchema
}