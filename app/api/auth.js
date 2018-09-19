module.exports = app => {
    const passport = require('passport');
    const jwt = require('jsonwebtoken');
    const userModel = require('mongoose').model('User');
    const request = require('request-promise');

    const api = {};
    const error = app.errors.auth;

    api.authenticate = (req, res, next) => {
        passport.authenticate('local', function(err, user, info){
            if(err) res.status(500).json(error.parse('auth-1', info));
            else if(!user) res.status(401).json(error.parse('auth-2', new Error('User not found.')));
            else {
                let token = jwt.sign({id: user._id}, app.get('jwt_secret'));
                user = user.toObject();
                delete user.password;
                user.token = token;
                user.stats = {
                    maps: user.maps.length,
                    groups: user.groups.length,
                    following: user.following.length,
                    followers: user.followers.length
                };
                res.status(200).json({userMessage: 'Login success', user});

            }
        })(req, res, next);
    }

    api.fbAuthenticate = (req, res, next) => {
        userModel.findOne({"facebook.id": req.body.facebook.id})
            .then(result => {
                if(!result) res.status(400).json(error.parse('auth-3'));
                let user = result.toObject();
                request('https://graph.facebook.com/me?access_token='+req.body.facebook.access_token)
                    .then((d)=>{
                        data = JSON.parse(d);
                        if(data.id == user.facebook.id){
                            user.token = jwt.sign({id: user._id}, app.get('jwt_secret'));
                            delete user.password;
                            res.status(200).json({userMessage: 'Login success', user});
                        }else{
                            res.status(400).json(error.parse('auth-3'));
                        }
                    })
                    .catch(err => {
                        res.status(400).json(error.parse('auth-4', err));
                    });
            },
            error => {
                res.status(500).json(error.parse('auth-1', error));
            });
    }

    api.gAuthenticate = (req, res, next) => {
        userModel.findOne({"google.id": req.body.google.id})
            .then(result => {
                if(!result) res.status(400).json(error.parse('auth-3'));
                let user = result.toObject();
                request('https://www.googleapis.com/oauth2/v3/tokeninfo?id_token='+req.body.google.id_token)
                    .then((d)=>{
                        data = JSON.parse(d);
                        if(data.sub == user.google.id){
                            user.token = jwt.sign({id: user._id}, app.get('jwt_secret'));
                            delete user.password;
                            res.status(200).json({userMessage: 'Login success', user});
                        }else{
                            res.status(400).json(error.parse('auth-3'));
                        }
                    })
                    .catch(err => {
                        res.status(400).json(error.parse('auth-4', err));
                    });
            },
            error => {
                res.status(500).json(error.parse('auth-1', error));
            });
    }

    api.authRequired = (req, res, next) => {
        passport.authenticate('jwt', { session: false }, function(err, user, info){
            if(err) res.status(500).json(error.parse('auth-1', info));
            else if(!user) res.status(401).json(error.parse('auth-2', new Error('User not found.')));
            else {
                req.user = user;
                next();
            }

        })(req, res, next);
    }

    api.adminRequired = (req, res, next) => {
        if(req.user.groups.filter(group => (group.name === "Admin")).length > 0) next();
        else res.status(403).json(error.parse('auth-5', new Error('This resource requires admin level.')));
    }

    return api;
}