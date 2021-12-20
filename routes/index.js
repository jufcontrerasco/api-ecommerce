const productsRouter = require('./products.router');
const express = require('express');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1',router)
    router.use('/products', productsRouter);

   /* const routerv2 = express.Router();
    app.use('/api/v2',routerv2)
    routerv2.use('/products', productsRouterV2);*/
}

module.exports = routerApi;