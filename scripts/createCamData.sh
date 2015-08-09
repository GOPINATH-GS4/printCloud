mongo printCloud <<  ?
db.camera.remove({});

db.cameras.save({
"CameraId" : "001-002-003-0005",
"cameraName" : "Metal Printer ",
"cameraURL" : "http://www.extremetech.com/wp-content/uploads/2012/10/MakerBot-Replicator-2.jpg",
"attr": [{
  "name": "type",
  "value": "metal printer"
 },{
  "name":"hardware",
  "value": "3ds"
 }]
});

db.cameras.save({
"CameraId" : "001-002-003-0002",
"cameraName" : "Plastic Printer ",
"cameraURL" : "http://www.extremetech.com/wp-content/uploads/2012/10/MakerBot-Replicator-2.jpg",
"attr": [{
  "name": "type",
  "value": "plastic printer"
 },{
  "name":"hardware",
  "value": "3ds"
 }]
});
exit
?
