        var socket = io();

        //escuchar sucesos
        socket.on('connect', function() {
            console.log('conectado al servidor...');
        })

        socket.on('disconnect', function() {
            console.log('perdimos conexion con el server');
        });



        //enviar informacion
        socket.emit('enviarMensaje', {
            usuario: 'Juan',
            mensaje: 'Hola mundo sockets'
        }, function(resp) {
            console.log('Respuesta server', resp);
        });

        //Escuchar informacion
        socket.on('enviarMensaje', function(mensaje) {
            console.log(mensaje);
        });