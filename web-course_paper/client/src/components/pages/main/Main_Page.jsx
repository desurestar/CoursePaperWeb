import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDishes } from '../../../redux/actions/dishesActions'
import { verifyToken } from '../../../redux/slices/authSlice'
import { fetchCart } from '../../../redux/slices/cartSlice'
import { AddDish } from '../../dishCard/addDish/AddDish'
import { Dish } from '../../dishCard/Dish'
import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import { images } from '../../images'
import { NavMenu } from '../../navMenu/NavMenu'
import { products } from '../../product'
import { Slider } from '../../slider/Slider'
import styles from './Main_Page.module.css'

export function Main_Page() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const { isAuthenticated } = useSelector(state => state.auth)
	const user = useSelector(state => state.auth.user)
	const dispatch = useDispatch()
	const { dishes } = useSelector(state => state.dishes)

	useEffect(() => {
		dispatch(verifyToken())
	}, [dispatch])

	useEffect(() => {
<<<<<<< HEAD
		dispatch(fetchDishes())
	}, [dispatch])
=======
		if (isAuthenticated && user) {
			dispatch(fetchCart(user.id))
		}
	}, [dispatch, user, isAuthenticated])
>>>>>>> test

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
			<div className={styles.title}>Популярное</div>
			<div className={styles.content}>
				{dishes.map(product => (
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
