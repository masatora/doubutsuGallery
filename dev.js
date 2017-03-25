var express = require('express');
var webpack = require('webpack');
var devMidd = require('webpack-dev-middleware');
var hotMidd = require('webpack-hot-middleware');
var path = require('path');
var ejs  = require('ejs');
var config = require('./webpack.config.dev');
var compiler = webpack(config);
var app  = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.use('/src', express.static(__dirname + '/src'));
app.use('/static', express.static(__dirname + '/static'));

app.use(devMidd(compiler, {
    publicPath: config.output.publicPath
}));

app.use(hotMidd(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
}));

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

