const express =  require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());

express.listen(3333);