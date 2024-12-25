import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDishes } from '../../../redux/slices/dishSlice'
import { AddDish } from '../../dishCard/addDish/AddDish'
import { Dish } from '../../dishCard/Dish'
import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import { images } from '../../images'
import { NavMenu } from '../../navMenu/NavMenu'
import { Slider } from '../../slider/Slider'
import styles from './CategoryPage.module.css'

export function CategoryPage({ title, category }) {
	const dishes = useSelector(state => state.dish.items)
	const { isAuthenticated, user } = useSelector(state => state.auth)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchDishes(category))
	}, [dispatch, category])

	return (
		<div className={styles.page}>
			<Helmet>
				<title>Zagrebin Restaurant | {title}</title>
			</Helmet>
			<div>
				<Header />
				<NavMenu />
			</div>
			<Slider images={images} />
			<div className={styles.title}>{title}</div>
			<div className={styles.content}>
				{dishes.map(product => (
					<Dish key={product.id} product={product} className={styles.elem} />
				))}
				{isAuthenticated && user.role === 'admin' && (
					<AddDish className={styles.elem}></AddDish>
				)}
			</div>
			<Footer />
		</div>
	)
}
