/* Author : Janakiraman Gopinath */
module.exports = function(app, db, util, constants, log) {

    var dashboard = function(req, res) {

        var c = req.path.split('/');
        console.log('CAMERAID' + c[c.length - 1]);
        if (c[c.length - 1] === 'camview')
            res.render('camview');
        else {
            console.log('res.body : ' + res.body);
            res.render('fullView.jade', {
                cameraId: c[c.length - 1]
            });
        }
    };
    app.get('/v1/camview', dashboard);
    app.get('/v1/camview/:1', dashboard);
}