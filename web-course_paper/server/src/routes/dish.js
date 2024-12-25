import { PrismaClient } from '@prisma/client'
import express from 'express'
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
	const {
		title,
		category,
		calories,
		proteins,
		fats,
		carbohydrates,
		weight,
		price,
		description,
	} = req.body
	const imageUrl = req.file ? `/uploads/${req.file.filename}` : ''

	try {
		const dish = await prisma.dish.create({
			data: {
				title,
				category,
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
	}
})

export default dishRouter
