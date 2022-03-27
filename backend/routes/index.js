const express = require('express');
const song = require('../models/song');
const router = express.Router();
const Song = require('../models/song');
var formidable = require('formidable');
const multer = require('multer');
const upload = multer();
const fs = require('fs');
var crypto = require('crypto');

// const elastic = require('elasticsearch');
// const elasticClient = elastic.Client({
//     host: 'localhost:5000'
// })

// var parse = require('csv-parse');
// var parser = parse({columns: true}, function (err, records) {
// 	console.log(records);
// });

// router.


router.post('/userSignup', (req, res) => {
    // User Signup Code
    let email = req.body.email;
    let password = req.body.password;
});

router.post('/userLogin', (req, res) => {
    // User Login Code
    let email = req.body.email;
    let password = req.body.password;
});

router.post('/artistSignup', (req, res) => {
    // Artists Signup Code
    let email = req.body.email;
    let password = req.body.password;
});

router.post('/artistLogin', (req, res) => {
    // Artists Login Code
    let email = req.body.email;
    let password = req.body.password;
});

router.post('/artistLogin', (req, res) => {
    // Artists Login Code
    let email = req.body.email;
    let password = req.body.password;
});

router.post('/addAlbums'), (req, res) => {

    console.log("heyy");


    song_url = "D:codeshastra/data", req.body.song_name
    song_hash = str(Date.now()) + req.body.song_name
    song_hash = functions.encrypt(song_hash)



    song = new Song({
        _id: mongoose.Types.ObjectId(),
        song_name: req.body.song_name,
        song_hash: song_hash,
        genre: req.body.genre,
        song_url: song_url,
        artist_id: req.body.artist_id
    })
    return song.save()
        .then(result => {
            res.status(201).json({
                result: result,
                message: "Album created"
            })
        })




}

router.post('/upload', upload.single('soundBlob'), function (req, res) {
    console.log('inside')
    console.log(__dirname + '\\data\\' + req.file.originalname.split('.mp3')[0] + '_song.mp3');

    var crypto = require('crypto');
    var name = new Date().toISOString();
    var hash = crypto.createHash('sha256').update(name).digest('hex');

    // console.log(req.file); // see what got uploaded

    let uploadLocation = __dirname + '\\data\\' + req.file.originalname.split('.mp3')[0] + '_song.mp3' // where to save the file to. make sure the incoming name has a .wav extension

    fs.writeFileSync(uploadLocation, Buffer.from(new Uint8Array(req.file.buffer))); // write the blob to the server as a file

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("muzikchain");
            var myobj = {
                'songHash': hash,
                'songName': req.body.name,
                'genre': req.body.genre,
                'songUrl': __dirname + '\\data\\' + req.file.originalname.split('.mp3')[0] + '_song.mp3',
                'artistId': req.body.artistId
            };
            dbo.collection("songs").insertOne(myobj, function (err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
            });
        });

    res.sendStatus(200); //send back that everything went ok

})

router.get('/getsongs', (req, res) => {
    // Artists Login Code
    var jsonFile = require("../songs/data.json");
    res.json(jsonFile);
})


module.exports = router;