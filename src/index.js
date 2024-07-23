const app = require('./app');

//inicializacion del servidor
app.listen(app.get('port'), () => { 
    console.log("Servidor escuchando en el puerto", app.get('port'));
});