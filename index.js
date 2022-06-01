const express = require('express');
const datosRouter = require('./routers/routers');


const PORT = process.env.PORT || 8080;
const app = express();

//Middlewares
app.use(express.json());

//Rutas
app.use('/datos', datosRouter );

app.listen( PORT , () => {
    console.log(`Servidor activo y escuchando en el puerto => ${PORT} `);
})