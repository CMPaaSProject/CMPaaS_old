const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const secrets = require('./secrets.json')
const passport = require('passport');

const app = express();
require('./env')(app);

//API Routes Deffinitions
app.set('usersApiRoute', '/v1/users');
app.set('meApiRoute', '/v1/users/me');
app.set('docsApiRoute', '/v1/docs');
app.set('authApiRoute', '/v1/auth');

//Application Deffinitions
app.set('port', process.env.PORT || 80);
app.set('dbUri', 'localhost/cmpaas');

//Load secret information file
secrets.forEach(element => {
    app.set(element.key, element.value);
});

//Middlewares Settups
app.use(morgan('dev'));
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(passport.initialize());



//Consign load configuration
consign({cwd: 'app'})
    .include('errors')
    .then('models')
    .then('api')
    .then('routes')
    .then('passport')
    .then('swagger')
    .into(app);

module.exports = app;