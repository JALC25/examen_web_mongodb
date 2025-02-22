const Producto = require('../models/Producto');

class ProductoRepository {
    async findAll() {
        return await Producto.find();
    }

    async create(productoData) {
        const producto = new Producto(productoData);
        return await producto.save();
    }
}

module.exports = new ProductoRepository();