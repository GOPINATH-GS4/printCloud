var request = require('request');


var payload = {};
var headers = {
    'Accept': 'application/json',
    'clientToken': process.env.clientToken || 'ODk3YzBkMjEyMThhNTcxNzhlNmJkMjlkYjExMmM1ZmViZDM1YTViNWFkMTFlZjhmYTk3Mjc1YmY0ZDMxMjNkZQ'
};

payload.url = 'http://localhost:7777/v1/Cameras';
payload.method = 'POST';
payload.headers = headers;
payload.json = {
    data: [{
            cameraId: "001-002-003-0007",
            cameraName: "Metal Printer 2",
            cameraURL: "http://54.3.168.33:8080/?action=stream",
            attr: [{
                value: "metal printer 2",
                name: "type"
            }, {
                value: "3ds",
                name: "hardware"
            }]
        }, {
            cameraId: "001-002-003-0008",
            cameraName: "Plastic Printer 2",
            cameraURL: "http://54.3.168.33:8080/?action=stream",
            attr: [{
                value: "Plastic printer 2",
                name: "type"
            }, {
                value: "3ds",
                name: "hardware"
            }]
        }

    ]
};

request.post(payload, function(err, response, body) {
    console.log(body);
});
