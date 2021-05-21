import express from 'express';
import { Mongoose } from 'mongoose';
import Product from '../models/productModel';
import { getToken, isAdmin, isAuth } from '../utils';

const router = express.Router();

router.get("/", async(req, res) => {
    const products = await Product.find({});
    res.send(products);
});

router.post("/", isAuth, isAdmin, async(req, res) => {
    const product = new Product({
        name: req.body.name,
        category: req.body.category,
        image: req.body.image,
        price: req.body.price,
        brand: req.body.brand,
        countInStock: req.body.countInStock,
        description: req.body.description
    });
    const newProduct = await product.save();
    if (newProduct){
        return res.status(201).send({message: 'New product created', data: newProduct});
    }
    return res.status(500).send({message: 'Error in creating product'})
})

router.get('/:id', async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id });
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found.' });
    }
  });

router.put("/:id", isAuth, isAdmin, async(req, res) => {
    const productId = req.params.id;
    const product = await Product.findById({_id: productId});
    if (product){
        product.name= req.body.name;
        product.category= req.body.category;
        product.image= req.body.image;
        product.price= req.body.price;
        product.brand= req.body.brand;
        product.countInStock= 1;
        product.description = req.body.description;

        const updateProduct = await product.save();
        if (updateProduct){
            return res.status(200).send({message: 'Se modifico el producto', data: updateProduct});
        }
    }
    return res.status(500).send({message: 'Error al modificar el producto'});
});

router.delete("/:id", isAuth, isAdmin, async(req, res) => {
    const deletedProduct = await Product.findById(req.params.id);
    if (deletedProduct){
        await deletedProduct.remove();
        res.send({message: "Product Deleted"});
    } else {
        res.send("Error al eleminar el producto")
    }
});

export default router;