import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDishes } from '../../../../redux/slices/dishSlice'
import { Dish } from '../../../dishCard/Dish'
import { Footer } from '../../../footer/Footer'
import { Header } from '../../../header/Header'
import { images } from '../../../images'
import { NavMenu } from '../../../navMenu/NavMenu'
import { Slider } from '../../../slider/Slider'
import styles from './Soups.module.css'

export function Soups({ className }) {
	const dishes = useSelector(state => state.dish.items)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchDishes('Супы'))
	}, [dispatch])
	return (
		<div className={styles.page}>
			<Helmet>
				<title>Zagrebin Restaurant | Супы</title>
			</Helmet>
			<div>
				<Header />
				<NavMenu />
			</div>
			<Slider images={images} />
			<div className={styles.popular}>Супы</div>
			<div className={styles.content}>
				{dishes.map(product => (
					<Dish key={product.id} product={product} className={styles.elem} />
				))}
			</div>

			<Footer />
		</div>
	)
}
