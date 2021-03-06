import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    category: {type: String, required: true},
    userName: {type:String, required: true},
    image: {type: String, required: true},
    price: {type: Number, default:0, required: true},
    brand: {type: String, required: true},
    description: {type: String, required: true},
    countInStock: {type: Number, default:1, required: true},
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;

