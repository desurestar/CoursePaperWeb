import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import express from 'express'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()
const authRouter = express.Router()

authRouter.get('/verify', async (req, res) => {
	const token = req.headers.authorization?.split(' ')[1]

	if (!token) {
		return res.status(401).json({ error: 'Unauthorized' })
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET)
		const user = await prisma.user.findUnique({ where: { id: decoded.id } })

		if (!user) {
			return res.status(404).json({ error: 'User not found' })
		}

		res.json({
			user: {
				id: user.id,
				name: user.name,
				email: user.email,
				role: user.role,
			},
		})
	} catch (error) {
		console.error('Verification error:', error)
		res.status(401).json({ error: 'Unauthorized' })
	}
})

authRouter.post('/register', async (req, res) => {
	const { name, email, password } = req.body

	if (!name || !email || !password) {
		return res.status(400).json({ message: 'All fields are required' })
	}

	try {
		const hashedPassword = await bcrypt.hash(password, 10)
		const user = await prisma.user.create({
			data: { name, email, password: hashedPassword },
		})
		res.status(201).json({ message: 'User created', user })
	} catch (error) {
		if (error.code === 'P2002') {
			return res.status(400).json({ message: 'Email already exists' })
		}
		console.error('Registration error:', error)
		res.status(500).json({ message: 'Registration failed' })
	}
})

authRouter.post('/login', async (req, res) => {
	const { email, password } = req.body

	if (!email || !password) {
		return res.status(400).json({ message: 'Email and password are required' })
	}

	try {
		const user = await prisma.user.findUnique({ where: { email } })
		if (!user) return res.status(404).json({ error: 'User not found' })

		const isPasswordValid = await bcrypt.compare(password, user.password)
		if (!isPasswordValid)
			return res.status(401).json({ error: 'Invalid credentials' })

		const token = jwt.sign(
			{ id: user.id, role: user.role },
			process.env.JWT_SECRET,
			{ expiresIn: '1h' }
		)

		res.json({
			token,
			user: {
				id: user.id,
				name: user.name,
				email: user.email,
				role: user.role,
			},
		})
	} catch (error) {
		console.error('Login error:', error)
		res.status(500).json({ error: 'Login failed' })
	}
})

export default authRouter
