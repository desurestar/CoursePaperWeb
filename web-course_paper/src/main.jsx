import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BookingPage } from './components/pages/booking/BookingPage'
import { Main_Page } from './components/pages/main/Main_Page'
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
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
