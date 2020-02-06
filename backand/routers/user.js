const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db')

router.post('/registration', (req, res) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if (err){ 
        console.log(err);
            res.json({sucsess: false, mg: 'No'});}
        else 
            res.json({sucsess: true, mg: 'Yes'});
    })
});

router.post('/login', (req, res) => {
    const login = req.body.login;
    const password = req.body.password;

    User.getUserByLogin(login,(err, user) => {
        if(err) throw err;
        if(!user) 
            return res.json({succses: false, ms: 'No user.'});
        
        User.comparePass(password, user.password), (err, isMatch) => {
            if(err) throw err;
            if(isMatch) {
                const token = jwt.sign(user, config.secret, {
                    expiresIn: 3600 * 24
                });

                res.json({
                    succses: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        email: user.email,
                    }
                })
            } else {
                return res.json({succses: false, ms: 'Password diffrend'})
            }
        }
    })
});

module.exports = router;


