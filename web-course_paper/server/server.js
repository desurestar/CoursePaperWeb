import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import authRouter from './src/routes/auth.js'
import cartRouter from './src/routes/cart.js'
import dishRouter from './src/routes/dish.js'
import orderRouter from './src/routes/order.js'

const app = express()
app.use(cors())
app.use(bodyParser.json())

// Получение пути к текущему файлу
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Обслуживание статических файлов
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use('/api', authRouter)
app.use('/dish', dishRouter)
app.use('/basket', cartRouter)
app.use('/order', orderRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
