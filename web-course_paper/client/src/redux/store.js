import { configureStore } from '@reduxjs/toolkit'
import dishesReducer from './slices/addDishSlice'
import authReducer from './slices/authSlice'
import basketReducer from './slices/basketSlice'
import cartReducer from './slices/cartSlice'
import dishReducer from './slices/dishSlice'

const saveToLocalStorage = state => {
	try {
		const serializedState = JSON.stringify(state)
		localStorage.setItem('basket', serializedState)
	} catch (e) {
		console.error('Could not save state', e)
	}
}

const loadFromLocalStorage = () => {
	try {
		const serializedState = localStorage.getItem('basket')
		if (serializedState === null) return undefined
		return JSON.parse(serializedState)
	} catch (e) {
		console.error('Could not load state', e)
		return undefined
	}
}

const preloadedState = loadFromLocalStorage()

const store = configureStore({
<<<<<<< HEAD
	reducer: { basket: basketReducer, auth: authReducer, dishes: dishesReducer },
=======
	reducer: {
		basket: basketReducer,
		auth: authReducer,
		dish: dishReducer,
		cart: cartReducer,
	},
>>>>>>> test
	preloadedState: {
		basket: preloadedState || {
			items: [],
			totalPrice: 0,
		},
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			immutableCheck: false,
		}),
})

store.subscribe(() => {
	saveToLocalStorage(store.getState().basket)
})

export default store
