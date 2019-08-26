var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
// var favicon = require('serve-favicon');
var port = process.env.PORT || 4300;

// app.use(favicon(__dirname + '/favicon.ico'));

app.get('/ping', function (req, res, next) {
    console.log(req.body);
    res.send('pong');
});


// var staticRoot = '../' + __dirname + '/';
var staticRoot = __dirname + '/dist/';

app.use(express.static(staticRoot));

// app.use(express.static('./'));
// Any deep link calls should return index.html
// app.use('/*', express.static('./index.html'));

app.use(function (req, res, next) {

    // if the request is not html then move along
    var accept = req.accepts('html', 'json', 'xml');
    if (accept !== 'html') {
        return next();
    }

    // // if the request has a '.' assume that it's for a file, move along
    // var ext = path.extname(req.path);
    // if (ext !== '') {
    //   return next();
    // }
    const supportedLocales = ['it', 'en', 'fr'];
    const defaultLocale = 'en';
    const matches = req.url.match(/^\/([a-z]{2}(?:-[A-Z]{2})?)\//);

    // check if the requested url has a correct format '/locale' and matches any of the supportedLocales
    const locale = (matches && supportedLocales.indexOf(matches[1]) !== -1) ? matches[1] : defaultLocale;
    fs.createReadStream(staticRoot + `${locale}/index.html`).pipe(res);
});

app.listen(port, function () {
    console.log('Express server listening on port ' + port);
    console.log(
        '\n__dirname = ' + __dirname +
        '\nprocess.cwd = ' + process.cwd());
});