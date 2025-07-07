import 'dotenv/config';
import connectDB from './config/db.js';
import express from 'express';
import morgan from 'morgan';
import productsRouter from './routers/products.js';

const server = express();
const host = process.env.HOST || 'http://localhost';
const port = process.env.PORT || 3000;

connectDB();

server.use(express.json());
server.use(morgan('dev'));
server.use('/products', productsRouter);

server.get('/', (request, response) => {
  response.status(204).send();
});

server.listen(port, () => {
  console.log(`Server is running at ${host}:${port}`);
});

//sofiajeronimocamargo bMdp627p2ITRfAcy
//mongodb+srv://sofiajeronimocamargo:utZqZ4A013SnqSdZ@cluster0.ksm1l4v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0