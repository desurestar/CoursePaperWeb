import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BasketPage } from './components/pages/basket/BasketPage'
import { BookingPage } from './components/pages/booking/BookingPage'
import { Main_Page } from './components/pages/main/Main_Page'
import { BasketProvider } from './context/BasketContext'
import './index.css'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main_Page />,
	},
	{
		path: '/booking',
		element: <BookingPage />,
	},
	{
		path: '/basket',
		element: <BasketPage />,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BasketProvider>
			<RouterProvider router={router} />
		</BasketProvider>
	</React.StrictMode>
)
