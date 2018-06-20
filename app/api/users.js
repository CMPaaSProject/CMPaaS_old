module.exports = app => {
    const userModel = require('mongoose').model('User');

    const api = {};

    api.create = (req, res) => {
        userModel
            .create(req.body)
            .then(user => {
                res.status(200).json(user);
            }, error => {
                console.log(error);
            })
    }

    return api;
}