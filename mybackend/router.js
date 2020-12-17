const express = require('express');
const router = express.Router();
const mongo = require('mongoose');
// mongo.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to db in router page'))

const ChatRoom = require('./ObjectSchemas/ChatRoom');
const User = require('./ObjectSchemas/User');

router.use(express.urlencoded({extended: false}));

router.post('/chatRooms', (req, res) => {
    console.log(req.body);
    let newChatUser = User(req.body.chatUsername, new Date().getUTCHours() + ":" + new Date().getTime());
    console.log("new user: ", newChatUser);

})

module.exports = router;