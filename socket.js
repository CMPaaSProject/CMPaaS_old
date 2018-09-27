module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('User connected into socket> ' + socket.id);

        socket.on('disconnect', function(){
            console.log('User disconnected from socket> ' + socket.id);
        });
            
        socket.on('message', (message) => {
            console.log('Message received> ' + message);
            io.emit('message', {type: 'new-message', text: message});
        })
    });
}