module.exports = function(app, db, utils, fs, _) {

    var url = require('url');

    var Resource = function(req, res) {
        var ObjectId = require('mongoose').Types.ObjectId;

        var method = req.method;

        var response = {
            http_status: 200,
            status: 200,
            result: {}
        }
        console.log(method);
        var m = req.path.split('/').pop();
        var urlParams = url.parse(req.protocol + '://' + req.get('host') + req.url, true);
        var query = urlParams.query;

        var resource = req.path.split('/')[2];


        switch (method) {

            case 'GET':

                if (m === resource) {

                    db[resource].find(query, function(err, resources) {
                        response.result.data = resources;
                        utils.writeResponse(req, res, response);
                    });

                } else {

                    query._id = m;

                    db[resource].findOne(query, function(err, resources) {
                        response.result.data = resources;
                        utils.writeResponse(req, res, response);
                    });
                }
                break;

            case 'POST':

                if (typeof req.body.data.length !== 'undefined' && req.body.data.length > 0) {

                    var i = 0;
                    response.result.data = [];
                    _.each(req.body.data, function(data) {
                        db[resource](data).save(function(err) {
                            if (err) {
                                response.status = 500;
                                var r = {}
                                r.ident = data._id;
                                r.error = err;
                                response.result.data.push(r);
                            }
                            i++;
                            if (i === req.body.data.length)
                                utils.writeResponse(req, res, response);
                        });

                    });

                } else {
                    db[resource](req.body.data).save(function(err) {
                        if (err) {
                            response.status = 500;
                            response.result.error = err;
                        }
                    });
                    utils.writeResponse(req, res, response);
                }

                break;

            default:
                break;
        }

    }

    app.post('/v1/Cameras', Resource);
    app.get('/v1/Cameras', Resource);
    app.get('/v1/Cameras/:1', Resource);
}