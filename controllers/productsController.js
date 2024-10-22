const { Productos } = require('../models'); // Asegúrate de que este nombre coincida con lo que exportas en el archivo de modelos

const obtenerProductos = async (req, res) => {
  try {
    const productos = await Productos.findAll(); // Cambia Producto a Productos
    res.status(200).json(productos);
  } catch (error) {
    console.error(error); // Imprimir error para depuración
    res.status(500).json({ error: 'Error al obtener los productos.' });
  }
};


const crearProducto = async (req, res) => {
  try {
  const { nombre_producto, descripcion, precio, cantidad_inventario } = req.body;
  const producto = await producto.create({
  nombre_producto,
  descripcion,
  precio,
  cantidad_inventario,
  });
  res.status(201).json(producto);
  } catch (error) {
  res.status(500).json({ error: 'Error al crear el producto.' });
  }
};

module.exports = {
  obtenerProductos,
  crearProducto
};