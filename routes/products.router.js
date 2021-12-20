const express = require('express');

const router = express.Router(); //Invoco un Router de Express

const ProductsServices = require("./../services/product.service")
const service = new ProductsServices;

router.get('/',(req,res)=>{
    const products = service.find();
    res.status(200).json(products);
})

router.get('/:id',(req,res)=>{
    const { id }  = req.params; //Captura el parametro id, req.params captura todos los valores que tengan ":" exp: ":id"
    const product = service.findOne(id);

    if (product){
        res.status(200).json(product);        
    }
    else{
        res.status(404).json({
            message:"Not Found"
        })        
    }    
})

router.post("/",(req,res)=>{
    const body = req.body;
    res.status(201).json({
        message: "Created",
        data: body
    })
})

router.patch("/:id",(req,res) =>{
    const body = req.body;
    const {id} = req.params;
    res.json({
        message: "Update",
        data: body,
        id
    })
})

router.delete("/:id",(req,res)=>{
    const {id} = req.params;
    res.json({
        message:"Deleted",
        id
    })
})


module.exports = router;