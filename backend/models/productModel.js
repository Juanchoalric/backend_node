import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    cateogory: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, default:0, required: true},
    brand: {type: String, required: true},
    rating: {type: Number, default:0, required: true},
    numReviews: {type: Number, default:0, required: true},
    countInStock: {type: Number, default:0, required: true},
    isNew: {type: Boolean, required: true},
    cubicCentimeters: {type: Number, required: true},
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;