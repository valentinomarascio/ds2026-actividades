const { Router } = require('express')
const categoriaController = require('../controllers/categoria.controller')

const {
  validate,
  validateParams
} = require('../middlewares/validate.middleware')

const {
  categoriaCreateSchema,
  categoriaUpdateSchema
} = require('../validations/categoria.validation')

const {
  idParamSchema
} = require('../validations/params.validation')

const router = Router()

router.get(
  '/',
  categoriaController.getAll
)

router.get(
  '/:id',
  validateParams(idParamSchema),
  categoriaController.getById
)

router.post(
  '/',
  validate(categoriaCreateSchema),
  categoriaController.create
)

router.put(
  '/:id',
  validateParams(idParamSchema),
  validate(categoriaUpdateSchema),
  categoriaController.update
)

router.delete(
  '/:id',
  validateParams(idParamSchema),
  categoriaController.remove
)

module.exports = router