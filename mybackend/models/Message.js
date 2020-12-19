// const Message = (user, message, time) => {
//     return {
//         user,
//         message,
//         time: new Date().getTime(),
//         opened: false
//     }
// }

const mongo = require('mongoose');

const Message = mongo.Schema({
    user: {
        type: String,
        require
    },
    message: {
        type: String,
        require
    },

    time: {
        type: Object, 
        required
    },
    opened: {
        type: Boolean,
        default: false
    }

})

module.exports = mongo.model('Message', Message);