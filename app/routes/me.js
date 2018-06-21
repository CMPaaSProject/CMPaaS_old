module.exports = app => {
    const api = app.api.me;
    const authApi = app.api.auth;

    app
        .route(app.get('meApiRoute'))
        .get(authApi.authRequired, api.me);
}