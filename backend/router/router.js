import express from 'express'
import { deleteProduct, getProducts, postProduct } from '../controllers/productController.js'
import { deleteBasket, getBasket, postBasket } from '../controllers/basketController.js'


const router = express.Router()

router

.get('/products', getProducts)
.post('/products', postProduct)
.delete('/products/:id', deleteProduct)

.get('/basket', getBasket)
.post('/basket', postBasket)
.delete('/basket/:id', deleteBasket)

export default router