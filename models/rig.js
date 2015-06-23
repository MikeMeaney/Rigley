//rigWeb Rig Schema
//Written by Mike Meaney in San Diego, CA (2015)

//The model for what a test rig is.
//It has the following:
//	-Status (Online / Offline / In use)
//	-Sub-Status(Waiting/ Test Starting /Hand Insterted)
//	-Identifier(Unique for each one)

//Get the needed things
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create a Rig Schema
var rigSchema = new Schema({
	ID : String,
	CurrentPID : String,
	State : String,
});

//The Schema does nothing morh boo right now
//we need to create a model using It
var Rig = mongoose.model('Rig', rigSchema);

//Make this availble to our Rigs in our Node Apps.
module.exports = Rig;