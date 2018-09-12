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
        last_update: {
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
        permissions: {
            publicPermission:{
                canView: {
                    type: Boolean
                },
                canFork: {
                    type: Boolean
                },
                canEdit: {
                    type: Boolean
                }
            },
            groups: [
                {
                    group: {
                        _id: {
                            type: mongoose.Schema.Types.ObjectId,
                            ref: 'Group'
                        },
                        name: {
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
                    permission: {
                        canView: {
                            type: Boolean
                        },
                        canFork: {
                            type: Boolean
                        },
                        canEdit: {
                            type: Boolean
                        }
                    }
                }
            ],
            users: [
                {
                    group: {
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
                    permission: {
                        canView: {
                            type: Boolean
                        },
                        canFork: {
                            type: Boolean
                        },
                        canEdit: {
                            type: Boolean
                        }
                    }
                }
            ]
        },
        link: {
            rel: {
                type: String
            },
            href: {
                type: String
            }
        },
        versions: [
            {
                _id: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Version'
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
        ]
    });

    mongoose.model('Map', schema);
}