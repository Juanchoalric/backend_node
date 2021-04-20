import express from 'express';
import { Mongoose } from 'mongoose';
import Product from '../models/productModel';
import { getToken } from '../utils';

const router = express.Router();

router.get("/", async(req, res) => {
    const products = await Product.find({});
    res.send(products);
});

router.post("/", async(req, res) => {
    const product = new Product({
        name: req.body.name,
        category: req.body.category,
        image: req.body.image,
        price: req.body.price,
        brand: req.body.brand,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        countInStock: req.body.countInStock,
        isItNew: req.body.isItNew,
        cubicCentimeters: req.body.cubicCentimeters,
    });
    const newProduct = await product.save();
    if (newProduct){
        return res.status(201).send({message: 'New product created', data: newProduct});
    }
    return res.status(500).send({message: 'Error in creating product'})
})

export default router;