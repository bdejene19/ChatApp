const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();


// bringing in router
app.use('/', require('./router'));


// access static, handle parse form data and ability to read json files
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));

const PORT = process.env.PORT || 8000;



app.listen(PORT, () => console.log('server is running'));