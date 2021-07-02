import express from 'express';
import { Mongoose } from 'mongoose';
import productCart from '../models/productCartModel';
import { getToken, isAdmin, isAuth } from '../utils';

const router = express.Router();

router.get("/", async(req, res) => {
    const ProductCart = await productCart.find({});
    res.send(ProductCart);
});

router.post("/", isAuth, async(req, res) => {
    let products = [];
    let data = req.body;
    console.log(data)
    Object.values(data).forEach(function (elements) {
        elements.forEach(element => {
            console.log(element)
            let product = new productCart({
                name: element.name,
                image: element.image,
                price: element.price,
                address: element.address,
                buyer: element.buyer,
                addressNumber: element.addressNumber,
                location: element.location,
                userName: element.userName
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

router.delete("/:id", isAuth, isAdmin, async(req, res) => {
    const deletedProduct = await productCart.findById(req.params.id);
    if (deletedProduct){
        await deletedProduct.remove();
        res.send({message: "Product Bought Deleted"});
    } else {
        res.send("Error al eleminar el producto comprado")
    }
});

export default router;