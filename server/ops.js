"use strict";

const jsonpatch = require('jsonpatch');
const Jimp = require('jimp');

exports.applyJSONpatch = (req,res)=>{
	let doc = req.body.doc;
	let patch = req.body.patch;
	return res.status(200).json(jsonpatch.apply_patch(doc, patch))
};

exports.downloadThumbnail = (req,res)=>{
	let imgUrl = req.body.imgUrl;
	Jimp.read(imgUrl)
	.then(image => {
	    image.resize(50, 50);
	    res.setHeader('Content-Type', 'image/jpg');
	    return res.status(200).send(image);
	})
	.catch(err => {
	    return res.status(500).json({message : err.message})
	});	
};