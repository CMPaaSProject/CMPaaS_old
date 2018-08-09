module.exports = app => {
    api = app.api.versions;
    const authApi = app.api.auth;

    app
        .route(app.get('versionsApiRoute'))
        .get(authApi.authRequired, api.list);
}