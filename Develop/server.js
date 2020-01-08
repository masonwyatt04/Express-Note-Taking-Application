var express = require('express');
var path = require('path');
var fs = require('fs');

// var notes = require("db.json");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function( request, response){
    response.sendFile(path.join(__dirname, '/public/index.html'));
})

app.get('/notes', function( request, response){
    response.sendFile(path.join(__dirname, '/public/notes.html'));
})

// app.get('/api/notes', function( request, response){
//     return response.json(notes);
// })

app.listen( PORT, function(){
    console.log('App listening on PORT ' + PORT);
})