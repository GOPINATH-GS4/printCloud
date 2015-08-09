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

function click(ev) {
    console.log(ev.target.id);
    window.location = '/v1/camview/' + ev.target.id;
}

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
                    c.className = 'col-sm-4';
                    c.id = data[i].cameraId;

                    var details = document.createElement('p');
                    details.className = 'choose-red break-down-2';
                    details.innerHTML = data[i].cameraName;
                    details.text = data[i].cameraName;

                    c.appendChild(details);

                    console.log(details);
                    var div = document.createElement('div');

                    var img = document.createElement('img');
                    img.id = data[i].cameraId;
                    img.addEventListener('click', click);
                    div.appendChild(img);
                    details.appendChild(div);
                    img.src = data[i].cameraURL;
                    img.height = 180;
                    img.width = 240;
                    /*
                    refresh(img, data, i);

                    var self = this;
                    self.img = img;
                    self.data = data;
                    self.mIndex = i;
                    setInterval(function() {
                        refresh(self.img, self.data, self.mIndex)
                    }, 200);
                    */

                    var jobDiv = document.createElement('div');
                    jobDiv.className = 'choose-small';
                    jobDiv.innerHTML = 'Job Id : ' + data[i].jobId;

                    var jobOwner = document.createElement('div');
                    jobOwner.className = 'choose-small break-down-2';
                    jobOwner.innerHTML = 'Owner : ' + data[i].owner;


                    details.appendChild(jobDiv);
                    details.appendChild(jobOwner);

                    elem.appendChild(c);
                }
            }
        });
    });
});

function refresh(img, data, mIndex) {
    img.width = 240;
    img.height = 180;
    img.src = 'http://i2.cdn.turner.com/cnn/2013/images/07/10/3d.printing.jpg';
    console.log('refreshing:-' + mIndex + '-' + data[mIndex].cameraId);
    // img.src  = data.cameraURL;
    // img.src = data.cameraURL;
}
