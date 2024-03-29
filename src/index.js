const express = require('express');
const bodyParser = require('body-parser');

const {PORT} =require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const db = require('./models/index');

const app = express();

const prepareAndStartServer = ()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded.apply({extended:true}));

    app.use('/api',apiRoutes);

    app.listen(PORT,()=>{
        console.log(`Server Started on Port : ${PORT}`);
    });
}

prepareAndStartServer();