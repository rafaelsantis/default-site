import express from "express";
import pedidoController from '../controllers/pedido.controller.js';

const router = express.Router();

router.post('/totalValueByProduct', pedidoController.totalValueByProduct);
router.post('/totalValueByClient', pedidoController.totalValueByClient);
router.get('/topProducts', pedidoController.topProducts);

export default router;

/*

app.post('/', async (req, res) => {
  res.send('Ola mundo');
});

app.post('/pedido', async (req, res) => {
  let pedido = await recuperaPedidosDAO();
  res.send(await pedido.create(req.body));
});

app.put('/pedido', async (req, res) => {
  let pedido = await recuperaPedidosDAO();
  res.send(await pedido.update(req.body));
});

app.put('/pedido/status_change', async (req, res) => {
  let pedido = await recuperaPedidosDAO();
  res.send(await pedido.statusChange(req.body));
});

app.delete('/pedido', async (req, res) => {
  let pedido = await recuperaPedidosDAO();
  res.send(await pedido.remove(req.params.ID));
});

app.get('/pedido/:ID', async (req, res) => {
  let pedido = await recuperaPedidosDAO();
  res.send(await pedido.get(req.params.ID));
});

app.get('/pedido/totalValueByClient/:CLIENT', async (req, res) => {
  let pedido = await recuperaPedidosDAO();
  res.send(await pedido.totalValueByClient(req.params.CLIENT));
});

app.get('/pedido/totalValueByProducts/:PRODUCT', async (req, res) => {
  let pedido = await recuperaPedidosDAO();
  res.send(await pedido.totalValueByProducts(req.params.PRODUCT));
});

app.get('/pedido/topProducts', async (req, res) => {
  let pedido = await recuperaPedidosDAO();
  res.send(await pedido.topProducts());
});*/