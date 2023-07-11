const express = require('express');
var localStorage = require('local-storage');

const bodyparser = require('body-parser');

const login = require('./routes/login');
const home = require('./routes/home');

const app = express();

app.use(login);
app.use(home);



app.listen(9000);
