var mongoose = require('mongoose');

var DogModel;

var DogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
	
	breed: {
        type: String,
        required: true,
        trim: true,
    },
    
    age: {
        type: Number,
        min: 0,
        required: true
    },
    
    createdData: {
        type: Date,
        default: Date.now
    }

});

DogSchema.statics.findByName = function(name, callback) {

    var search = {
        name: name
    };

    return DogModel.findOne(search, callback);
};

DogModel = mongoose.model('Dog', DogSchema);

//export our public properties
module.exports.DogModel = DogModel;
module.exports.DOgSchema = DogSchema;