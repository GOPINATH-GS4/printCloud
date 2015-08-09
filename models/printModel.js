var mongoose = require('mongoose'),
    db = mongoose.createConnection('localhost:27017/printCloud'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var printModel = function() {

    /**
     *
     * @type {mongoose.Schema}
     *
     */

    var Camera = new Schema({
        cameraId: {
            type: String,
            index: {
                unique: true
            }
        },
        cameraName: {
            type: String,
            required: true
        },
        cameraURL: String,
        attr: [Attributes]
    });

    var Printer = new Schema({
        printerId: {
            type: String,
            index: {
                unique: true
            }
        },
        printerName: {
            type: String,
            required: true
        },
        printerURL: String,
        attr: [Attributes]

    });

    var Attributes = new Schema({
        name: String,
        value: String
    });

    this.Cameras = db.model('Cameras', Camera);
    this.Printers = db.model('Printers', Printer);

    this.db = db;

};
exports.printModel = printModel;
