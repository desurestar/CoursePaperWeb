import { createContext, useContext, useState } from 'react'

const BasketContext = createContext()

export function BasketProvider({ children }) {
	let [basketItems, setBasketItems] = useState([])
	const addToBasket = product => {
		setBasketItems(prevItems => [...prevItems, product])
	}

	const removeToBasket = product => {
		setBasketItems(prevItems => prevItems.filter(item => item !== product))
	}

	return (
		<BasketContext.Provider
			value={{ basketItems, addToBasket, removeToBasket }}
		>
			{children}
		</BasketContext.Provider>
	)
}

export function useBasket() {
	const context = useContext(BasketContext)
	if (!context) {
		throw new Error('useBasket must be used within a BasketProvider')
	}
	return context
}
