var express = require('express');
var webpack = require('webpack');
var path = require('path');
var ejs  = require('ejs');
var app  = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.use('/src', express.static(__dirname + '/src'));
app.use('/dist', express.static(__dirname + '/dist'));

app.get('*', function(req, res){
    res.render('index');
    res.end();
});

app.listen(8081, 'localhost', function(error){
    if (error) {
        console.log(error);
        return;
    } else {
        console.log('\n\nlistening at http://localhost:8081/\n');
    }
});
