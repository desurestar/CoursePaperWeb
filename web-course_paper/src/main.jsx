import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BasketPage } from './components/pages/basket/BasketPage'
import { BookingPage } from './components/pages/booking/BookingPage'
import { Main_Page } from './components/pages/main/Main_Page'
import { Bakery } from './components/pages/menu/bakery/Bakery'
import { Desserts } from './components/pages/menu/desserts/Desserts'
import { Drinks } from './components/pages/menu/drinks/Drinks'
import { GrilledFish } from './components/pages/menu/grilled-fish/GrilledFish'
import { GrilledMeat } from './components/pages/menu/grilled-meat/GrilledMeat'
import { Salads } from './components/pages/menu/salads/Salads'
import { Snacks } from './components/pages/menu/snacks/Snacks'
import { Soups } from './components/pages/menu/soups/Soups'
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
	{
		path: '/salads',
		element: <Salads />,
	},
	{
		path: '/snacks',
		element: <Snacks />,
	},
	{
		path: '/soups',
		element: <Soups />,
	},
	{
		path: '/grilled-meat',
		element: <GrilledMeat />,
	},
	{
		path: '/grilled-fish',
		element: <GrilledFish />,
	},
	{
		path: '/bakery',
		element: <Bakery />,
	},
	{
		path: '/desserts',
		element: <Desserts />,
	},
	{
		path: '/drinks',
		element: <Drinks />,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BasketProvider>
			<RouterProvider router={router} />
		</BasketProvider>
	</React.StrictMode>
)
