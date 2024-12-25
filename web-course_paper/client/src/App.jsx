import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { AppRoutes } from './AppRoutes'
import './components/header/Header'

function App() {
	return (
		<>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</>
	)
}

export default App
