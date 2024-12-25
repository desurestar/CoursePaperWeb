import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
<<<<<<< HEAD
import { images } from '../../images'
=======
import {
	banquetImages,
	multifunctionalImages,
	regularImages,
} from '../../images'
>>>>>>> test
import { Slider } from '../../slider/Slider'
import styles from './BookingPage.module.css'
export function BookingPage() {
	const banket_images = banquetImages
	const common_images = regularImages
	const multifunction_images = multifunctionalImages
	return (
		<div>
			<Helmet>
				<title>Zagrebin Restaurant | Банкетные залы</title>
			</Helmet>
			<Header />
			<div className={styles.blok}>
				<h2 className={styles.title}>Банкетные залы</h2>
				<div className={styles.content}>
					<Slider className={styles.slider} images={banket_images} />
					<Link to={'./banquet-hall'} className={styles.more}>
						Подробнее
					</Link>
				</div>
			</div>
			<div className={styles.blok}>
				<h2 className={styles.title}>Обычные залы</h2>
				<div className={styles.content}>
					<Slider className={styles.slider} images={common_images} />
					<Link to={'./regular-hall'} className={styles.more}>
						Подробнее
					</Link>
				</div>
			</div>
			<div className={styles.blok}>
				<h2 className={styles.title}>Многофункциональные залы</h2>
				<div className={styles.content}>
					<Slider className={styles.slider} images={multifunction_images} />
					<Link to={'./multifunctional-hall'} className={styles.more}>
						Подробнее
					</Link>
				</div>
				<Footer />
			</div>
		</div>
	)
}
