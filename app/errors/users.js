module.exports = app => {
    const parser = {};
    let error = {};
    let userMessage = '';

    parser.parse = (errorCode, errorObject) => {
        switch(errorCode) {
            case 'users-1':
                error = {
                    errorCode,
                    moreInfo: 'Consult api documentation at ' + app.get('docsApiRoute'),
                    userMessage: 'Bad request: Invalid request body.',
                    devMessage: errorObject.message
                };
                break;
            case 'users-2':
                for(field in errorObject.errors) userMessage += errorObject.errors[field].message;
                error = {
                    errorCode,
                    moreInfo: 'Consult api documentation at ' + app.get('docsApiRoute'),
                    userMessage,
                    devMessage: errorObject
                };
                break;
            case 'users-3':
                error = {
                    errorCode,
                    moreInfo: 'Consult api documentation at ' + app.get('docsApiRoute'),
                    userMessage: "This username or e-mail is already taken",
                    devMessage: errorObject.message
                };
                break;
            case 'users-4':
                error = {
                    errorCode,
                    moreInfo: 'Consult api documentation at ' + app.get('docsApiRoute'),
                    userMessage: 'Internal Server Error: ' + errorObject.errmsg,
                    devMessage: errorObject
                };
                break;
        }

        return error;
    }

    return parser;
}