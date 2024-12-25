import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	items: [],
	totalPrice: 0,
}

const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addToBasket(state, action) {
			const dish = action.payload
			const existingItems = state.items.findIndex(item => item.id === dish.id)

			if (existingItems) {
				existingItems.quantity++
				existingItems.totalPrice += dish.price
			} else {
				state.items.push({ ...dish, quantity: 1, totalPrice: dish.price })
			}
			state.totalPrice += dish.price
		},
		removeFromBasket(state, action) {
			const id = action.payload
			const itemIndex = state.items.findIndex(item => item.id === id)

			if (itemIndex >= 0) {
				const item = state.items[itemIndex]
				state.totalPrice -= item.totalPrice
				state.items.splice(itemIndex, 1)
			}
		},
		removeOneItem(state, action) {
			const id = action.payload
			const index = state.items.findIndex(item => item.id === id)

			if (index !== -1) {
				const existingItem = state.items[index]
				if (existingItem.quantity > 1) {
					existingItem.quantity -= 1
					existingItem.totalPrice -= existingItem.price
					state.totalPrice -= existingItem.price
				} else {
					state.items = state.items.filter(item => item.id !== id)
					state.totalPrice -= existingItem.price
				}
			}
		},
		clearBasket(state) {
			state.items = []
			state.totalPrice = 0
		},
	},
})

export const { addToBasket, removeFromBasket, removeOneItem, clearBasket } =
	basketSlice.actions
export default basketSlice.reducer
