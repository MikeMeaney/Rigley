//rigWeb Rig Data Schema
//Written by Mike Meaney in San Diego, CA (2015)

//The model for how Data is handled from a Rig.
//It has the following:
//	-Status (Online / Offline / In use)
//	-Sub-Status(Waiting/ Test Starting /Hand Insterted)
//	-Identifier of the Rig(to know which one)

//Get the needed things
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create Rig Data Schema
var rigDataSchema = new Schema({
	RigID : String,
	PID : String,
	Data : {
		timeCreated: Date,
		timeIn : String,
		timeOut : String,
		durration : String
	},
});

//---------- Custom Functions ----------------

//Time Stamp on time server created record
rigDataSchema.methods.timeStamp = function(){
	this.timeCreated = new Date();
};

//----------- End of Custom Functions ----------


//Do this stuff before saving
rigDataSchema.pre('save', function(next){
	this.timeStamp(); // Time stamp it
	  // if created_at doesn't exist, add to that field
  	if (!this.timeCreated)
    	this.timeCreated = Date();

	next();
});

//The Schema does nothing morh boo right now
//we need to create a model using It
var RigData = mongoose.model('RigData', rigDataSchema);

//Make this availble to our Rigs in our Node Apps.
module.exports = RigData;