import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = 'http://localhost:5000/dish'

export const fetchDishes = createAsyncThunk(
	'dishes/fetchDishes',
	async category => {
		const response = await axios.get(`${API_URL}/dishes`, {
			params: { category },
		})
		return response.data
	}
)

export const addDish = createAsyncThunk('dishes/addDish', async dishData => {
	const formData = new FormData()
	for (const key in dishData) {
		formData.append(key, dishData[key])
	}
	const response = await axios.post(`${API_URL}/dishes`, formData, {
		headers: { 'Content-Type': 'multipart/form-data' },
	})
	return response.data
})

export const deleteDish = createAsyncThunk('dishes/deleteDish', async id => {
	await axios.delete(`${API_URL}/dishes/${id}`)
	return id
})

const dishSlice = createSlice({
	name: 'dishes',
	initialState: {
		items: [],
		status: 'idle',
		error: null,
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchDishes.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchDishes.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.items = action.payload
			})
			.addCase(fetchDishes.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
			.addCase(addDish.fulfilled, (state, action) => {
				state.items.push(action.payload)
			})
			.addCase(deleteDish.fulfilled, (state, action) => {
				state.items = state.items.filter(dish => dish.id !== action.payload)
			})
	},
})

export default dishSlice.reducer
