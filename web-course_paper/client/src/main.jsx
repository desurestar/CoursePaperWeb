import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import store from './redux/store'

// Рендерим корневой компонент в корневой элемент в HTML
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<HelmetProvider>
				<App />
			</HelmetProvider>
		</Provider>
	</React.StrictMode>
)
