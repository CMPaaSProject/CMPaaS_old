module.exports = app => {
    const mongoose = require('mongoose');
    const bcrypt = require('bcrypt');

    const schema = mongoose.Schema({
        firstname: {
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
            required: true
        },
        link: {
            rel: {
                type: String
            },
            href: {
                type: String
            }
        },
        facebook: {
            id: {
                type: String
            },
            access_token: {
                type: String
            }
        },
        google: {
            id: {
                type: String
            },
            access_token: {
                type: String
            },
            id_token: {
                type: String
            }
        },
        profile_picture: String,
        locInfo: {
            country: {
                type: String
            },
            countryCode: {
                type: String
            },
            region: {
                type: String
            },
            regionName: {
                type: String
            },
            city: {
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

    schema.methods.comparePassword = function(candidatePassword, cb) {
        bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
            if (err) return cb(err);
            cb(null, isMatch);
        });
    };

    mongoose.model('User', schema);
}