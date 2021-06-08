import PedidosRepository from '../repositories/pedido.repository.js';

async function totalValueByClient(nome){
  const pedidos = await PedidosRepository.getPedidos();
  return pedidos
    .filter(q => q.entregue && q.cliente && q.cliente === nome)
    .map(q => q.valor)
    .reduce((a, b) => a + b, 0);
}

async function totalValueByProduct(nome){
  const pedidos = await PedidosRepository.getPedidos();
  return pedidos
    .filter(q => q.entregue && q.produto && q.produto === nome)
    .map(q => q.valor)
    .reduce((a, b) => a + b, 0);
}

async function topProducts(){
  const lista = [];
  const pedidos = await PedidosRepository.getPedidos();
  const entregues = pedidos
    .filter(q => q.entregue);
  entregues.forEach(p => {
    let index = lista.findIndex(q => q.produto == p.produto);
    if(index < 0) {
      lista.push({ produto: p.produto, quantidade: 1});
    } else {
      lista[index].quantidade++;
    }
  });

  let ordenada = lista
  .sort((a,b) => (a.quantidade < b.quantidade) ? 1 : (b.quantidade < a.quantidade) ? -1 : 0);
  return ordenada.map(q => `${q.produto} - ${q.quantidade}`);
}

export default {
  totalValueByProduct,
  totalValueByClient,
  topProducts
}