const mongoose = require('mongoose');
const { Schema } = mongoose;

PersonSchema = new Schema ({
    id: Number,
    name: String,
    also_known_as: [String],
    birthday: String ,
    place_of_birth: String,
    biography: String,
    profile_path: String
});

module.exports = mongoose.model('Person', PersonSchema)