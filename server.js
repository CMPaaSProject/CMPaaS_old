const app = require('./config/express');
const http = require('http').Server(app);
require('./config/database')(app.get('dbUri'));

http.listen(app.get('port'), () => {
    console.log('Server running at port ' + app.get('port'));
});