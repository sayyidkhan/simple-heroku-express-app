var express = require('express');
var app = express();

app.get('/', function(req,res){
res.send('Successfully installed, Welcome to NodeJS App on Heroku!');
});

app.listen( process.env.port || 3000);
