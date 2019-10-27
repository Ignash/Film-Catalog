const express = require('express');
const mongoose = require('mongoose');
const { createServer } = require('http');
const app = express();
const port = 3000;
const cors = require('cors');

 app.use(cors())

mongoose.connect('mongodb://yander:yander@cluster0-shard-00-00-ekjj1.mongodb.net:27017,cluster0-shard-00-01-ekjj1.mongodb.net:27017,cluster0-shard-00-02-ekjj1.mongodb.net:27017/FilmCatalog?ssl=true&replicaSet=cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
// mongoose.connect('mongodb+srv://yander:yander@cluster0-ekjj1.mongodb.net/FilmCatalog?retryWrites=true&w=majority', {
//     useNewUrlParser: true
//   })
.then(()=> console.log('MongoDb, connected'))
.catch(err => console.log(err));

const FilmsSchema = new mongoose.Schema({
        id: {
            type: 'Number',
            require: true
        },
        name: {
            type: 'String',
            require: true
        },
        year: {
            type: 'String',
            require: true
        },
        imgUrl: {
            type: 'String',
            require: true
        },
        description:{
            type: 'String',
            require: true
        },
        chosen:{
            type: 'Boolean',
            require: true
        }
    }
);

const Films = mongoose.model('Films', FilmsSchema);



app.get('/films/page/:id', (req, res) => {
    let number_requests = +req.params.id;
    let number_films_response = 3;
    let index_film_response = number_requests === 1 ? 0 : ((number_requests - 1)*number_films_response);
    
    Films.find().skip(index_film_response).limit(number_films_response)
    .then(film => res.send(film))
    .catch(err => res.send(err));
});

const server = createServer(app);
server.listen(port, () => console.log(`server is up port: ${port}`));