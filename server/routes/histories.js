const express = require('express');
let router = express.Router();

let History = require('../models/history.js');

/*Add a history*/
router.post('/',(req,res) => {
	let history = req.body;
 History.addHistory(history, (err, data) => {
 	if(err){
 		res.send(err);
 	}
 	console.log("working");
 	res.json(data);
 })

});

/*fetch all the histories of unique patient*/
router.get('/findAll/:id', (req,res) => {
	console.log("params: " + req.params.id);
	History.getHistory(req.params.id, (err, data) => {
 	if(err){
 		res.send("Error:" + err);
 	}
 	console.log("working");
 	res.json(data);
 })
});

/*returns a specific history*/
router.get('/:id',(req,res) => {

	console.log("params: " + req.params.id);
 	History.getHistoryById(req.params.id, (err, data) => {
 		if(err){
 			res.send(err);
 		}
 		console.log("working");
 		res.json(data); 		
 	})

});

module.exports = router;