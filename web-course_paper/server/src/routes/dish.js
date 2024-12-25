import { PrismaClient } from '@prisma/client'
import express from 'express'
<<<<<<< HEAD
import multer from 'multer'

const prisma = new PrismaClient()
const dishRouter = express.Router()
const upload = multer()

// Маршрут для добавления блюда
dishRouter.post('/add-dish', upload.single('image'), async (req, res) => {
=======
import fs from 'fs'
import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url'

const dishRouter = express.Router()
const prisma = new PrismaClient()

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads/')
	},
	filename: (req, file, cb) => {
		cb(null, `${Date.now()}-${file.originalname}`)
	},
})

const upload = multer({ storage })

if (!fs.existsSync('uploads')) {
	fs.mkdirSync('uploads')
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dishRouter.post('/dishes', upload.single('image'), async (req, res) => {
>>>>>>> test
	const {
		title,
		category,
		calories,
		proteins,
		fats,
		carbohydrates,
		weight,
		price,
<<<<<<< HEAD
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
		console.log(image.data)

		// Создаём запись для блюда
=======
		description,
	} = req.body
	const imageUrl = req.file ? `/uploads/${req.file.filename}` : ''

	try {
>>>>>>> test
		const dish = await prisma.dish.create({
			data: {
				title,
				category,
<<<<<<< HEAD
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

		// Извлечение изображения из базы
		const image = await prisma.image.findUnique({
			where: { id: parseInt(id) },
		})

		if (!image) {
			return res.status(404).send('Image not found')
		}

		// Установка заголовка и отправка данных
		res.set('Content-Type', 'image/jpeg') // Замените на корректный MIME-тип, если ваше изображение не JPEG
		res.send(image.data)
		console.log(image.data)
		// Отправляем сырые данные изображения
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
=======
				calories: parseInt(calories),
				proteins: parseInt(proteins),
				fats: parseInt(fats),
				carbohydrates: parseInt(carbohydrates),
				weight: parseInt(weight),
				price: parseInt(price),
				description,
				imageUrl,
			},
		})
		res.json(dish)
	} catch (error) {
		res.status(500).json({ error: 'Failed to create dish' })
	}
})

dishRouter.get('/dishes', async (req, res) => {
	const { category } = req.query
	try {
		let dishes
		if (category) {
			dishes = await prisma.dish.findMany({
				where: { category },
			})
		} else {
			dishes = await prisma.dish.findMany()
		}
		res.json(dishes)
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch dishes' })
	}
})

dishRouter.delete('/dishes/:id', async (req, res) => {
	const { id } = req.params
	try {
		const dish = await prisma.dish.findUnique({
			where: { id: parseInt(id) },
		})

		if (!dish) {
			return res.status(404).json({ error: 'Dish not found' })
		}

		await prisma.cartDish.deleteMany({ where: { dishId: parseInt(id) } })
		await prisma.orderItem.deleteMany({ where: { dishId: parseInt(id) } })

		if (dish.imageUrl) {
			const filePath = path.join(__dirname, '..', dish.imageUrl)
			if (fs.existsSync(filePath)) {
				fs.unlinkSync(filePath)
			}
		}

		await prisma.dish.delete({
			where: { id: parseInt(id) },
		})

		res.json({ message: 'Dish deleted successfully' })
	} catch (error) {
		console.error('Error deleting dish:', error)
		res.status(500).json({ error: 'Failed to delete dish' })
>>>>>>> test
	}
})

export default dishRouter
