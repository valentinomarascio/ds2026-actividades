const { Router } = require('express')
const autorController = require('../controllers/autor.controller')

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
  validate(autorCreateSchema),
  autorController.create
)

router.put(
  '/:id',
  validateParams(idParamSchema),
  validate(autorUpdateSchema),
  autorController.update
)

router.delete(
  '/:id',
  validateParams(idParamSchema),
  autorController.remove
)

module.exports = router