const mongo = require('mongoose');

const UserSchema = mongo.Schema({
    chatUsername: {
        type: String,
        require
    },

    avatarImg: {
        type: Object,
    },

    activityState: {
        type: String,
        default: 'active',
    }, 

    roomsJoined: [],
})
module.exports = mongo.model('User', UserSchema);