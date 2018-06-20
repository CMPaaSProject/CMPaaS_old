const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

//API Routes Deffinitions
app.set('usersApiRoute', '/v1/users/');

//Application Deffinitions
app.set('port', 3000);
app.set('dbUri', 'localhost/cmpaas');

//Middlewares Settups
app.use(morgan('dev'));
app.use(express.static('./public'));
app.use(bodyParser.json());

//Consign load configuration
consign({cwd: 'app'})
    .include('errors')
    .then('models')
    .then('api')
    .then('routes')
    .into(app);

module.exports = app;