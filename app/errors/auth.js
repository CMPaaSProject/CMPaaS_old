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
            case 'auth-3':
                error = {
                    errorCode,
                    moreInfo: 'Consult api documentation at ' + app.get('docsApiRoute'),
                    userMessage: 'Authentication fail: User not found',
                    devMessage: 'Check the authentication request body'
                };
                break;
            case 'auth-4':
                error = {
                    errorCode,
                    moreInfo: 'Consult api documentation at ' + app.get('docsApiRoute'),
                    userMessage: 'Authentication fail: Facebook token is not valid',
                    devMessage: errorObject
                };
                break;
        }

        return error;
    }

    return parser;
}