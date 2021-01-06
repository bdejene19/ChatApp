const express = require('express');
const router = express.Router();
const mongo = require('mongoose');
// const server = require('http').createServer(router);
// let bodyParser = require('body-parser');


// const io = require('socket.io')(server);
const ChatRoom = require('./models/ChatRoom');
const User = require('./models/User');

mongo.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to db in router page'));

router.use(express.urlencoded({extended: false}));

let currUser = new User();

// router.get('/testChatRooms', (req, res) => {
//     var chatRoomCreated = new ChatRoom({
//             roomName: 'roomName',
//             numberofPeople: 1,
//         });
//     console.log('room created is: ', chatRoomCreated)   
// })

// creates new chatroom object, storing the user who created as a user connected to chatroom 
// also updates user collection for active rooms joined
router.post('/createChatRoom', (req, res) => {
    let createdRoomName = req.body.roomName;
    let roomPassword = req.body.roomPassword;
    
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
    return currUser;
})

// router.get('/testSome', (req, res) => {
// }) 

// updates activity for users in active chatrooms
router.put('/changeStatus', (req, res) => {

    let updatedActivity = req.body.activityStatus;
    User.findOneAndUpdate({chatUsername: currUser.chatUsername}, {activityState: updatedActivity}, () => console.log('User has been updated, check clusters'))
    return currUser;
})


// create a new user in the db
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


router.get('/myActiveChats', (req, res) => {
    var joinedRoomsObject = {}


    // if (!currUser === 'undefined') {
    //     console.log('entered if statement');
    //     User.findOne({"chatUsername": currUser.chatUsername}, (user, err) => {
        
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             joinedRoomsObject = user.roomsJoined;
    //             console.log('my joined rooms object: ', joinedRoomsObject);
    //         }
            
    //     })

    // } else {
    //     console.log('user was undefined');
    // }

    User.findById({_id: currUser._id}, (err, user) => {
        if (err) {
            console.log('there was an error');
        } else {
            if (user !== null) {
                console.log('my users joined rooms: ', user.roomsJoined); 
                joinedRoomsObject = {
                    rooms: user.roomsJoined
                }

            }
            
        }
    })
    console.log('this is my joined rooms object: ', joinedRoomsObject);
    res.send(joinedRoomsObject);
})

module.exports = router;