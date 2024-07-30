const request = require('supertest');
const app = require('./app')

describe('TesteRetornaListaPedido', ()=>{
    test('ListaVaziaPedido', async () =>{
        const res = await request(app).get('/ListarPedido');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([]);  
    })

    test('CriarPedido', async ()=>{
        const endereco = {
            latitude: 2,
            longitude: 2
        }

        const produto = 'Geladeira';
        const quantidade = 2;

        const pedido = {endereco, produto, quantidade};
        const res = await
        request(app).post('/CriarPedido').send(pedido);
        expect(res.statusCode).toEqual(201);

        expect(res.body.endereco).toEqual(pedido.endereco);

        expect(res.body.latitude).toEqual(pedido.endereco.latitude);
        expect(res.body.longitude).toEqual(pedido.endereco.longitude);
        expect(res.body.produto).toEqual(pedido.produto);
        expect(res.body.quantidade).toEqual(pedido.quantidade);
    })
})

describe('TesteRetornoListaRota', () =>{
    test('ListaVaziaRotas', async ()=>{
        const res = await request(app).get('/ListarRota');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([]);
    })

    test('/CriarRota', async ()=>{
        const latitude = 2;
        const longitude = 2;

        const rota = {longitude, latitude};
        const res = await
        request(app).post('/CriarRota').send(rota);
        expect(res.statusCode).toEqual(201);

        expect(res.body.latitude).toEqual(rota.latitude);
        expect(res.body.longitude).toEqual(rota.longitude);
    })
})