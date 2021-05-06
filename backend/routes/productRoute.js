import express from 'express';
import Product from '../models/productModel';

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

productRouter.post("/", async(req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        brand: req.body.brand,
        category: req.body.category,
        description: req.body.description,
    });
    const newProduct = await product.save();

    if (newProduct){
        return res.status(201).send({message: "New Product Created", data: newProduct});
    }
    return res.status(500).send({message: "error in creating the product"});

});

export default productRouter;