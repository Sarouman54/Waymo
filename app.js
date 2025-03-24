const express = require('express');
const app = express();

require('dotenv').config;
app.use(express.json());

app.use((req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !'});
});

module.exports = app;