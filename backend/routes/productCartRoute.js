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
    req.body.forEach(element => {
        products.push(new ProductCart({
            name: element.name,
            category: element.category,
            image: element.image,
            price: element.price,
            brand: element.brand,
            countInStock: element.countInStock,
            description: element.description,
            userName: element.userName
        }));
    });
    const newProduct = await products.save();

        if (newProduct){
            return res.status(201).send({message: 'Products confirmed', data: newProduct});
        }
    return res.status(500).send({message: 'Error in creating product'})
});

export default router;