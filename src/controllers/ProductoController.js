const ProductoService = require('../services/ProductoService');

class ProductoController {
    async getProductos(req, res) {
        try {
            const productos = await ProductoService.getAllProductos();
            res.json(productos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createProducto(req, res) {
        try {
            const producto = await ProductoService.createProducto(req.body);
            res.status(201).json(producto);
        } catch (error) {
            if (error.name === 'ValidationError') {
                res.status(400).json({ message: error.message });
            } else {
                res.status(500).json({ message: error.message });
            }
        }
    }
}

module.exports = new ProductoController();