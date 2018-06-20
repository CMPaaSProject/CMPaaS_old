const http = require('http');
const app = require('./config/express');
require('./config/database')(app.get('dbUri'));

http.createServer(app).listen(app.get('port'), () => {
    console.log('Server running at port ' + app.get('port'));
});