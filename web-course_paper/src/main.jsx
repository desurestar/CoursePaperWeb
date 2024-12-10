import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './components/routing'
import { BasketProvider } from './context/BasketContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BasketProvider>
			<RouterProvider router={router} />
		</BasketProvider>
	</React.StrictMode>
)
