import express from 'express';
import { engine } from 'express-handlebars';
import viewRoutes from './routes/index.js';
import apiRoutes from './routes/api.js';

const app = express();

// View engine: Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

// Read form data and serve static files (css, images)
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./src/public'));

// Routes
app.use('/api', apiRoutes);
app.use('/', viewRoutes);

export default app;
