import express from 'express'
import cors from 'cors'
import router from './router/router.js'
import connectDB from './configs/config.js'

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors('*'))

app.use('/', router)

connectDB()


app.listen(7000, () => {
    console.log('connected')
})