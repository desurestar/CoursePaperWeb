import { Route, Routes } from 'react-router-dom'
import { BanquetHall } from './components/halls/banquet_hall/BanquetHall'
import { MultifunctionalHall } from './components/halls/multifunctional_hall/MultifunctionalHall'
import { RegularHall } from './components/halls/reqular_hall/RegularHall'
import { Address } from './components/pages/address/Address'
import { BasketPage } from './components/pages/basket/BasketPage'
import { BookingPage } from './components/pages/booking/BookingPage'
import { CategoryPage } from './components/pages/category_page/CategoryPage'
import { Contacts } from './components/pages/Contacts/Contacts'
import { Events } from './components/pages/events/Events'
import { Policy } from './components/pages/policy/Policy'

const routes = [
	{ path: '/salads', title: 'Салаты', category: 'Салаты' },
	{ path: '/snacks', title: 'Закуски', category: 'Закуски' },
	{ path: '/soups', title: 'Супы', category: 'Супы' },
	{ path: '/grilled-meat', title: 'Мясо на гриле', category: 'Мясо на гриле' },
	{ path: '/grilled-fish', title: 'Рыба на гриле', category: 'Рыба на гриле' },
	{ path: '/bakery', title: 'Выпечка', category: 'Выпечка' },
	{ path: '/desserts', title: 'Десерты', category: 'Десерты' },
	{ path: '/drinks', title: 'Напитки', category: 'Напитки' },
]

export function AppRoutes() {
	return (
		<Routes>
			<Route
				path='/'
				element={<CategoryPage title={'Салаты'} category={'Салаты'} />}
			/>
			<Route path='/booking' element={<BookingPage />} />
			<Route path='/booking/banquet-hall' element={<BanquetHall />} />
			<Route
				path='/booking/multifunctional-hall'
				element={<MultifunctionalHall />}
			/>
			<Route path='/booking/regular-hall' element={<RegularHall />} />
			<Route path='/contacts' element={<Contacts />} />
			<Route path='/events' element={<Events />} />
			<Route path='/basket' element={<BasketPage />} />
			<Route path='/basket/address' element={<Address />} />
			<Route path='/policy' element={<Policy />} />
			{routes.map(({ path, title, category }) => (
				<Route
					key={path}
					path={path}
					element={<CategoryPage title={title} category={category} />}
				/>
			))}
		</Routes>
	)
}
