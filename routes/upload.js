const express = require('express');
const router = express.Router();

const multer = require('multer');

// Set Storage Engine
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req, file, callback){
        callback(null, file.originalname);
    }
});

// Init upload
const upload = multer({
    storage: storage
}).single('image');

router.post('/', (req, res) => {
    upload(req, res, (err) => {
        if(err){
            console.log(err);
        }
        else{
            res.render('index',{message: 'Image uploaded Successfully'});
        }
    });
});

module.exports = router;