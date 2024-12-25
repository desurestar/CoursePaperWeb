import { PrismaClient } from '@prisma/client'
import express from 'express'

const cartRouter = express.Router()
const prisma = new PrismaClient()

// Маршрут для добавления блюда в корзину
cartRouter.post('/cart', async (req, res) => {
	const { userId, dishId, quantity } = req.body
	try {
		let cart = await prisma.cart.findUnique({
			where: { userId },
			include: { dishes: true },
		})

		if (!cart) {
			cart = await prisma.cart.create({
				data: {
					user: { connect: { id: userId } },
					dishes: {
						create: {
							dish: { connect: { id: dishId } },
							quantity,
						},
					},
				},
			})
		} else {
			const existingDish = cart.dishes.find(dish => dish.dishId === dishId)
			if (existingDish) {
				await prisma.cartDish.update({
					where: { id: existingDish.id },
					data: { quantity: existingDish.quantity + quantity },
				})
			} else {
				await prisma.cartDish.create({
					data: {
						cart: { connect: { id: cart.id } },
						dish: { connect: { id: dishId } },
						quantity,
					},
				})
			}
		}

		res.json(cart)
	} catch (error) {
		console.error('Failed to add dish to cart:', error)
		res.status(500).json({ error: 'Failed to add dish to cart' })
	}
})

// Маршрут для получения корзины пользователя
cartRouter.get('/cart/:userId', async (req, res) => {
	const { userId } = req.params
	try {
		const cart = await prisma.cart.findUnique({
			where: { userId: parseInt(userId) },
			include: {
				dishes: {
					include: {
						dish: true,
					},
				},
			},
		})
		if (!cart) {
			return res.status(404).json({ error: 'Cart not found' })
		}
		res.json(cart)
	} catch (error) {
		console.error('Failed to fetch cart:', error)
		res.status(500).json({ error: 'Failed to fetch cart' })
	}
})

// Маршрут для удаления блюда из корзины
cartRouter.delete('/cart/:cartDishId', async (req, res) => {
	const { cartDishId } = req.params
	try {
		await prisma.cartDish.delete({
			where: { id: parseInt(cartDishId) },
		})
		res.json({ message: 'Dish removed from cart' })
	} catch (error) {
		console.error('Failed to remove dish from cart:', error)
		res.status(500).json({ error: 'Failed to remove dish from cart' })
	}
})

// Маршрут для увеличения количества блюда в корзине
cartRouter.put('/cart/increase/:cartDishId', async (req, res) => {
	const { cartDishId } = req.params
	try {
		const cartDish = await prisma.cartDish.update({
			where: { id: parseInt(cartDishId) },
			data: { quantity: { increment: 1 } },
		})
		res.json(cartDish)
	} catch (error) {
		console.error('Failed to increase dish quantity:', error)
		res.status(500).json({ error: 'Failed to increase dish quantity' })
	}
})

// Маршрут для уменьшения количества блюда в корзине
cartRouter.put('/cart/decrease/:cartDishId', async (req, res) => {
	const { cartDishId } = req.params
	try {
		const cartDish = await prisma.cartDish.update({
			where: { id: parseInt(cartDishId) },
			data: { quantity: { decrement: 1 } },
		})
		res.json(cartDish)
	} catch (error) {
		console.error('Failed to decrease dish quantity:', error)
		res.status(500).json({ error: 'Failed to decrease dish quantity' })
	}
})

export default cartRouter
