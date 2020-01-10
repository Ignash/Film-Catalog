
const mongoose = require('mongoose');

const { Schema } = mongoose;

const FilmSchema = new Schema ({
    id: Number,
    title: String,
    original_title: String,
    poster_path: String,
    overview: String,
    release_date: String,
    genre_ids: Array
})

module.exports = mongoose.model('Film', FilmSchema);