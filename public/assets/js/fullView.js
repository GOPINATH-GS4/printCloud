function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomOwner() {
    var owner = ['marc_durante@merck.com', 'matt_godman@merck.com', 'nathan_robinson@merck.com', 'jaffie_rajan@merck.com'];

    console.log(getRandom(0, owner.length - 1));
    return owner[getRandom(0, owner.length - 1)];
}

function returnOwner(index) {
    var owner = ['marc_durante@merck.com', 'matt_godman@merck.com', 'nathan_robinson@merck.com', 'jaffie_rajan@merck.com'];

    return owner[index % 4];

}

function returnJobId(index) {

    var jobId = ['Job-128756', 'Job-345679', 'Job-984321', 'Job-675878'];
    return jobId[index % 4];
}
$(function() {
    $(document).ready(function() {
        HTTPRequest.get('/v1/camera/' + cameraId, function(status, headers, content) {

            var x = JSON.parse(content);
            console.log(x);
            if (x.status === 200) {
                var data = x.result.data;

                var elem = document.getElementById('camera');
                var owner = document.getElementById('owner');
                var jobId = document.getElementById('jobId');

                console.log(data.cameraName);

                var c = document.createElement('div');
                c.className = 'col-sm-4';
                c.id = data.cameraId;

                var details = document.createElement('p');
                details.className = 'choose-red break-down-2';
                details.innerHTML = data.cameraName;
                details.text = data.cameraName;

                c.appendChild(details);

                console.log(details);
                var div = document.createElement('div');

                var img = document.createElement('img');
                img.width = 640;
                img.height = 360;

                img.src = data.cameraURL;

                div.appendChild(img);
                details.appendChild(div);

                jobId.innerHTML = 'Job Id : ' + data.jobId;

                owner.innerHTML = 'Owner : ' + data.owner;

                /* 
                setInterval(function() {
                    refresh(img, data)
                }, 200);
                */
                elem.appendChild(c);
            }
        });
    });
});

function refresh(img, data) {
    img.width = 640;
    img.height = 360;
    console.log('refreshing');
    img.src = 'http://i2.cdn.turner.com/cnn/2013/images/07/10/3d.printing.jpg';
    // img.src  = data.cameraURL;
    // img.src = data.cameraURL;
}