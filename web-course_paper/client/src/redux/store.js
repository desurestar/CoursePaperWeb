import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import basketReducer from './slices/basketSlice'

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
	reducer: { basket: basketReducer, auth: authReducer },
	preloadedState: {
		basket: preloadedState || {
			items: [],
			totalPrice: 0,
		},
	},
})

store.subscribe(() => {
	saveToLocalStorage(store.getState().basket)
})

export default store
