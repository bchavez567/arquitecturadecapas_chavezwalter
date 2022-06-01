const {leerDatos, guardarDato} = require('../persistencia/datos');

const obtenerDatos = async () => {
    return await leerDatos();
};

const crearDato = async (dato) => {
    dato.added = Date.now();
    return await guardarDato(dato);
};

module.exports = {
    obtenerDatos,
    crearDato,
}