module.exports = app => {
    const userModel = require('mongoose').model('User');

    const api = {};
    const error = app.errors.users;

    api.me = (req, res) => {
        res.json(req.user);
    }

    return api;
}