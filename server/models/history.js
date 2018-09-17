const mongoose = require('mongoose');

const historySchema = mongoose.Schema({
	doctor_name:{
	type:String,
	required:true
	},
	visit_date:{
	type:Date,
	default:Date.now
	},
	doctor_remarks:{
		type:String,
		required:false
	},
	medicines:[{
		med_name:String,
	}],
	diseases:[{
		disease_name:String,
	}],
	patient:{
	type:String,
	required:true
	}
});

let History = module.exports = mongoose.model('History',historySchema);

module.exports.getHistory = (id,callback,limit) => {
	History.find({patient:id},callback).limit(limit);
}
module.exports.getHistoryById = (id,callback) => {
	let query = {patient:id};
	History.findOne(query,callback);
}

module.exports.addHistory = (history,callback) => {
	let add = {
		doctor_name:history.doctor_name,
		medicines:history.medicines,
		diseases:history.diseases,
		patient:history.patient,
	}
	History.create(add,callback);
}