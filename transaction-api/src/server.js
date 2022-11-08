require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');

const TransactionController = require('./controllers/TransactionController');
const { create, getUserTransactions } = TransactionController;

const { DB_USER, DB_PASSWORD, PORT } = process.env;

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@archcluster.bkue2h8.mongodb.net/database?retryWrites=true&w=majority`
)
    .then(() => {
        app.listen(PORT, () => {
            console.log('Ouvindo porta', PORT);
            console.log('Conectado ao MongoDB');
        });
    })
    .catch((err) => console.log(err));

app.post('/transaction', create);
app.get('/transaction', getUserTransactions);
