const { z } = require('zod')

const libroCreateSchema = z.object({
  titulo: z
    .string()
    .trim()
    .min(1, 'El título es obligatorio')
    .max(200),

  precio: z
    .number()
    .int()
    .positive('El precio debe ser mayor a 0'),

  imagen: z
    .string()
    .min(1, 'La imagen es obligatoria'),

  autorId: z
    .number()
    .int()
    .positive('El autor es obligatorio'),

  disponible: z
    .boolean()
    .optional(),

  categorias: z
    .array(z.number().int().positive())
    .optional()
})

const libroUpdateSchema = libroCreateSchema.partial()

module.exports = {
  libroCreateSchema,
  libroUpdateSchema
}