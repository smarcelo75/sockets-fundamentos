const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    client.on('enviarMensaje', (data, callback) => {
        console.log('Mensaje enviado por el cliente: ', data);

        //  enviar mensaje a todos los clientes conectados
        client.broadcast.emit('enviarMensaje', data);
        // let respuesta = '';
        // if (mensaje.usuario) {
        //     respuesta = { message: mensaje.usuario + ', el servidor recibio tu mensaje!!' };
        //     callback(respuesta);
        // } else {
        //     respuesta = { message: 'Mensaje sin usuario!!' };
        //     callback(respuesta);
        // }
    });
});