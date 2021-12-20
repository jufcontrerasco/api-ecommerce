const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json())

routerApi(app);

app.get('/',(req,res) =>{
    res.send("Welcome to my site, SKRRRR!")
})

app.get('/new-route',(req,res) =>{
    res.send("Nueva ruta")
});

/*app.get('/categories/:categoryId/products/:productId',(req,res) =>{
    const {productId, categoryId }= req.params;
    res.json({
        categoryId,
        productId  
    });
});*/

app.listen(port,()=>{
    console.log("Listen port: "+port)
})