import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import { verifyToken } from '../../../redux/slices/authSlice'
import { AddDish } from '../../dishCard/addDish/AddDish'
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
	const { isAuthenticated } = useSelector(state => state.auth)
	const user = useSelector(state => state.auth.user)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(verifyToken())
	}, [dispatch])

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
				{isAuthenticated && user.role === 'admin' ? (
					<AddDish className={styles.elem} />
				) : (
					<></>
				)}
			</div>

			<Footer />
		</div>
	)
}
