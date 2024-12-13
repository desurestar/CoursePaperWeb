import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	items: [],
	totalPrise: 0,
}

const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addToBasket(state, action) {
			const dish = action.payload
			const existingItems = state.items.find(item => item.id === dish.id)

			if (existingItems) {
				existingItems.quantity++
				existingItems.totalPrise += dish.prise
			} else {
				state.items.push({ ...dish, quantity: 1, totalPrise: dish.prise })
			}
			state.totalPrise += dish.prise
		},
		removeFromBasket(state, action) {
			const id = action.payload
			const itemIndex = state.items.findIndex(item => item.id === id)

			if (itemIndex >= 0) {
				const item = state.items[itemIndex]
				state.totalPrise -= item.totalPrise
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
					existingItem.totalPrise -= existingItem.prise
					state.totalPrise -= existingItem.prise
				} else {
					state.items = state.items.filter(item => item.id !== id)
					state.totalPrise -= existingItem.prise
				}
			}
		},
		clearBasket(state) {
			state.items = []
			state.totalPrise = 0
		},
	},
})

export const { addToBasket, removeFromBasket, removeOneItem, clearBasket } =
	basketSlice.actions
export default basketSlice.reducer
