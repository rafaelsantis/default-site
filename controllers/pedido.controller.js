import PedidoService from '../services/pedido.service.js';
import Joi from 'joi';

const totalValueByClientSchema = Joi.object({
  cliente: Joi.string()
      .required()
  });

const totalValueByProductSchema = Joi.object({
  produto: Joi.string()
      .required()
  });

function validate(schema, obj) {
  let o = schema.validate(obj);
  if(o.error){
    return { error: o.error };
  } else {
    return o.value;
  }
}

async function totalValueByClient(req, res, next){
  let o = validate(totalValueByClientSchema, req.body);
  if(o.error)
    res.status(400).send(o);
  else
    res.send({ totalCliente: await PedidoService.totalValueByClient(o.cliente) });
}

async function totalValueByProduct(req, res, next){
  let o = validate(totalValueByProductSchema, req.body);
  if(o.error)
    res.status(400).send(o);
  else
    res.send({ totalProduto: await PedidoService.totalValueByProduct(o.produto) });
}

async function topProducts(req, res, next){
  res.send({ topProdutos: await PedidoService.topProducts() });
}

export default {
  totalValueByProduct,
  totalValueByClient,
  topProducts
}