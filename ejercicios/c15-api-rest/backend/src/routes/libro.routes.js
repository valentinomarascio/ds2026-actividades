const { Router } = require('express')
const libroController = require('../controllers/libro.controller')

const router = Router()

router.get('/', libroController.getAll)
router.get('/:id', libroController.getById)
router.post('/', libroController.create)
router.put('/:id', libroController.update)
router.delete('/:id', libroController.remove)

module.exports = router