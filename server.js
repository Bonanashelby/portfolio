'use strict';

const pg = require('pg');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

const conString = 'postgres://localhost:5432';

const client = new pg.Client(conString);
client.connect();
client.on('error', function(error) {
  console.error(err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('./public'));

app.get('*', function(request, response) {
  response.sendFile('public/index.html', {root: '.'});
});

// app.get('/', (request, response) =>
// response.sendFile('index.html', {root: '.'}));


app.listen(PORT, function() {
  console.log(`your app in on localhost:${PORT}`);
})
