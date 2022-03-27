const mongoose = require('mongoose');
const songSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    song_name: {
        type: String,
        required: true
    },
    //song_id: { type: String },

    song_hash: { type: String },
    genre: { type: String },
    song_url: { type: String },

    artist_id: {
        type: String
    }
})
module.exports = mongoose.model('Song', songSchema);