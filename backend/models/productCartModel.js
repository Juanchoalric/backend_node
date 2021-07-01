import mongoose from 'mongoose';

const productCartSchema = new mongoose.Schema({
    name: {type: String, required: true},
    userName: {type:String, required: true},
    image: {type: String, required: true},
    price: {type: Number, default:0, required: true},
    buyer: {type: String, required: true},
    location: {type: String, required:true},
    address: {type: String, required:true},
    addressNumber: {type: Number, required:true}
});

const productCartModel = mongoose.model("ProductCart", productCartSchema);

export default productCartModel;