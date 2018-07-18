module.exports = app => {
    const api = app.api.groups;
    const authApi = app.api.auth;

    app
        .route(app.get('groupsApiRoute'))
        .post(authApi.authRequired, api.create);
}