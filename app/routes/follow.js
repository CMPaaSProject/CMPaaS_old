module.exports = app => {
    api = app.api.follow;
    const authApi = app.api.auth;

    app
        .route(app.get('followApiRoute'))
        .post(authApi.authRequired, api.follow)
        .delete(authApi.authRequired, api.unfollow);
}