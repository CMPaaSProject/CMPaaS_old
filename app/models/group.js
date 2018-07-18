module.exports = app => {
    const mongoose = require('mongoose');

    const schema = mongoose.Schema({
        name: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true
        },
        isPublic: {
            type: Boolean,
            default: true
        },
        created: {
            type: Date,
            default: Date.now
        },
        admin: {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            username: {
                type: String
            },
            link: {
                rel: {
                    type: String
                },
                href: {
                    type: String
                }
            }
        },
        users: [
            {
                _id: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User'
                },
                username: {
                    type: String
                },
                link: {
                    rel: {
                        type: String
                    },
                    href: {
                        type: String
                    }
                }
            }
        ],
        link: {
            rel: {
                type: String
            },
            href: {
                type: String
            }
        }
    });

    mongoose.model('Group', schema);
}