import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Dish } from '../../dishCard/Dish'
import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import { images } from '../../images'
import { BasketModal } from '../../molal/basket_modal/BasketModal'
import { NavMenu } from '../../navMenu/NavMenu'
import { products } from '../../product'
import { Slider } from '../../slider/Slider'
import styles from './Main_Page.module.css'

export function Main_Page() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	return (
		<div className={styles.page}>
			<Helmet>
				<title>Zagrebin Restaurant | Популярное</title>
			</Helmet>
			<div>
				<Header />
				<NavMenu />
			</div>
			<Slider images={images} />
			<div onClick={() => setIsModalOpen(true)} className={styles.popular}>
				Популярное
			</div>
			<BasketModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				products={products}
			/>
			<div className={styles.content}>
				{products.map(product => (
					<Dish key={product.id} product={product} className={styles.elem} />
				))}
			</div>

			<Footer />
		</div>
	)
}
