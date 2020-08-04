const express = require('express');
const app = express();
const basePath = "/Users/rohankathpal/Documents/Personal/personal/basicApp";
var path = require('path');

app.use(express.json());

require('./route')(app);

app.listen(3000,()=>console.log(`Express server is listening at port 3000`));

module.exports = app;