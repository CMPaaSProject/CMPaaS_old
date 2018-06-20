module.exports = app => {
    const userModel = require('mongoose').model('User');

    const api = {};
    const error = app.errors.users;

    api.create = (req, res) => {
        if(Array.isArray(req.body) || (req.body.constructor === Object && Object.keys(req.body).length === 0)) res.status(400).json(error.parse('users-1', new Error('This resource spect a JSON user object in the body request.')));
        else{
            userModel
                .create(req.body)
                .then(user => {
                    user.link = {
                        rel: 'self',
                        href: app.get('usersApiRoute') + user._id
                    };
                    user.save();
                    user = user.toObject();
                    delete user.password;
                    res.status(201).json({
                        userMessage: 'User created success',
                        user
                    })
                }, err => {
                    switch(err.name) {
                        case 'ValidationError':
                            res.status(400).json(error.parse('users-2', err));
                            break;
                        case 'MongoError':
                            res.status(400).json(error.parse('users-3', err));
                            break;
                        default:
                            res.status(500).json(error.parse('users-4', err));
                    }
                });  
        }
    }

    return api;
}