import { createBrowserRouter } from 'react-router-dom'
import { BasketPage } from './pages/basket/BasketPage'
import { BookingPage } from './pages/booking/BookingPage'
import { Contacts } from './pages/Contacts/Contacts'
import { Events } from './pages/events/Events'
import { Main_Page } from './pages/main/Main_Page'
import { Bakery } from './pages/menu/bakery/Bakery'
import { Desserts } from './pages/menu/desserts/Desserts'
import { Drinks } from './pages/menu/drinks/Drinks'
import { GrilledFish } from './pages/menu/grilled-fish/GrilledFish'
import { GrilledMeat } from './pages/menu/grilled-meat/GrilledMeat'
import { Salads } from './pages/menu/salads/Salads'
import { Snacks } from './pages/menu/snacks/Snacks'
import { Soups } from './pages/menu/soups/Soups'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main_Page />,
	},
	{
		path: '/booking',
		element: <BookingPage />,
	},
	{
		path: '/contacts',
		element: <Contacts />,
	},
	{
		path: '/events',
		element: <Events />,
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
