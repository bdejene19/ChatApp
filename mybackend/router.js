const express = require('express');
const router = express.Router();

const ChatRoom = require('./ObjectSchemas/ChatRoom');
const User = require('./ObjectSchemas/User');

router.use(express.urlencoded({extended: false}));

router.post('/chatRooms', (req, res) => {
    let newChatUser = User(req.body.chatUsername, new Date().getTime());
    console.log(newChatUser);


    console.log(req.body.chatUsername);
})

module.exports = router;