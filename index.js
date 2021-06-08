
import express from 'express';
import pedidosRouter from './routes/pedido.routes.js';

const app = express();
app.use(express.json());
app.use('/pedido', pedidosRouter);

app.listen(3000, () => {
  console.log('API started in port 3000');
});
