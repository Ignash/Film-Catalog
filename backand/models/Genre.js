const mongoose = require('mongoose');
const { Schema } = mongoose;

const SchemaGenre = new Schema ({
    id: Number,
    name: String
});

module.exports = mongoose.model('Genre', SchemaGenre);