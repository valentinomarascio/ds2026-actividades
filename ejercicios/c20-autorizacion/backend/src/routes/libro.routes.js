const { Router } = require('express')
const libroController = require('../controllers/libro.controller')
const { authenticate, authorize } = require('../middlewares/auth.middleware')
const { validate, validateParams } = require('../middlewares/validate.middleware')

const {
  libroCreateSchema,
  libroUpdateSchema
} = require('../validations/libro.validation')

const {
  idParamSchema
} = require('../validations/params.validation')

const router = Router()

router.get('/', libroController.getAll)
router.get('/:id', libroController.getById)

router.post(
  '/',
  authenticate,
  authorize('ADMIN'),
  libroController.create
)

router.put(
  '/:id',
  authenticate,
  authorize('ADMIN'),
  libroController.update
)

router.delete(
  '/:id',
  authenticate,
  authorize('ADMIN'),
  libroController.remove
)

module.exports = router