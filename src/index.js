import express from 'express';
import Producto from './productos';
import path from 'path';
//import routerSave from './routes/save.js';
import routerRead from './routes/read.js';

const app = express();
const puerto = 8080;
const server = app.listen(puerto, () =>
  console.log('Server up en puerto', puerto)
);
server.on('error', (err) => {
  console.log('ERROR ATAJADO', err);
});

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routerRead);