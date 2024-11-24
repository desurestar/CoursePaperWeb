import './App.css'
import './components/Header'
import { Header } from './components/Header'
import { images } from './components/images'
import { NavMenu } from './components/NavMenu'
import { Slider } from './components/Slider'

function App() {
	return (
		<div className='page'>
			<div className='static_comp'>
				<Header />
				<NavMenu />
			</div>
			<Slider images={images} />
			<div>blok</div>
			<div>blok</div>
		</div>
	)
}

export default App
