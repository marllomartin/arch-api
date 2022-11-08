const app = require('./app');
const mongoose = require('mongoose');

const UserController = require('./controllers/UserController')
const { create, getUserBalance } = UserController;

const port = 3001;

const DB_USER = "arch";
const DB_PASSWORD = "Os3b2CNjzfkM9Kff";

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@archcluster.bkue2h8.mongodb.net/database?retryWrites=true&w=majority`
)
    .then(() => {
        app.listen(port, () => {
            console.log('Ouvindo porta', port);
            console.log('Conectado ao MongoDB');
        });
    })
    .catch((err) => console.log(err));


app.post('/user', create);
app.get('/user/:id', getUserBalance);
