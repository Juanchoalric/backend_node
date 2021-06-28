import mongoose from 'mongoose';

const productCartSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    userName: {type:String, required: true},
    image: {type: String, required: true},
    price: {type: Number, default:0, required: true},
});

const productCartModel = mongoose.model("ProductCart", productCartSchema);

export default productCartModel;