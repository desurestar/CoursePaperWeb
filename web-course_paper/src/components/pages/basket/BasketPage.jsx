import { HiOutlineArrowLeft } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useBasket } from '../../../context/BasketContext'
import { DishCardToBasket } from '../../dishCard/dish_card_to_basket/DishCardtoBasket'
import { Header } from '../../header/Header'
import styles from './BasketPage.module.css'

export function BasketPage() {
	const { basketItems } = useBasket()
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
				<div className={styles.products_list}>
					{basketItems.length === 0 ? (
						<div className={styles.empty}>
							<div className={styles.empty_message}>Здесь пусто</div>
						</div>
					) : (
						basketItems.map(product => (
							<DishCardToBasket
								key={product.id}
								className={styles.item}
								product={product}
							/>
						))
						// <div>{console.log(basketItems[0])}</div>
					)}
				</div>
			</div>
		</div>
	)
}
