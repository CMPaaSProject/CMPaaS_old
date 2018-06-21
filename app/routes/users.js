module.exports = app => {
    const api = app.api.users;
    const authApi = app.api.auth;

    app
        .route(app.get('usersApiRoute'))
        .post(api.create)
        .get(authApi.authRequired, api.list);
}