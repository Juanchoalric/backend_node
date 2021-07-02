import express from 'express';
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import productCartRoute from './routes/productCartRoute';
dotenv.config();

const mongodbUrl = "mongodb+srv://dbecomerce:123Mongo!!@cluster0.hobus.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).catch(error=> console.log(error.reason));

const app = express();
var fs = require("fs");
app.use(bodyParser({limit: '50mb'}));
app.use(bodyParser.json());

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/productsCart", productCartRoute);
/*
app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x=> x._id === productId)
    if (product)
        res.send(product);
    else
        res.status(404).send({msg: "El producto no existe."});
});
*/
/*
app.get("/api/products", (req, res) => {
    res.send(data.products);
});
*/
/*
app.post("/api/products", (req, res) => {
    var info = Object.values(req.body);
    var da = Object.values(data.products);
    da.push(info)
    res.send(da);
});
*/
/*
app.delete("/api/products/remove/:id", (req, res) => {
    const productId = req.params.id;
    function deleteById(val) {
        for(var f in data.products) {
            if(data.products[f]['_id'] == val) {
                delete data.products[f];
            }
        }
    }
    deleteById(productId)
    var da = Object.values(data.products);
    res.send(da);
    
});
*/
/*app.update("/api/products/update/:id", (req, res) => {
    const productId = req.params.id;
    var info = Object.values(req.body);
    function updateById(val) {
        for(var f in data.products) {
            if(data.products[f]['_id'] == val) {
                data.products[f];
            }
        }
    }
    updateById(productId)
    var da = Object.values(data.products);
    res.send(da);
    
});*/
app.listen(5000, ()=> {console.log("Server started at http://localhost:5000") });