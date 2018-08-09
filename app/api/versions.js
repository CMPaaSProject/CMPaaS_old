module.exports = app => {
    const versionModel = require('mongoose').model('Version');

    const api = {};
    const error = app.errors.versions;

    api.list = (req, res) => {
        versionModel
            .find({"map._id":{ $in: req.query.mapId }})
            .then(versions => {
                res.json(versions);
            });
    }

    return api;
}
