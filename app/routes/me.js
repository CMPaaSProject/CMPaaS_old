module.exports = app => {
    const api = app.api.me;
    const authApi = app.api.auth;

    app
        .route(app.get('meApiRoute'))
        .get(authApi.authRequired, api.me);
    
    app
        .route(app.get('meApiRoute')+'/maps')
        .get(authApi.authRequired, api.myMaps);
    
    app
        .route(app.get('meApiRoute')+'/dashboard')
        .get(authApi.authRequired, api.dashboard);

    app
        .route(app.get('meApiRoute')+'/versions')
        .get(authApi.authRequired, api.myVersions);
}