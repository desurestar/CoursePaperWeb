import { Dish } from '../dishCard/Dish'
import { Header } from '../header/Header'
import { images } from '../images'
import { NavMenu } from '../navMenu/NavMenu'
import { Slider } from '../slider/Slider'
import styles from './Main_Page.module.css'

export function Main_Page() {
	return (
		<div className={styles.page}>
			<div className={styles.static_comp}>
				<Header />
				<NavMenu />
			</div>
			<Slider images={images} />

			<div className={styles.popular}>Популярное</div>

			<div className={styles.content}>
				<Dish />
			</div>

			<div>blok</div>
		</div>
	)
}
