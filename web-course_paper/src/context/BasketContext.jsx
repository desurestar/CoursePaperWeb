import { createContext, useContext, useState } from 'react'

const BasketContext = createContext()

export function BasketProvider({ children }) {
	const [basketItems, setBasketItems] = useState([])
	const addToBasket = product => {
		setBasketItems(prevItems => [...prevItems, product])
	}

	return (
		<BasketContext.Provider value={{ basketItems, addToBasket }}>
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
