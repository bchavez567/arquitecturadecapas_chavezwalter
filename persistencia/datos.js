const datos = [];

const leerDatos = async () => {
    return datos;
};

const guardarDato = async (dato) => {
    datos.push(dato);
    return dato;
}

module.exports = {
    leerDatos,
    guardarDato,
};