const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let pedidos = [];
let rotas = [];
let melhorRota = [];

app.get('/', (req, res) => {
    res.send('Ola Mundo!');
});

app.get('/ListarPedido', (req, res) =>{
    res.status(200).json(pedidos);
}) 

app.get('/ListarRota', (req, res) =>{
    res.status(200).json(rotas);
})

//app.get('/MelhorRota', (req, res) =>{
  //  res.status(200).json(melhorRota);
//})


app.post('/CriarPedido', (req, res) =>{
    const {longitude, latitude, endereco, produto, quantidade} = req.body; 
    const pedido = {id: pedidos.length +1, longitude, latitude, endereco, produto, quantidade}
    pedidos.push(pedido); 
    res.status(201).json(pedido);
})

app.post('/CriarRota', (req, res) =>{
    const {latitude, longitude} = req.body; 
    const rota = {id: rotas.length +1, longitude, latitude}
    rotas.push(rota); 
    res.status(201).json(rota);
})

//app.post('/CriarMelhorRota', (req, res) =>{

//})
module.exports = app;

app.listen(port, () =>{
    console.log(`aplicação rodando em http://localhost:3000${port}`);
})

