import { useState } from 'react'
import { Dish } from '../../dishCard/Dish'
import { Footer } from '../../footer/footer'
import { Header } from '../../header/Header'
import { images } from '../../images'
import { FullDescDashModal } from '../../molal/full_desc_dash/FullDescDashModal'
import { NavMenu } from '../../navMenu/NavMenu'
import { products } from '../../product'
import { Slider } from '../../slider/Slider'
import styles from './Main_Page.module.css'

function addToBasket(event) {
	event.stopPropagation()
}

export function Main_Page() {
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<div className={styles.page}>
			<div className={styles.static_comp}>
				<Header />
				<NavMenu />
			</div>
			<Slider images={images} />
			<div className={styles.popular}>Популярное</div>
			<div className={styles.content}>
				{products.map(product => (
					<>
						<Dish
							product={product}
							addToBasket={e => addToBasket(e)}
							onClick={() => setIsModalOpen(true)}
							className={styles.elem}
						/>
						<FullDescDashModal
							product={product}
							isOpen={isModalOpen}
							onClose={() => setIsModalOpen(false)}
						/>
					</>
				))}
			</div>

			<Footer />
		</div>
	)
}
