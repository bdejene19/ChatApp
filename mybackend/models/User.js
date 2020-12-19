// const createUser = (chatUsername, avatarImg) => {
//     return {
//         chatUsername,
//         avatarImg
//     }
// }

const mongo = require('mongoose');

const User = mongo.Schema({
    chatUsername: {
        type: String,
        require
    },

    avatarImg: {
        type: Object,
    },

    activityState: {
        type: String,
        default: true,
    }
})
module.exports = mongo.model('User', User);