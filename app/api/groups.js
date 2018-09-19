module.exports = app => {
    const groupModel = require('mongoose').model('Group');
    const userModel = require('mongoose').model('User');

    const api = {};
    const error = app.errors.groups;

    api.create = (req, res) => {
        if(Array.isArray(req.body) || (req.body.constructor === Object && Object.keys(req.body).length === 0)) res.status(400).json(error.parse('groups-1', new Error('This resource spect a JSON user object in the body request.')));
        else{
            groupModel
                .create(req.body)
                .then(group => {
                    group.link = {
                        rel: 'group',
                        href: app.get('groupsApiRoute') + '/' + group._id
                    }
                    group.admin = req.user;
                    if(group.users){
                        group.users.forEach(u => {
                            userModel.findById(u._id)
                                .then(user => {
                                    user.groups.push(group);
                                    user.save();
                                });
                            });
                        group.users.push(req.user);
                    }else{
                        group.users = [req.user]
                    }
                    
                    group.save();
                    userModel
                        .findById(req.user._id)
                        .then(user => {
                            user.groups = user.groups || [];
                            user.groups.push(group);
                            user.save();
                            res.status(201).json({
                                userMessage: 'Group '+ group.name +' was successfully created',
                                group
                            });
                        }, error => res.status(500).json(error.parse('groups-2', error)))
                        
                }, err => {
                    switch(err.name) {
                        case 'ValidationError':
                            res.status(400).json(error.parse('groups-3', err));
                            break;
                        default:
                            res.status(500).json(error.parse('groups-2', err));
                    }
                });
        }
    }


    return api;
}