import { PrismaClient } from '@prisma/client'
import express from 'express'
import multer from 'multer'

const prisma = new PrismaClient()
const dishRouter = express.Router()
const upload = multer()

// Маршрут для добавления блюда
dishRouter.post('/add-dish', upload.single('image'), async (req, res) => {
	const {
		title,
		category,
		calories,
		proteins,
		fats,
		carbohydrates,
		weight,
		price,
	} = req.body

	try {
		// Проверяем наличие изображения
		if (!req.file) {
			return res.status(400).json({ error: 'Image is required' })
		}

		// Создаём запись для изображения
		const image = await prisma.image.create({
			data: {
				data: req.file.buffer, // Сохраняем бинарные данные изображения
			},
		})

		// Создаём запись для блюда
		const dish = await prisma.dish.create({
			data: {
				title,
				category,
				calories: parseFloat(calories),
				proteins: parseFloat(proteins),
				fats: parseFloat(fats),
				carbohydrates: parseFloat(carbohydrates),
				weight: parseFloat(weight),
				price: parseFloat(price),
				imageId: image.id, // Привязываем ID изображения
			},
		})

		res.status(201).json(dish) // Возвращаем созданное блюдо
	} catch (error) {
		console.error('Error adding dish:', error)
		res.status(500).json({ error: 'Internal server error' })
	}
})

// Маршрут для получения изображения по ID блюда
dishRouter.get('/image/:id', async (req, res) => {
	try {
		const { id } = req.params

		// Ищем изображение по ID
		const dish = await prisma.dish.findUnique({
			where: { id: parseInt(id) },
			include: { image: true },
		})

		if (!dish || !dish.image) {
			return res.status(404).send('Dish or image not found')
		}

		// Устанавливаем заголовки для отправки изображения
		res.set('Content-Type', 'image/jpeg')
		res.send(dish.image.data) // Отправляем бинарные данные изображения
	} catch (error) {
		console.error('Error fetching image:', error)
		res.status(500).send('Internal server error')
	}
})

// Маршрут для получения списка всех блюд
dishRouter.get('/getDish', async (req, res) => {
	try {
		// Получаем блюда с их изображениями
		const dishes = await prisma.dish.findMany({
			include: { image: true },
		})

		// Форматируем блюда: конвертируем изображения в Base64
		const formattedDishes = dishes.map(dish => ({
			...dish,
			image: dish.image
				? `data:image/jpeg;base64,${dish.image.data.toString('base64')}`
				: null,
		}))

		res.json(formattedDishes)
	} catch (error) {
		console.error('Error fetching dishes:', error)
		res.status(500).json({ error: 'Error fetching dishes' })
	}
})

export default dishRouter
