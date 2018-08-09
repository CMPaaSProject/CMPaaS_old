module.exports = app => {
    const api = app.api.maps;
    const authApi = app.api.auth;

    app
        .route(app.get('mapsApiRoute'))
        .post(authApi.authRequired, api.create)
        .get(authApi.authRequired, authApi.adminRequired, api.list);
    
        app
            .route(app.get('mapsApiRoute')+'/:mapId/versions')
            .post(api.createVersion);


}