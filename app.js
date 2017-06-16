const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const https = require('https');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.sendFile(__dirname + '/redcap_wdc.html');
});
app.post('/', function(req, res){
    res.sendFile(__dirname + '/redcap_wdc.html');
});

port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('wdc is running');
});
