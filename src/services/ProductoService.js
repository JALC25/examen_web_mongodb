const ProductoRepository = require('../repositories/ProductoRepository');

class ProductoService {
    async getAllProductos() {
        return await ProductoRepository.findAll();
    }

    async createProducto(productoData) {
        return await ProductoRepository.create(productoData);
    }
}

module.exports = new ProductoService();