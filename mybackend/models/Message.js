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
        require
    },
    opened: {
        type: Boolean,
        default: false
    }

})

module.exports = mongo.model('Message', Message);