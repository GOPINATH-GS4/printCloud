$(function() {
    $(document).ready(function() {
        var elem = document.getElementById('camera');
        HTTPRequest.get('/v1/camera', function(status, headers, content) {

            var x = JSON.parse(content);
            console.log(x);
            if (x.status === 200) {
                var data = x.result.data;
                for (var i = 0; i < data.length; i++) {
                    console.log(data[i].cameraName);

                    var c = document.createElement('div');
                    c.className = 'col-sm-12';
                    c.id = data.cameraId;

                    var details = document.createElement('a');
                    details.className = 'choose break-down-2';
                    details.text = data[i].cameraName;

                    c.appendChild(details);

                    console.log(details);
                    var div = document.createElement('div');

                    var img = document.createElement('img');

                    div.appendChild(img);
                    details.appendChild(div);
                    setTimeout(refresh(img, data[i]), 200);

                    elem.appendChild(c);
                }
            }
        });
    });
});

function refresh(img, data) {
    img.width = 760;
    img.height = 480;
    img.src = data.cameraURL;
    // img.src = data.cameraURL;
}