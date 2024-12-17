import cors from 'cors'
import express from 'express'
import authRouter from './src/routes/auth.js'
import dishRouter from './src/routes/dish.js'

const app = express()
const PORT = process.env.PORT || 5000

app.use(
	cors({
		origin: 'http://localhost:5173', // Разрешить запросы с вашего клиентского приложения
		methods: 'GET,POST,PUT,DELETE', // Разрешить методы
		allowedHeaders: 'Content-Type,Authorization', // Разрешить заголовки
	})
)

app.use(express.json())
app.use('/api', authRouter)
app.use('/dish', dishRouter)

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
