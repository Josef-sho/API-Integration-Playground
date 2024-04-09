const https = require('http');
const port = process.env.PORT || 3010;

const app = require('./app');



const server = https.createServer(app);
server.listen(port);