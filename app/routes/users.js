module.exports = app => {
    const api = app.api.users;

    app
        .route(app.get('usersApiRoute'))
        .post(api.create)
        .get(api.list);
}