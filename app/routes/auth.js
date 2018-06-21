module.exports = app => {
    const api = app.api.auth;

    app
        .route(app.get('authApiRoute'))
        .post(api.authenticate);
}