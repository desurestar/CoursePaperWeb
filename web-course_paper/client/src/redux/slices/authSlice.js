import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// Асинхронные действия для регистрации и входа
export const verifyToken = createAsyncThunk(
	'auth/verifyToken',
	async (_, { rejectWithValue }) => {
		const token = localStorage.getItem('token')
		if (!token) return rejectWithValue('Token not found')

		try {
			const response = await axios.get('http://localhost:5000/api/verify', {
				headers: { Authorization: `Bearer ${token}` },
			})
			return response.data.user // Возвращаем данные пользователя
		} catch (error) {
			return rejectWithValue('Token verification failed')
		}
	}
)

export const register = createAsyncThunk('auth/register', async userData => {
	const response = await axios.post(
		'http://localhost:5000/api/register',
		userData
	)
	return response.data
})

export const login = createAsyncThunk('auth/login', async userData => {
	const response = await axios.post('http://localhost:5000/api/login', userData)
	localStorage.setItem('token', response.data.token)
	localStorage.setItem('role', response.data.user.role)
	return response.data // Возвращаем данные из ответа
})

export const logout = createAsyncThunk('auth/logout', async () => {
	localStorage.removeItem('token')
})

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		isAuthenticated: false,
		token: localStorage.getItem('token'),
		user: null,
		status: 'idle',
		error: null,
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(verifyToken.fulfilled, (state, action) => {
				state.isAuthenticated = true
				state.user = action.payload // Сохраняем данные пользователя
				state.status = 'succeeded'
			})
			.addCase(verifyToken.rejected, state => {
				state.isAuthenticated = false
				state.token = null
				state.user = null
			})
			.addCase(register.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.user = action.payload.user
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isAuthenticated = true
				state.token = action.payload.token
				state.user = action.payload.user // Сохранение данных пользователя
				state.status = 'succeeded'
			})
			.addCase(logout.fulfilled, state => {
				state.isAuthenticated = false
				state.token = null
				state.user = null
				state.status = 'idle'
			})
			.addCase(register.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
			.addCase(login.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	},
})

export default authSlice.reducer
