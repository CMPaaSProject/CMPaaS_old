module.exports = app => {
    const userModel = require('mongoose').model('User');
    const mapModel = require('mongoose').model('Map');
    const versionModel = require('mongoose').model('Version');
    const groupModel = require('mongoose').model('Group');

    const api = {};
    const error = app.errors.users;

    api.me = (req, res) => {
        let user = req.user.toObject();
        delete user.password;
        user.stats = {
            maps: user.maps.length,
            groups: user.groups.length,
            following: user.following.length,
            followers: user.followers.length
        };
        res.json(user);
    }

    api.dashboard = (req, res) => {
        mapModel
            .find({"author._id": req.user._id})
            .sort({'last_update':-1})
            .limit(3)
            .then(maps => {
                let arr = [];
                let count = 0;
                maps.forEach((m, i) => {
                    versionModel
                        .find({"map._id": m._id})
                        .sort({'last_update': -1})
                        .limit(1)
                        .then(version => {
                            let obj = m.toObject();
                            obj.versions = version;
                            arr[i] = obj;
                            count++;
                            if(count == maps.length) res.json(arr);
                        });
                });
            });
    };

    api.myMaps = (req, res) => {
        let order = {};
        req.query.orderBy ? order[req.query.orderBy] = -1 : order = {};
        mapModel
            .find({"author._id": req.user._id})
            .sort(order)
            .limit(Number(req.query.limit))
            .then(maps => res.json(maps), error => console.log(error));  
    }

    api.myVersions = (req, res) => {
        versionModel
            .find({"map._id":{ $in: req.query.mapId }})
            .sort({last_update: -1})
            .then(versions => {
                res.json(versions);
            });
    }

    api.myGroups = (req, res) => {
        groupModel
            .find({"admin._id": req.user._id})
            .then(groups => res.json(groups), error => console.log(error));
    }


    return api;
}