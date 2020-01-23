const express = require('express');
const mongoose = require('mongoose');
const { createServer } = require('http');
const app = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');

 app.use(cors())
 app.use(bodyParser.json())

mongoose.connect('mongodb://yander:yander@cluster0-shard-00-00-ekjj1.mongodb.net:27017,cluster0-shard-00-01-ekjj1.mongodb.net:27017,cluster0-shard-00-02-ekjj1.mongodb.net:27017/FilmCatalog?ssl=true&replicaSet=cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
// mongoose.connect('mongodb+srv://yander:yander@cluster0-ekjj1.mongodb.net/FilmCatalog?retryWrites=true&w=majority', {
//     useNewUrlParser: true
//   })
.then(()=> console.log('MongoDb, connected'))
.catch(err => console.log(err));


const Films = require('./models/Film');

app.get('/films', (req, res) => {
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

const Genre = require('./models/Genre');

app.get('/films/genre/:id', (req, res) => {
    Genre.find({id: +req.params.id})
    .then((genre) => res.send(genre))
    .catch(err => res.send(err));
})

app.get('/films/:id', (req, res) => {
    Films.find({ id: +req.params.id })
    .then((film) => {res.send(film)})
    .catch(err => res.send(err));
});

const Сredits = require('./models/Сredits')
app.get('/films/:id/persons', (req, res) => {
    Сredits.find({ id: +req.params.id })
    .then((Сredits) => {res.send(Сredits)})
    .catch(err => res.send(err));
});



const server = createServer(app);
server.listen(port, () => console.log(`server is up port: ${port}`));