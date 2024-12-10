import { Link } from 'react-router-dom'
import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import { images } from '../../images'
import { NavMenu } from '../../navMenu/NavMenu'
import { Slider } from '../../slider/Slider'
import styles from './BookingPage.module.css'

export function BookingPage() {
	const banket_images = images
	const common_images = images
	const multifunction_images = images
	return (
		<div>
			<Header />
			<NavMenu />
			<div className={styles.blok}>
				<h2 className={styles.title}>Банкетные залы</h2>
				<div className={styles.content}>
					<Slider className={styles.slider} images={banket_images} />
					<Link className={styles.more}>Подробнее</Link>
				</div>
			</div>
			<div className={styles.blok}>
				<h2 className={styles.title}>Обычные залы</h2>
				<div className={styles.content}>
					<Slider className={styles.slider} images={common_images} />
					<Link className={styles.more}>Подробнее</Link>
				</div>
			</div>
			<div className={styles.blok}>
				<h2 className={styles.title}>Многофункциональные залы</h2>
				<div className={styles.content}>
					<Slider className={styles.slider} images={multifunction_images} />
					<Link className={styles.more}>Подробнее11</Link>
				</div>
				<Footer />
			</div>
		</div>
	)
}
