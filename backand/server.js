const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
// const { createServer } = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config/db');
const films = require('./routers/films');
const user = require('./routers/user');


const app = express();

const port = 3000;

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use(cors())
app.use(bodyParser.json())

mongoose.connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// mongoose.connect('mongodb+srv://yander:yander@cluster0-ekjj1.mongodb.net/FilmCatalog?retryWrites=true&w=majority', {
//     useNewUrlParser: true
//   })
.then(()=> console.log('MongoDb, connected'))
.catch(err => console.log(err));
app.use('/films', films)

app.use('/user', user)

// const server = createServer(app);
app.listen(port, () => console.log(`server is up port: ${port}`));