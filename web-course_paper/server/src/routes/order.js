import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const orderRouter = express()

orderRouter.post('/orders', async (req, res) => {
	const { address, customerName, customerEmail, orderItems, userId } = req.body

	try {
		// Проверка существования пользователя
		const userExists = await prisma.user.findUnique({
			where: { id: userId },
		})
		if (!userExists) {
			return res
				.status(400)
				.json({ message: 'Пользователь с указанным ID не найден' })
		}

		// Проверка существования блюд
		for (const item of orderItems) {
			const dishExists = await prisma.dish.findUnique({
				where: { id: item.dishId },
			})
			if (!dishExists) {
				return res
					.status(400)
					.json({ message: `Блюдо с ID ${item.dishId} не найдено` })
			}
		}

		// Создание заказа
		const newOrder = await prisma.order.create({
			data: {
				address,
				customerName,
				customerEmail,
				userId,
				orderItems: {
					create: orderItems.map(item => ({
						dishId: item.dishId,
						quantity: item.quantity,
					})),
				},
			},
		})

		res
			.status(201)
			.json({ message: 'Заказ успешно создан', orderId: newOrder.id })
	} catch (error) {
		console.error('Ошибка при создании заказа:', error)
		res
			.status(500)
			.json({ message: 'Ошибка при создании заказа', error: error.message })
	}
})

export default orderRouter
