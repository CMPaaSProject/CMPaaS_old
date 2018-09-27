const app = require('./config/express');
const http = require('http').Server(app);
let io = require('socket.io')(http);
require('./config/database')(app.get('dbUri'));
require('./socket')(io);


http.listen(app.get('port'), () => {
    console.log('Server running at port ' + app.get('port'));
});