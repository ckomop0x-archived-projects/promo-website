import express from 'express';
const path = require('path');
import routes from './routes';

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Serve static files
app.use(express.static(path.join(__dirname, './static')));

app.use(routes());

app.listen(PORT, () =>
  console.log(`Express server is listening on port ${PORT}`)
);
