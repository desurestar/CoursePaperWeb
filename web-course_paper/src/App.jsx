import './App.css'
import './components/Header'
import { Header } from './components/Header'
import { NavMenu } from './components/NavMenu'

function App() {
	return (
		<div className='page'>
			<div className='static_comp'>
				<Header />
				<NavMenu />
			</div>
			<div>blok</div>
			<div>blok</div>
		</div>
	)
}

export default App
