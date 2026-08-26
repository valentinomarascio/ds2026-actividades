const { Router } = require('express')
const libroController = require('../controllers/libro.controller')

const { validate, validateParams } = require('../middlewares/validate.middleware')

const {
  libroCreateSchema,
  libroUpdateSchema
} = require('../validations/libro.validation')

const {
  idParamSchema
} = require('../validations/params.validation')

const router = Router()

router.get(
  '/',
  libroController.getAll
)

router.get(
  '/:id',
  validateParams(idParamSchema),
  libroController.getById
)

router.post(
  '/',
  validate(libroCreateSchema),
  libroController.create
)

router.put(
  '/:id',
  validateParams(idParamSchema),
  validate(libroUpdateSchema),
  libroController.update
)

router.delete(
  '/:id',
  validateParams(idParamSchema),
  libroController.remove
)

module.exports = router