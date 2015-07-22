#  PrintCloud

### Requirements : 
#### MongoDB should be running 
#### nodejs should be installed 
               
               
### Camera Data                
Create Dummy camera data - Note Mongo should be running locally 

cd scritps 
./createCamData.sh

### Start the application 
to start the app 
node server.js 



## Get Camera 
Get all the camera attached to the system 

| parameter   | value                                                                |
|-------------| ---------------------------------------------------------------------|
| end point   | /v1/camera                                            |
| verb        | GET                                                   |
| example     | http://localhost:7777/v1/camera                 | 


## Get Camera by ID 
Get camera by ID attached to the system 

| parameter   | value                                                                |
|-------------| ---------------------------------------------------------------------|
| end point   | /v1/camera/:1                                            |
| verb        | GET                                                 |
| example     | http://localhost:7777/v1/camera/001-002-003-005 | 



