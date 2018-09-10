module.exports = app => {
    const api = app.api.users;
    const authApi = app.api.auth;

    app
        .route(app.get('usersApiRoute'))
        .post(api.create)
        .get(authApi.authRequired, api.list);
    
    app
        .route(app.get('usersApiRoute')+'/search')
        .get(api.search)
    
    app
        .route(app.get('usersApiRoute')+'/:id')
        .get(api.specificUser);
    
    app
        .route(app.get('usersApiRoute')+'/globalInfo')
        .get(api.globalInfo);
}