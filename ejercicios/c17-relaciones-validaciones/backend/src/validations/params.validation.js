const { z } = require('zod')

const idParamSchema = z.object({
  id: z.coerce
    .number()
    .int()
    .positive('El id debe ser un número positivo')
})

module.exports = {
  idParamSchema
}