const express = require('express');
const router = express.Router();
const ProductoController = require('../controllers/ProductoController');
const { validateProducto } = require('../middlewares/validationMiddleware');

router.get('/', ProductoController.getProductos);
router.post('/', validateProducto, ProductoController.createProducto);

module.exports = router;