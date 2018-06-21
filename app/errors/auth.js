module.exports = app => {
    const parser = {};
    let error = {};
    let userMessage = '';

    parser.parse = (errorCode, errorObject) => {
        switch(errorCode) {
            case 'auth-1':
                error = {
                    errorCode,
                    moreInfo: 'Consult api documentation at ' + app.get('docsApiRoute'),
                    userMessage: 'Internal server error.',
                    devMessage: errorObject.message
                };
                break;
            case 'auth-2':
                error = {
                    errorCode,
                    moreInfo: 'Consult api documentation at ' + app.get('docsApiRoute'),
                    userMessage: 'Unauthorized: '+ errorObject.message,
                    devMessage: errorObject.message
                };
                break;
        }

        return error;
    }

    return parser;
}