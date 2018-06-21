const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const secrets = require('./secrets.json')
const passport = require('passport');

const app = express();

//API Routes Deffinitions
app.set('usersApiRoute', '/v1/users/');
app.set('docsApiRoute', '/v1/docs/');
app.set('authApiRoute', '/v1/auth/');

//Application Deffinitions
app.set('port', 3000);
app.set('dbUri', 'localhost/cmpaas');

//Middlewares Settups
app.use(morgan('dev'));
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(passport.initialize());

//Load secret information file
secrets.forEach(element => {
    app.set(element.key, element.value);
});

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