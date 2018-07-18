module.exports = app => {
    const mongoose = require('mongoose');

    const schema = mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        question: {
            type: String
        },
        keywords: [{
            type: String
        }],
        created: {
            type: Date,
            default: Date.now
        },
        author: {
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
        link: {
            rel: {
                type: String
            },
            href: {
                type: String
            }
        },
        isPublic: {
            type: Boolean,
            default: true
        }
    });

    mongoose.model('Map', schema);
}