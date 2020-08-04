"use strict";
const AUTH = require('./auth');
const OPS = require('./ops');

module.exports = (app)=>{
	app.use('/api/login',require('./login'));
	app.use('/api/applyJSONpatch',AUTH.isAuthenticated,OPS.applyJSONpatch);
	app.use('/api/downloadThumbnail',AUTH.isAuthenticated,OPS.downloadThumbnail);
}