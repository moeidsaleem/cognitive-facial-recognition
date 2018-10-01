const express = require('express');
const oxford = require('project-oxford');
const  client = new oxford.Client('487c4337961b4cb7830e5b2bbe3ba7ad','westcentralus');
let router = express.Router();
let base64Img = require('base64-img')
let Face = require('../models/face.js');
const cloudinary = require('cloudinary');
var cloudConfig = require('../cloudinary');
cloudinary.config(cloudConfig);


//get all the similar faces matched to the given faces
router.post('/find', (req, res) => {
	console.log(`hitt`)

	/* Conver base64 to Image */
	base64Img.img(req.body.link,'images','photo', function(err, image){

		cloudinary.v2.uploader.upload('./images/photo.jpg', function(error, result) {
			console.log(result);

		//using the project-oxford "detect()" to get a "face ID"
		client.face.detect({
	    url: result.url,
	    returnFaceId: true
		})
		.then(response => {
			/*sending the detected face id to the project-oxrord "similar()" */
			console.log("1. id:" + response[0].faceId);
			client.face.similar(response[0].faceId, {
				candidateFaceListId: req.body.faceList_id,
				maxCandidates: "10",
				mode:"matchFace"	
			}).then(response => {
				/*for finding the face with higest confidence*/
				let higest = response[0];
				for (var i = 1; i > 10; i++)
				{	
					if(response[i].confidence > higest.confidence)
						higest = response[i];
				}
				/*if the face confidence is greater then 0.6 then get that face data from mLab*/
				if(higest.confidence >= 0.6)
				{
					console.log("presistant_face_id" + higest.persistedFaceId)
					Face.getfaceByFaceId(higest.persistedFaceId, (err,face) => {
					if(err){
						res.send(err);
					}
					res.json(face);
					});
				}
				else{
					res.json("Error: Confidence is less then 0.6%");
				}
			}).catch(err =>{
				res.json("ERROR"+err.message);
			console.log("Error: " + err.message);});
		}) 
		.catch(err =>{
			res.json("ERROR"+err.message);
			console.log("Error: " + err.message);});
});
	});
});

/*add a face to the face list in "Cognitive Services" and "mLab"*/
router.post('/',(req,res) => { 
	//Send data to congitive API  /* facelist_id, name, link */
	console.log(`uploading photo...`)
	
	/* Conver base64 to Image */
	base64Img.img(req.body.link,'images','photo', function(err, image){

		cloudinary.v2.uploader.upload('./images/photo.jpg', function(error, result) {
			console.log(result);

	
	/*  */
    let c = client.face;
	let f = c.faceList;
	console.log(`photo received`+ f);
	f.addFace(req.body.facelist_id,{
	url:result.url,
	userData: req.body.name
	})
	.then((response)=>{/*Handle PersistantId into Data if no error found*/
		let data = {
			face_id:response.persistedFaceId,
			face_list_id:req.body.facelist_id,
			name:req.body.name,
			img_url:result.url
		}
		/*save data to mLab*/		
		Face.addFace(data, (err, data) => {
			if(err){
				console.log('DB ERR:'+err)
				res.send(err);
			}		
			console.log('face added in the face list');
			res.json(data);
		});
	}).catch((err)=>{
		console.log('FACE ERR:'+err)
		res.send("Error: " + err.message);});
});


})
});

router.get('/', (req,res) => {
	console.log(`hitting route`);
	Face.getFaces((err, faces) =>{
		if(err)
		{
			res.send("Error: " + err.message);
		}
		console.log(faces);
		res.json(faces);
	});

});





/*delete a face from the mLab and Microsoft Face Api*/
router.delete('/:id',(req,res) => {
	let id = req.params.id;
	/*to get the "presistant_face_id" so that it can be used to delete face from "microsoft face API"*/
	Face.getFaceById(id, (err,face) => {
		if(err)
		{
			res.send("Error: " + err.message);
		}
		else
		{ 
		    let c = client.face;
			let f = c.faceList;
			/*deleting the face from the "microsoft face API"*/
			f.deleteFace(face.face_list_id,face.face_id)
			.then(response =>{
				/*Deleting the face from "mLab"*/
				Face.removeFace(id, (err,face) => {
				if(err){
					res.send("Error: " + err.message);
				}
				res.json(face);
				});
			}).catch(err => {
				res.send("Error: " + err.message);				
			});
		}
	});
});


module.exports = router;