mongo printCloud <<  ?

db.cameras.save({
"cameraId" : "001-002-003-0005",
"cameraName" : "print cam 2",
"cameraURL" : "http://print-cam-2:8080/stream.html",
"resourceName" : "plastic printer one",
"resourceDesc" : [ 
"arduino based", 
"print speed 12000"
]
});

db.cameras.save({
"cameraId" : "001-002-003-0006",
"cameraName" : "print cam 1",
"cameraURL" : "http://print-cam-1:8080/stream.html",
"resourceName" : "metal printer one",
"resourceDesc" : [ 
"arduino based", 
"print speed 12000"
]
});

exit
?
