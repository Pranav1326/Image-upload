const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

const homeRoute = require('./routes/home');
const uploadRoute = require('./routes/upload');
const imagesRoute = require('./routes/images');

app.use('/',homeRoute);

app.use('/upload',uploadRoute);

app.use('/images',imagesRoute);

const port = process.env.port || 3000; 

app.listen(port, () => console.log(`Server started on port ${port}!`));