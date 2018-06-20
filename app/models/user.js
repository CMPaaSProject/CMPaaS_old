module.exports = app => {
    const mongoose = require('mongoose');
    const bcrypt = require('bcrypt');

    const schema = mongoose.Schema({
        name: {
            type: String,
            required: true,
            trim: true
        },
        surname: {
            type: String,
            required: true,
            trim: true
        },
        username: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        password: {
            type: String,
            require: true
        },
        link: {
            rel: {
                type: String
            },
            href: {
                type: String
            }
        }
    });

    schema.pre('save', function(next){
        let user = this;

        if(!user.isModified('password')) return next();
        
        bcrypt.genSalt(app.get('bcrypt_salt'), function(err, salt) {
            if(err) return next(err);

            bcrypt.hash(user.password, salt, function(err, hash){
                if(err) return next(err);

                user.password = hash;
                next();
            });
        });
    });

    mongoose.model('User', schema);
}