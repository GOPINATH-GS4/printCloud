/* Author : Janakiraman Gopinath */
module.exports = function(app, db, util, constants, log) {

    var dashboard = function(req, res) {
        res.render('camview');
    };
    app.get('/v1/camview', dashboard);
}