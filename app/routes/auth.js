module.exports = app => {
    const api = app.api.auth;

    app
        .route(app.get('authApiRoute'))
        .post(api.authenticate);
    
    app
        .route(app.get('authApiRoute')+'/facebook')
        .post(api.fbAuthenticate);
    
    app
        .route(app.get('authApiRoute')+'/google')
        .post(api.gAuthenticate);
}