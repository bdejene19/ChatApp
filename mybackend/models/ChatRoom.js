// const ChatRoom = (numberOfPeople, namesOfUsers, messages) => {
//     return {
//         numberOfPeople: {
//             type: Int32Array,
//             default: 0
//         },
//         namesOfUsers: [],
//         messages: [],
//     }
// }

const mongo = require('mongoose');

const ChatRoom = mongo.Schema({
    roomName: {
        type: String,
        require
    },
    numberOfPeople: {
        default: 0
    },
    usersConnected: [],
    messages: []
})

module.exports = mongo.model('ChatRoom', ChatRoom);