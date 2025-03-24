const http = require('http');
const connectDB = require('./config/db');
const app = require('./app');

connectDB();

app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);

server.listen(process.env.PORT || 3000);