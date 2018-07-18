module.exports = app => {
    const parser = {};
    let error = {};
    let userMessage = '';

    parser.parse = (errorCode, errorObject) => {
        switch(errorCode) {
            case 'maps-1':
                error = {
                    errorCode,
                    moreInfo: 'Consult api documentation at ' + app.get('docsApiRoute'),
                    userMessage: 'Bad request: Invalid request body.',
                    devMessage: errorObject.message
                };
                break;
            case 'maps-2':
                error = {
                    errorCode,
                    moreInfo: 'Consult api documentation at ' + app.get('docsApiRoute'),
                    userMessage: 'Internal Server Error: ' + errorObject.errmsg,
                    devMessage: errorObject
                };
                break;
            case 'maps-3':
                for(field in errorObject.errors) userMessage += errorObject.errors[field].message;
                error = {
                    errorCode,
                    moreInfo: 'Consult api documentation at ' + app.get('docsApiRoute'),
                    userMessage,
                    devMessage: errorObject
                };
                break;
        }

        return error;
    }

    return parser;
}