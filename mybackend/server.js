const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongo = require('mongoose');
require('dotenv/config')

const app = express();


// access static, handle parse/form data and ability to read json files via bodyparser middleware;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'public')));

// const server = require('http').createServer(app);


// bringing in router
app.use('/', require('./router'));




// mongo.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true}, console.log('connected to db'));

// mongo.connect("mongodb+srv://Bemnet:arsenal101>@cluster0.dgpbx.mongodb.net/ChatApp?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true}, console.log('backend connected to atlas db'));
const PORT = process.env.PORT || 8000;



app.listen(PORT, () => console.log('server is running'));