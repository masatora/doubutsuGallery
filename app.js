var express = require('express');
var webpack = require('webpack');
var devMidd = require('webpack-dev-middleware');
var hotMidd = require('webpack-hot-middleware');
var path = require('path');
var ejs  = require('ejs');
var config = require('./webpack.config');
var compiler = webpack(config);
var app  = express();
var pjPath = '/root/github/doubutsuGallery/';

app.set('views', pjPath + 'views');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.use('/src', express.static(pjPath + 'src'));

app.use(devMidd(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(hotMidd(compiler));

app.get('*', function(req, res){
    res.render('index');
    res.end();
});

app.listen(8080, 'localhost', function(error){
    if (error) {
        console.log(error);
        return;
    } else {
        console.log('\n\nlistening at http://localhost:8080/\n');
    }
});

