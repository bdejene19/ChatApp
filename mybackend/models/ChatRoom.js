

const mongo = require('mongoose');
const User = require('./User')
const Message = require('./Message');

const ChatRoom = mongo.Schema({
    roomName: {
        type: String,
        require
    },
    roomPassword: {
        type: String,
    },
    
    usersConnected: [User.schema],
    messages: [Message.schema],
    
})

module.exports = mongo.model('ChatRoom', ChatRoom);