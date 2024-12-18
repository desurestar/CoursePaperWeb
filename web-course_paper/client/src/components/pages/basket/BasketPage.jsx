import { HiOutlineArrowLeft } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { DishCardToBasket } from '../../dishCard/dish_card_to_basket/DishCardToBasket'
import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import styles from './BasketPage.module.css'

export function BasketPage() {
	// const { basketItems } = useBasket()
	// const temp = 0
	// const totalPrice = basketItems.reduce(
	// 	(total, item) => total + item.price,
	// 	temp
	// )

	const { items, totalPrice } = useSelector(state => state.basket)
	const dispatch = useDispatch()

	const handleRemoveFormBasket = id => {
		dispatch(removeFormBasket(id))
	}

	return (
		<div className={styles.basket}>
			<Header />
			<div className={styles.container}>
				<button className={styles.exit}>
					<Link className={styles.left} to='/'>
						<HiOutlineArrowLeft className={styles.left} />
					</Link>
				</button>
				<h2 className={styles.name}>Корзина</h2>
				<div className={styles.content}>
					<div className={styles.products_list}>
						{items.length === 0 ? (
							<div className={styles.empty}>
								<div className={styles.empty_message}>Здесь пусто</div>
							</div>
						) : (
							items.map(product => (
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
							<Link to='./address'>
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
