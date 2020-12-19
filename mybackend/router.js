const express = require('express');
const router = express.Router();
const mongo = require('mongoose');
// const server = require('http').createServer(router);
// let bodyParser = require('body-parser');


// const io = require('socket.io')(server);

mongo.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to db in router page'));

// router.use(bodyParser.json());

const ChatRoom = require('./models/ChatRoom');
const User = require('./models/User');

router.use(express.urlencoded({extended: false}));

let currUser = "";
router.post('/createChatRoom', (req, res) => {
    let roomName = req.body.roomName;
    let roomCreator = req.body.roomCreator 
    let welcomMessage = 'Welcome to the Lobby!';

    var chatRoomCreated = new ChatRoom({
        roomName: roomName,
        numberofPeople: 1,
    })

});
// router.get('/chatRooms', (req, res) => {
    
// })

router.post('/chatRooms', (req, res) => {
    console.log('entered post request1')
    console.log('my request body: ', req.body);

    let chatName = req.body.chatUsername;
    let avatarImg = req.body.avatarImg;

    if (chatName !== null && chatName !== 'undefined') {
        var newChatUser = new User({
            chatUsername: chatName,
            avatarImg: avatarImg
        });

        newChatUser.save(err => {
            if (err) {
                console.log('there was an error adding user to db')
            } else {
                console.log('user was added to db successfully')
            }
        })
        
    } else {
        console.log('user could not be created')
    }
    console.log(newChatUser);

})

module.exports = router;