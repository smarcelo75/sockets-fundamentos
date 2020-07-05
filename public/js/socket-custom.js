var socket = io();

// Escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Enviar información al servidor
socket.emit('enviarMensaje', {
    usuario: 'Marce',
    mensaje: 'Hola Mundo'
}, function(respuesta) {
    console.log('Se disparo callback!!');
    console.log(respuesta);
});

// Escuchar mensaje del servidor
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});