const express = require('express');
const router = express.Router();
const { promises: fs} = require('fs');

router.get('/', async (req, res) => {
    const p = __dirname.split("/");
    p.pop();
    let path = p.join("/");
    const dir = path + '/public/uploads';
    const files = await fs.readdir(dir, (err, files) => {
        if(err){
            console.log(err);
        }
    });
    let filesWithPath = [];
    for(let i=0; i<files.length; i++){
        filesWithPath[i] = "/uploads/"+files[i];
    }
    res.render('images', {src: filesWithPath});
});

module.exports = router;