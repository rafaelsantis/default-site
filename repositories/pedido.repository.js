import { promises as fs } from 'fs';

const { readFile } = fs;

async function getPedidos() {
  let arrStr = await readFile('./pedidos.json', 'utf-8');
  return JSON.parse(arrStr).pedidos;
}

export default {
  getPedidos
}