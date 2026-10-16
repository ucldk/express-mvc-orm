import express from 'express';
import { engine } from 'express-handlebars';
import viewRoutes from './routes/index.js';
import apiRoutes from './routes/api.js';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./src/public'));

app.use('/api', apiRoutes);
app.use('/', viewRoutes);

export default app;
