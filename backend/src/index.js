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

setupWebsocket(server);

mongoose.connect('mongodb+srv://rheniery:ervilha@cluster0-9hwyk.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors({origin: 'http://localhost:3000'}));
//understand the requisitions in json format
app.use(express.json());
app.use(routes);

//Parameters types
//Query Params: req.query (Filters, Ordination, Pagination)
//Routes Params: req.params(Identify resources of alteration and remotion)
//Body: req.body(Data to creation and edition of a register)

server.listen(PORT);