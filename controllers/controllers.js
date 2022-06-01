const res = require('express/lib/response');
const { obtenerDatos, crearDato} = require('../servicios/sevicio');

const getDatosController = async (req, res) => {
    const datos = await obtenerDatos();
    res.json(datos);
};

const postDatoController = async (req , res) => {
    const dato = req.body;
    const newDato = await crearDato (dato);
    res.status(201).json(newDato);
};

module.exports = {
    getDatosController,
    postDatoController,
};