import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { verifyToken } from '../../../redux/slices/authSlice'
import { fetchCart } from '../../../redux/slices/cartSlice'
import { DishCardToBasket } from '../../dishCard/dish_card_to_basket/DishCardToBasket'
import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import styles from './BasketPage.module.css'

export function BasketPage() {
	const dishes = useSelector(state => state.cart.items)
	const user = useSelector(state => state.auth.user)
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
	const totalPrice = useSelector(state => state.cart.totalPrice)
	const userId = isAuthenticated && user ? user.id : null
	const dispatch = useDispatch()
	useEffect(() => {
		if (userId) {
			dispatch(fetchCart(userId))
		}
	}, [dispatch, userId])

	useEffect(() => {
		dispatch(verifyToken())
	}, [dispatch])

	const navigate = useNavigate()

	const goBack = () => {
		navigate(-1)
	}

	return (
		<div className={styles.basket}>
			<Helmet>
				<title>Zagrebin Restaurant | Корзина</title>
			</Helmet>
			<Header />
			<div className={styles.container}>
				<div className={styles.exit}>
					<div onClick={() => goBack()} className={styles.left}>
						<HiOutlineArrowLeft className={styles.left} />
					</div>
				</div>
				<h2 className={styles.name}>Корзина</h2>
				<div className={styles.content}>
					<div className={styles.products_list}>
						{dishes.length === 0 ? (
							<div className={styles.empty}>
								<div className={styles.empty_message}>Здесь пусто</div>
							</div>
						) : (
							dishes.map(product => (
								<DishCardToBasket
									key={product.id}
									className={styles.item}
									product={product}
								/>
							))
						)}
					</div>
					<div className={styles.order}>
						<div className={styles.blok}>
							<h4 className={styles.total}>Итого:</h4>
							<div className={styles.total_prise}>{totalPrice} ₽</div>
						</div>
						<div className={styles.making}>
							<Link to={dishes.length !== 0 ? './address' : '#'}>
								<button className={styles.button}>Оформить заказ</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<Footer className={styles.footer} />
		</div>
	)
}
