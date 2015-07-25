module.exports = function(app, db, utils) {

    var request = require('request');
    var camera = function(req, res) {

        var method = req.method;

        var response = {
            http_status: 200,
            status: 200,
            result: {}
        }
        console.log(method);
        var m = req.path.split('/').pop();


        switch (method) {

            case 'GET':

                if (m === 'camera') {
                    db.Cameras.find({}, function(err, cameras) {
                        response.result.data = cameras;
                        utils.writeResponse(req, res, response);
                    });
                } else {
                    db.Cameras.findOne({
                        cameraId: m
                    }, function(err, cameras) {
                        response.result.data = cameras;
                        utils.writeResponse(req, res, response);
                    });
                }
                break;
            default:
                break;
        }

    }

    app.get('/v1/camera', camera);
    app.get('/v1/camera/:1', camera);
}