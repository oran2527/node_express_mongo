/* export express */

const express = require('express');

/* create express instance */

const app = express();

/* 
    method get: create get route     
    @req: request user to app
    @res: app response to user

*/

app.get('/', function(req, res) {

    /* the method send shows the message inside parenthesis */

    res.send('Hello World Orlando Gomez');
});

/*
    method listen: defines the localhost port
    console.log: function for printing in command line
    
*/

app.listen(5000, function() {
    console.log('Express Web Server Working');
});