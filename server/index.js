var express = require('express');
var bodyParser = require('body-parser');
var config = require('../config.js');
var request = require('request');
// var request = require('request');

var items = require('../database-mysql');


var app = express();


app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());

var apiCall = function(query) {
  request(`https://api.edamam.com/search?q=${query}&app_id=${config.APPID}&app_key=${config.APIKEY}`, function(error, response, body) {
    console.log('body.recipe:', body.recipe);
  })
};

app.get('/items', function (req, res) {
  

});

app.post('/items', function(req, res) {
  console.log('inside post request');
  console.log('req.body', req.body);
  apiCall(req.body.q);
  res.send();
})



// get for /favortites
  // retreives recipes from database
  // redirects to favorites - how does this happen

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

