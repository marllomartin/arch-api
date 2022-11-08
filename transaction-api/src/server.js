const app = require('./app');
const mongoose = require('mongoose');

const TransactionController = require('./controllers/TransactionController')
const { create, getUserTransactions } = TransactionController;

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

app.post('/transaction', create);
app.get('/transaction', getUserTransactions);
