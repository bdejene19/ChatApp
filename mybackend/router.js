const express = require('express');
const router = express.Router();
const mongo = require('mongoose');
// const server = require('http').createServer(router);
// let bodyParser = require('body-parser');


// const io = require('socket.io')(server);
const ChatRoom = require('./models/ChatRoom');
const User = require('./models/User');

mongo.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to db in router page'));

// router.use(bodyParser.json());


router.use(express.urlencoded({extended: false}));

let currUser = new User();
// router.post('/createChatRoom', (req, res) => {
//     let roomName = req.body.roomName;
//     let roomCreator = req.body.roomCreator 
//     let welcomMessage = 'Welcome to the Lobby!';

//     var chatRoomCreated = new ChatRoom({
//         roomName: roomName,
//         numberofPeople: 1,
//     })

// });
// router.get('/chatRooms', (req, res) => {
    
// })

router.get('/testChatRooms', (req, res) => {
    var chatRoomCreated = new ChatRoom({
            roomName: 'roomName',
            numberofPeople: 1,
        });
    
    console.log('room created is: ', chatRoomCreated)
    
})


router.post('/createChatRoom', (req, res) => {
    let createdRoomName = req.body.roomName;
    let roomPassword = req.body.roomPassword;
    // let roomPswdIsRequired = req.body.roomPswdIsRequired;
    var newChatRoom = new ChatRoom({
        roomName: createdRoomName,
        roomPassword: roomPassword,
        usersConnected: [currUser]
    })

    // check to see if roomName !== null or "" before saving
    newChatRoom.save(err => {
        if (err) {
            console.log('error saving chat room');
        } 
    }) 
    User.findOneAndUpdate({chatUsername: currUser.chatUsername}, {$push: {roomsJoined: newChatRoom}}, () => console.log('user updated'));   
})

router.get('joinedChatRooms', (req, res) => {
    const joinedRoomArray = [];
    User.findById(currUser._id, (err, user) => {
        if (user) {
            joinedRoomArray = user.roomsJoined;
        }
    })
})

router.post('/chatRooms', (req, res) => {
    let chatName = req.body.chatUsername;
    let avatarImg = req.body.avatarImg;

    if (chatName !== null && chatName !== 'undefined') {
        var newChatUser = new User({
            chatUsername: chatName,
            avatarImg: avatarImg
        });
        

        newChatUser.save(err => {
            if (err) {
                console.log('there was an error adding user to db');
            } else {
                console.log('user was added to db successfully');
                currUser = newChatUser;

            }
        })
        
    } else {
        console.log('user could not be created');
    }
    return currUser;

})

module.exports = router;