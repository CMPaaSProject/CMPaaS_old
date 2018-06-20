module.exports = app => {
    const swaggerUi = require('swagger-ui-express'),
          swaggerDocument = require('./swagger.json');

    app.use(app.get('docsApiRoute'), swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}