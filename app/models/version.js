module.exports = app => {
    const mongoose = require('mongoose');

    const schema = mongoose.Schema({
        content: {
            type: mongoose.Schema.Types.Mixed,
            required: true
        },
        created: {
            type: Date,
            default: Date.now
        },
        last_update: {
            type: Date,
            default: Date.now
        },
        link: {
            rel: {
                type: String
            },
            href: {
                type: String
            }
        },
        map: {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Map'
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
    });

    mongoose.model('Version', schema);
}