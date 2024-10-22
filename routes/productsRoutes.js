const express = require('express');
    const router = express.Router();
    const productosController = require('../controllers/productsController'); // Importar el controlador

    // Definir las rutas
    router.get('/', productosController.obtenerProductos); // Obtener todos los productos
    router.post('/', productosController.crearProducto)


    module.exports = router;