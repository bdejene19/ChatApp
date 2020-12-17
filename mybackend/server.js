const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongo = require('mongoose');


const app = express();


// bringing in router
app.use('/', require('./router'));

// access static, handle parse form data and ability to read json files
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));


mongo.connect("mongodb+srv://BemnetD:arsenal101>@cluster0.dgpbx.mongodb.net/ChatApp?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true}, console.log('backend connected to atlas db')).catch(err => console.log(err));

const PORT = process.env.PORT || 8000;



app.listen(PORT, () => console.log('server is running'));