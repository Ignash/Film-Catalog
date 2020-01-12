const mongoose = require('mongoose');
const { Schema } = mongoose;

FilmActorsSchema = new Schema ({
    id: Number,
    cast: [{
        id: Number,
        name: String,
        character: String,
        profile_path: String
    }],
    crew: [{
        id: Number,
        name: String,
        job: String,
        profile_path: String
    }]
});

module.exports = mongoose.model('FilmActors', FilmActorsSchema)

