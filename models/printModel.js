var mongoose = require('mongoose'),
    db = mongoose.createConnection('localhost:27017/printCloud'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var printModel = function() {

    /**
     *
     * @type {mongoose.Schema}
     * object to store valid corp email address domains e.g. koneksahealth.com, kh.com, khcorp.com
     * schema cannot be instantiated outside
     */

    var Camera = new Schema({
        cameraId : String, 
        cameraName : String, 
        cameraURL : String, 
        resourceName : String, 
        resourceDesc : [String]
    });

    this.Cameras = db.model('Cameras', Camera);
    this.db = db;

};
exports.printModel = printModel;
