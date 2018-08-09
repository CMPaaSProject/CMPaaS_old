module.exports = app => {
    const userModel = require('mongoose').model('User');

    const api = {};
    const error = app.errors.follow;

    api.follow = (req, res) => {
        userModel
            .findOne(req.body)
            .then(user => {
                user.followers.push(req.user);
                user.save();
                req.user.following.push(user);
                req.user.save();
                res.json({userMessage: 'Following successfull'});
            }, error=> console.log(error));
    }
    api.unfollow = (req, res) => {
        userModel
            .findOne(req.body)
            .then(user => {
                user.followers = user.followers.filter(el => el.username !== req.user.username);
                user.save();
                req.user.following = req.user.following.filter(el => el.username !== user.username);
                req.user.save();
                res.json({userMessage: 'Unfollowing successfull'});
            }, error=> console.log(error));
    }

    return api;
}
