module.exports = app => {
    const passport = require('passport');
    const jwt = require('jsonwebtoken');
    const userModel = require('mongoose').model('User');

    const api = {};
    const error = app.errors.auth;

    api.authenticate = (req, res, next) => {
        passport.authenticate('local', function(err, user, info){
            if(err) res.status(500).json(error.parse('auth-1', info));
            else if(!user) res.status(401).json(error.parse('auth-2', info));
            else {
                let token = jwt.sign({id: user._id}, app.get('jwt_secret'));
                res.status(200).json({userMessage: 'Login success', token})
            }
        })(req, res, next);
    }

    api.authRequired = (req, res, next) => {
        passport.authenticate('jwt', { session: false }, function(err, user, info){
            if(err) res.status(500).json(error.parse('auth-1', info));
            else if(!user) res.status(401).json(error.parse('auth-2', info));
            else next();

        })(req, res, next);
    }

    return api;
}