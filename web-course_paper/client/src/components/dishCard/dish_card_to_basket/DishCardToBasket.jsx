import { FiMinus, FiPlus } from 'react-icons/fi'
import { VscChromeClose } from 'react-icons/vsc'
import { useDispatch } from 'react-redux'
import {
	decreaseQuantity,
	increaseQuantity,
	removeFromCart,
} from '../../../redux/slices/cartSlice'
import styles from './DishCardToBasket.module.css'

export function DishCardToBasket({ className = '', product }) {
	const dispatch = useDispatch()

	const handleIncreaseQuantity = () => {
		dispatch(increaseQuantity(product.id))
	}

	const handleDecreaseQuantity = () => {
		if (product.quantity > 1) {
			dispatch(decreaseQuantity(product.id))
		}
	}

	const handleRemoveFromBasket = () => {
		dispatch(removeFromCart(product.id))
	}

	// Проверка данных продукта
	if (!product || !product.dish) {
		return null
	}

	const { dish } = product
	const imageUrl = dish.imageUrl
		? `http://localhost:5000${dish.imageUrl}`
		: '/placeholder.png'

	return (
		<div className={`${className} ${styles.wrapper}`}>
			<div className={styles.item}>
				<div className={styles.left}>
					<div className={styles.image_container}>
						<img
							className={styles.image}
							src={imageUrl}
							alt={dish.title || 'Dish image'}
						/>
					</div>
					<h3 className={styles.title}>{dish.title || 'Без названия'}</h3>
				</div>
				<div className={styles.right}>
					<div className={styles.content}>
						<div className={styles.count}>
							<FiMinus
								onClick={handleDecreaseQuantity}
								role='button'
								aria-label='Decrease quantity'
								size={32}
								className={styles.minus_button}
							/>
							<div className={styles.quantity}>{product.quantity}</div>
							<FiPlus
								onClick={handleIncreaseQuantity}
								role='button'
								aria-label='Increase quantity'
								size={32}
								className={styles.plus_button}
							/>
						</div>
						<div className={styles.price}>
							{dish.price * product.quantity} ₽
						</div>
						<div
							onClick={handleRemoveFromBasket}
							role='button'
							aria-label='Remove from basket'
							className={styles.delete}
						>
							<VscChromeClose size={32} className={styles.delete_button} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
