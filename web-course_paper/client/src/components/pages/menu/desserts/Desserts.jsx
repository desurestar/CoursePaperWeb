import { Helmet } from 'react-helmet-async'
import { Dish } from '../../../dishCard/Dish'
import { Footer } from '../../../footer/Footer'
import { Header } from '../../../header/Header'
import { images } from '../../../images'
import { NavMenu } from '../../../navMenu/NavMenu'
import { products } from '../../../product'
import { Slider } from '../../../slider/Slider'
import styles from './Desserts.module.css'

export function Desserts({ className }) {
	return (
		<div className={styles.page}>
			<Helmet>
				<title>Zagrebin Restaurant | Десерты</title>
			</Helmet>
			<div>
				<Header />
				<NavMenu />
			</div>
			<Slider images={images} />
			<div className={styles.popular}>Десерты</div>
			<div className={styles.content}>
				{products.map(product => (
					<Dish key={product.id} product={product} className={styles.elem} />
				))}
			</div>

			<Footer />
		</div>
	)
}
