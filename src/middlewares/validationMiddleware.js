const validateProducto = (req, res, next) => {
    const { nombre, precio } = req.body;
    
    if (!nombre || !precio) {
        return res.status(400).json({
            message: 'Nombre y precio son campos requeridos'
        });
    }

    if (precio <= 0) {
        return res.status(400).json({
            message: 'El precio debe ser mayor que 0'
        });
    }

    next();
};

module.exports = {
    validateProducto
};