const http = require('http');
const app = require('./app');
const mongoose = require ('mongoose');

mongoose.connect(process.env.ATLAS_URI)
    .then(() => console.log('🟢 Connexion à MongoDB réussie !'))
    .catch((error) => console.log('🔴 Connexion à MongoDB échouée !', process.env.ATLAS_URI));

app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);

server.listen(process.env.PORT || 3000);