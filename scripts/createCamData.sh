mongo printCloud <<  ?
db.cameras.remove({});
db.cameras.save({
"cameraId" : "001-002-003-0005",
"cameraName" : "Metal Printer ",
"cameraURL" : "http://54.3.168.33:8080/?action=stream",
"jobId" : 'JOB-01967523',
"owner" : "Marc Durante",
"resourceName" : "Metal printer one",
"resourceDesc" : [ 
"arduino based", 
"print speed 12000"
]
});

db.cameras.save({
"cameraId" : "001-002-003-0006",
"cameraName" : "Plastic Printer",
"cameraURL" : "http://54.3.168.33:8081/?action=stream",
"jobId" : 'JOB-0876958',
"owner" : "Nathan Robinson",
"resourceName" : "Plastic printer one",
"resourceDesc" : [ 
"arduino based", 
"print speed 12000"
]
});
db.cameras.save({
"cameraId" : "001-002-003-0007",
"cameraName" : "Polymer Printer",
"cameraURL" : "http://54.3.168.33:8080/?action=stream",
"jobId" : 'JOB-87432516',
"owner" : "Mathew Goldman",
"resourceName" : "Polymer printer one",
"resourceDesc" : [ 
"arduino based", 
"print speed 12000"
]
});

db.cameras.save({
"cameraId" : "001-002-003-0008",
"cameraName" : "Polymer Printer 2",
"cameraURL" : "http://54.3.168.33:8081/?action=stream",
"jobId" : 'JOB-5698333',
"owner" : "Jaffie Rajan",
"resourceName" : "Polymer printer two",
"resourceDesc" : [ 
"arduino based", 
"print speed 12000"
]
});

db.cameras.save({
"cameraId" : "001-002-003-0009",
"cameraName" : "Metal Printer 2",
"cameraURL" : "http://54.3.168.33:8080/?action=stream",
"jobId" : 'JOB-87896632516',
"owner" : "GOPI",
"resourceName" : "Metal printer two",
"resourceDesc" : [ 
"arduino based", 
"print speed 12000"
]
});
exit
?
