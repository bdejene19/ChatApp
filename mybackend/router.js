const express = require('express');
const router = express.Router();

router.use(express.urlencoded({extended: false}));

router.post('/chatRooms', (req, res) => {
    
})

module.exports = router;