const { Router} = require('express');
const { getDatosController, postDatoController } = require('../controllers/controllers');

const router = Router();

router.get('/' , getDatosController);
router.post('/', postDatoController);

module.exports = router;


