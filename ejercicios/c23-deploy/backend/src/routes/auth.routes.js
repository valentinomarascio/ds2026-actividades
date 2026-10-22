const { Router } = require('express')

const authController = require('../controllers/auth.controller')

const { validate } = require('../middlewares/validate.middleware')

const { authenticate } = require('../middlewares/auth.middleware')

const {
  registroSchema,
  loginSchema,
} = require('../validations/auth.validation')

const router = Router()

router.post(
  '/registro',
  validate(registroSchema),
  authController.registrar
)

router.post(
  '/login',
  validate(loginSchema),
  authController.login
)

router.get('/yo', authenticate, authController.yo)

module.exports = router