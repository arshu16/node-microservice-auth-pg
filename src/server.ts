import express from 'express';
import bodyParser = require('body-parser');
import router from './router';

const server = express();
server.use(bodyParser.json());
server.use(router);

export default server;