const express = require('express');
const { engine } = require('express-handlebars');
const viewRoutes = require('./routes/index');
const apiRoutes = require('./routes/api');

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./src/public'));

app.use('/api', apiRoutes);
app.use('/', viewRoutes);

module.exports = app;
