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
    console.log(data)
    Object.values(data).forEach(function (elements) {
        elements.forEach(element => {
            console.log(element)
            let product = new ProductCart({
                name: element.name,
                image: element.image,
                price: element.price,
                userName: element.userName,
                buyer: element.buyer
            });
            product.save();
            console.log(product)
        });
    });

    
    console.log(products);
        if (1){
            return res.status(201).send({message: 'Products confirmed', data: ["1"]});
        }
    return res.status(500).send({message: 'Error in creating product'})
});

export default router;