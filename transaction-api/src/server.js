require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const TransactionController = require('./controllers/TransactionController');

const { create, getUserTransactions } = TransactionController;

const PORT = 3001;
const { DB_USER, DB_PASSWORD } = process.env;

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@archcluster.bkue2h8.mongodb.net/database?retryWrites=true&w=majority`,
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
