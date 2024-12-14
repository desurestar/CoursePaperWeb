import { HelmetProvider } from 'react-helmet'
import './App.css'
import './components/header/Header'

import { Main_Page } from './components/pages/main/Main_Page'

function App() {
	return (
		<HelmetProvider>
			<Main_Page />
		</HelmetProvider>
	)
}

export default App
