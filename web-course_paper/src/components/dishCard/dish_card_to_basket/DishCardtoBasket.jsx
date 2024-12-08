import { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { VscChromeClose } from 'react-icons/vsc'
import { useBasket } from '../../../context/BasketContext'
import styles from './DishCardToBasket.module.css'

export function DishCardToBasket({ className, product }) {
	const [count, setCount] = useState(product.count)
	const { basketItems } = useBasket()
	function deleteProduct() {}

	return (
		<div className={className}>
			<div key={product.id} className={styles.item}>
				<div className={styles.left}>
					<div className={styles.image_container}>
						<img
							className={styles.image}
							src={product.image}
							alt={`Image dish with id: ${product.id}`}
						/>
					</div>
					<h3 className={styles.title}>{product.title}</h3>
				</div>
				<div className={styles.right}>
					<div className={styles.content}>
						<div className={styles.count}>
							<FiMinus
								onClick={() => setCount(count => (count === 1 ? 1 : count - 1))}
								size={32}
								className={styles.minus_button}
							/>
							<div className={styles.quantity}>{count}</div>
							<FiPlus
								onClick={() => setCount(count => count + 1)}
								size={32}
								className={styles.plus_button}
							/>
						</div>
						<div className={styles.prise}>{product.prise * count} ₽</div>
						<div className={styles.delete}>
							<VscChromeClose size={32} className={styles.delete_button} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
