import { Dish } from '../../../dishCard/Dish'
import { Footer } from '../../../footer/Footer'
import { Header } from '../../../header/Header'
import { images } from '../../../images'
import { NavMenu } from '../../../navMenu/NavMenu'
import { products } from '../../../product'
import { Slider } from '../../../slider/Slider'
import styles from './Bakery.module.css'

export function Bakery({ className }) {
	return (
		<div className={styles.page}>
			<div>
				<Header />
				<NavMenu />
			</div>
			<Slider images={images} />
			<div className={styles.popular}>Выпечка</div>
			<div className={styles.content}>
				{products.map(product => (
					<Dish key={product.id} product={product} className={styles.elem} />
				))}
			</div>

			<Footer />
		</div>
	)
}
