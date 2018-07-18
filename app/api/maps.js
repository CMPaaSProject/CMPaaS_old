module.exports = app => {
    const mapModel = require('mongoose').model('Map');
    const userModel = require('mongoose').model('User');

    const api = {};
    const error = app.errors.maps;

    api.create = (req, res) => {
        if(Array.isArray(req.body) || (req.body.constructor === Object && Object.keys(req.body).length === 0)) res.status(400).json(error.parse('maps-1', new Error('This resource spect a JSON user object in the body request.')));
        else{
            mapModel
                .create(req.body)
                .then(map => {
                    map.link = {
                        rel: 'map',
                        href: app.get('mapsApiRoute') + '/' + map._id
                    }
                    map.author = req.user;
                    map.save();
                    userModel
                        .findById(req.user._id)
                        .then(user => {
                            user.maps = user.maps || [];
                            user.maps.push(map);
                            user.save();
                            res.status(201).json({
                                userMessage: 'Map '+ map.title +' was successfully created',
                                map
                            });
                        }, error => res.status(500).json(error.parse('maps-2', error)))
                        
                }, err => {
                    switch(err.name) {
                        case 'ValidationError':
                            res.status(400).json(error.parse('maps-3', err));
                            break;
                        default:
                            res.status(500).json(error.parse('maps-2', err));
                    }
                });
        }
    }

    api.list = (req, res) => {
        mapModel
            .find({})
            .then(maps => { res.json(maps), err => res.status(500).json(error.parse('maps-2', err))});
    }

    return api;
}