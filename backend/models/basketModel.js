import mongoose from "mongoose";

const basketSchcema = mongoose.Schema({
    image: {type: String, required: true},
    name: {type: String, required: true},
    price: {type: String, required: true},
}, {timestamps: true})

const BasketModel = mongoose.model('Basket', basketSchcema)

export default BasketModel 