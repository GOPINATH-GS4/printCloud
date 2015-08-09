(function() {
    /**
     * Module dependencies.
     */

    var express = require('express'),
        http = require('http'),
        https = require('https'),
        path = require('path'),
        fs = require('fs'),
        printModel = require('./models/printModel.js').printModel,
        _ = require('underscore'),
        utils = require('./lib/utils.js').utils;

    var app = express();
    var u = new utils();

    app.set('port', process.env.PORT || 7777);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.set("view options", {
        layout: true
    });

    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));

    var db = new printModel();

    var resource = require('./routes/resource.js')(app, db, u, fs, _);

    var camview = require('./routes/camview.js')(app, db, u, fs, _);

    http.createServer(app).listen(app.get('port'), function() {
        console.log('Express server listening on port ' + app.get('port'));
    });

}).call(this);
