// app.js

const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Sikeresen csatlakozva az adatbázishoz');
})
.catch((err) => {
  console.error('Hiba történt a csatlakozás során:', err);
});

app.listen(port, () => {
  console.log(`A szerver fut a http://localhost:${port} címen.`);
});
