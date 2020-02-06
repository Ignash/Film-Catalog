const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const config = require('../config/db')

const UserSchema = mongoose.Schema({
    name:{
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserByLogin = (login, calback) => {
    const query = {login: login};
    User.findOne(query, calback)
};

module.exports.getUserById = (login, calback) => {
    User.findById(id, calback)
};

module.exports.addUser = (newUser, calback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            // if(err) throw err;
            newUser.password = hash;
            User.create(newUser)
        })
    })
};

module.exports.comparePass= (passFromUser, passUserDB, calback) => {
    bcrypt.compare(passFromUser, passUserDB, (err, isMatch) => {
        if(err) throw err;
        calback(null, isMatch);
    })
};