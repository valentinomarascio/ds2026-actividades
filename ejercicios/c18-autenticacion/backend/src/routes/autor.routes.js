const { Router } = require('express')
const autorController = require('../controllers/autor.controller')
const { authenticate, authorize } = require('../middlewares/auth.middleware')
const { validate, validateParams } = require('../middlewares/validate.middleware')

const {
  autorCreateSchema,
  autorUpdateSchema
} = require('../validations/autor.validation')

const {
  idParamSchema
} = require('../validations/params.validation')

const router = Router()

router.get(
  '/',
  autorController.getAll
)

router.get(
  '/:id',
  validateParams(idParamSchema),
  autorController.getById
)

router.post(
  '/',
  authenticate,
  authorize('ADMIN'),
  validate(autorCreateSchema),
  autorController.create
)

router.put(
  '/:id',
  authenticate,
  authorize('ADMIN'),
  validateParams(idParamSchema),
  validate(autorUpdateSchema),
  autorController.update
)

router.delete(
  '/:id',
  authenticate,
  authorize('ADMIN'),
  validateParams(idParamSchema),
  autorController.remove
)

module.exports = router