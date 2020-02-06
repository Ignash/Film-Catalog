const express = require('express')
const router = express.Router();

const Films = require('../models/Film');
const Genre = require('../models/Genre');
const Сredits = require('../models/Сredits')

router.get('/', (req, res) => {
    if(req.query.hasOwnProperty('count')){
        Films.countDocuments({})
        .then(numberFilms => res.send(`${numberFilms}`))
        .catch(err => res.send(err));
    } else {

        const startindex = +req.query.startindex;
        const numberFilms = +req.query.numberFilms;
        
        Films.find().skip(startindex).limit(numberFilms)
        .then(film => res.send(film))
        .catch(err => res.send(err));
    }
});

router.get('/genre/:id', (req, res) => {
    Genre.find({id: +req.params.id})
    .then((genre) => res.send(genre))
    .catch(err => res.send(err));
})

router.get('/:id', (req, res) => {
    Films.find({ id: +req.params.id })
    .then((film) => {res.send(film)})
    .catch(err => res.send(err));
});

router.get('/:id/persons', (req, res) => {
    Сredits.find({ id: +req.params.id })
    .then((Сredits) => {res.send(Сredits)})
    .catch(err => res.send(err));
});

module.exports = router;