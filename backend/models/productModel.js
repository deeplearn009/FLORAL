import mongoose from "mongoose";

const productShcema = mongoose.Schema({
    image: {type: String, required: true},
    name: {type: String, required: true},
    price: {type: String, required: true},
}, {timestamps: true})

const ProductModel = mongoose.model('Products', productShcema)

export default ProductModel