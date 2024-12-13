import { HelmetProvider } from 'react-helmet-async-async'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './components/header/Header'
import { BasketPage } from './components/pages/basket/BasketPage'
import { BookingPage } from './components/pages/booking/BookingPage'
import { Contacts } from './components/pages/Contacts/Contacts'
import { Events } from './components/pages/events/Events'
import { Main_Page } from './components/pages/main/Main_Page'

export function App() {
	return (
		<HelmetProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Main_Page />} />
					<Route path='/basket' element={<BasketPage />} />
					<Route path='/booking' element={<BookingPage />} />
					<Route path='/contacts' element={<Contacts />} />
					<Route path='/events' element={<Events />} />
				</Routes>
			</BrowserRouter>
		</HelmetProvider>
	)
}
