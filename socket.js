const { isRealString } = require('./utils/validation');
const { Users } = require('./utils/users');
const { generateMessage } = require('./utils/message');
let users = new Users();

module.exports = (io) => {
    io.on('connection', (socket) => {
        
        socket.on('join', (params, callback) => {
            if(!isRealString(params.username) || !isRealString(params.roomId)){
                return callback('Username and roomId are required.');
            }

            socket.join(params.roomId);
            users.removeUser(socket.id);
            users.addUser(socket.id, params.username, params.roomId);
            console.log(users.getUserList(params.roomId));

            io.to(params.roomId).emit('updateUserList', users.getUserList(params.roomId));
            socket.emit('newMessage', generateMessage('Admin', 'Welcome to the realtime editor.'));
            socket.broadcast.to(params.roomId).emit('newMessage', generateMessage('Admin', `${params.username} has joined`));

            callback();            
        });

        socket.on('sendModel', param => {
            let user = users.getUser(socket.id);
            if(user) {
                socket.broadcast.to(user.roomId).emit('updateModel', param);
            }
        });

        socket.on('disconnect', function(){
            let user = users.removeUser(socket.id);
            if(user) {
                io.to(user.roomId).emit('updateUserList', users.getUserList(user.roomid));
                io.to(user.roomId).emit('newMessage', generateMessage('Admin', `${user.username} has left.`));
            }
        });
            
        socket.on('message', (message) => {
            console.log('Message received> ' + message);
            io.emit('message', {type: 'new-message', text: message});
        })
    });
}