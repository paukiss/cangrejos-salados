const { Router } = require('express');
const controller = require('../controllers/cangrejoController');

const router = Router();

router.get('/cangrejos', controller.listar);
router.get('/cangrejos/:id', controller.obtener);

module.exports = router;
