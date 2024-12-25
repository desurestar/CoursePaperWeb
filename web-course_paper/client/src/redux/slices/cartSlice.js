import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = 'http://localhost:5000/basket'

// Общая функция для пересчета totalPrice
const calculateTotalPrice = items =>
	items.reduce((total, item) => {
		if (item.dish && item.dish.price && item.quantity) {
			return total + item.dish.price * item.quantity
		}
		return total
	}, 0)

// Асинхронные thunks
export const fetchCart = createAsyncThunk('cart/fetchCart', async userId => {
	const response = await axios.get(`${API_URL}/cart/${userId}`)
	return response.data
})

export const addToCart = createAsyncThunk(
	'cart/addToCart',
	async ({ userId, dishId, quantity }) => {
		const response = await axios.post(`${API_URL}/cart`, {
			userId,
			dishId,
			quantity,
		})
		return response.data
	}
)

export const removeFromCart = createAsyncThunk(
	'cart/removeFromCart',
	async cartDishId => {
		await axios.delete(`${API_URL}/cart/${cartDishId}`)
		return cartDishId
	}
)

export const increaseQuantity = createAsyncThunk(
	'cart/increaseQuantity',
	async cartDishId => {
		const response = await axios.put(`${API_URL}/cart/increase/${cartDishId}`)
		return response.data
	}
)

export const decreaseQuantity = createAsyncThunk(
	'cart/decreaseQuantity',
	async cartDishId => {
		const response = await axios.put(`${API_URL}/cart/decrease/${cartDishId}`)
		return response.data
	}
)

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [],
		totalPrice: 0,
		status: 'idle',
		error: null,
	},
	reducers: {
		clearCart(state) {
			state.items = []
			state.totalPrice = 0
		},
		removeDishFromCart(state, action) {
			state.items = state.items.filter(item => item.dish.id !== action.payload)
			state.totalPrice = calculateTotalPrice(state.items)
		},
	},
	extraReducers: builder => {
		builder
			// Fetch cart
			.addCase(fetchCart.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchCart.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.items = action.payload.dishes || []
				state.totalPrice = calculateTotalPrice(state.items)
			})
			.addCase(fetchCart.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
			// Add to cart
			.addCase(addToCart.fulfilled, (state, action) => {
				state.items = action.payload.dishes || []
				state.totalPrice = calculateTotalPrice(state.items)
			})
			// Remove from cart
			.addCase(removeFromCart.fulfilled, (state, action) => {
				state.items = state.items.filter(item => item.id !== action.payload)
				state.totalPrice = calculateTotalPrice(state.items)
			})
			// Increase quantity
			.addCase(increaseQuantity.fulfilled, (state, action) => {
				const index = state.items.findIndex(
					item => item.id === action.payload.id
				)
				if (index !== -1) {
					state.items[index].quantity = action.payload.quantity
					state.totalPrice = calculateTotalPrice(state.items)
				}
			})
			// Decrease quantity
			.addCase(decreaseQuantity.fulfilled, (state, action) => {
				const index = state.items.findIndex(
					item => item.id === action.payload.id
				)
				if (index !== -1) {
					state.items[index].quantity = action.payload.quantity
					state.totalPrice = calculateTotalPrice(state.items)
				}
			})
	},
})

export const { clearCart, removeDishFromCart } = cartSlice.actions
export default cartSlice.reducer
