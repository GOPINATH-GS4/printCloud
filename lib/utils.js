var utils = function() {
    this.writeResponse = function(req, res, response) {

        console.log('-----------------------------  Response ---------------------------------');
        console.log(new Date().toUTCString());
        console.log(JSON.stringify(response));
        console.log('--------------------------  Response END ---------------------------------');

        var returnResponse = JSON.parse(JSON.stringify(response));
        var status = response.http_status;
        delete returnResponse['http_status'];

        res.writeHead(status, {
            'Content-Length': Buffer.byteLength(JSON.stringify(returnResponse), 'utf8'),
            'Content-Type': 'application/json',
        });
        res.write(JSON.stringify(returnResponse));
        res.end();

    }
}
exports.utils = utils;
