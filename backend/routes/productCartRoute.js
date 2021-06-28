import express from 'express';
import { Mongoose } from 'mongoose';
import ProductCart from '../models/productCartModel';
import { getToken, isAdmin, isAuth } from '../utils';

const router = express.Router();

router.get("/", async(req, res) => {
    const products = await Product.find({});
    res.send(products);
});

router.post("/", isAuth, async(req, res) => {
    let products = [];
    let data = req.body;
    Object.values(data).forEach(function (element) {
        products.push(new ProductCart({
            name: element.name,
            image: element.image,
            price: element.price,
            countInStock: element.countInStock,
            userName: element.userName
        }));
    });

    let newProduct = await element.save();

    
    console.log(products);
        if (newProduct){
            return res.status(201).send({message: 'Products confirmed', data: newProduct});
        }
    return res.status(500).send({message: 'Error in creating product'})
});

export default router;