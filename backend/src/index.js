const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');
const dotenv = require('dotenv');
dotenv.config();


const {setupWebsocket} = require('./websocket');

const PORT = process.env.PORT || 3333;
const loginMongo = process.env.MONGO_USER;
const passwordMongo = process.env.MONGO_PS;
const adressMongo = process.env.MONGO_ADR;
const app = express();
const server = http.Server(app);

console.log(PORT);
console.log(loginMongo);

setupWebsocket(server);

mongoose.connect(`mongodb+srv://${loginMongo}:${passwordMongo}@${adressMongo}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//entender requisição no formato json
app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(routes);

//Tipos de parâmetros
//Query Params: req.query (Filtros, Ordenação, Paginação)
//Routes Params: req.params(Identificar um recuros na alteração ou remoção)
//Body: req.body(dados para criação ou alteração de um registro)

server.listen(PORT);