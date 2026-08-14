const { Router } = require('express')
const autorController = require('../controllers/autor.controller')

const router = Router()

router.get('/', autorController.getAll)
router.get('/:id', autorController.getById)
router.post('/', autorController.create)
router.put('/:id', autorController.update)
router.delete('/:id', autorController.remove)

module.exports = router