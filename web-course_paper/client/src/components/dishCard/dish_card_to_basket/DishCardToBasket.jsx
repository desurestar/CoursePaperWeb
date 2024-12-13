import { FiMinus, FiPlus } from 'react-icons/fi'
import { VscChromeClose } from 'react-icons/vsc'
import { useDispatch } from 'react-redux'
import {
	addToBasket,
	removeFromBasket,
	removeOneItem,
} from '../../../redux/slices/basketSlice'
import styles from './DishCardToBasket.module.css'

export function DishCardToBasket({ className, product }) {
	// const [count, setCount] = useState(product.count)
	// const { removeToBasket } = useBasket()
	// function deleteProduct() {
	// 	removeToBasket(product)
	// }
	const dispatch = useDispatch()
	const handleAddToBasket = () => {
		dispatch(addToBasket(product))
	}
	const handleRemoveOneItem = () => {
		dispatch(removeOneItem(product.id))
	}

	const handleRemoveFormBasket = () => {
		dispatch(removeFromBasket(product.id))
	}

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
								onClick={() => handleRemoveOneItem()}
								size={32}
								className={styles.minus_button}
							/>
							<div className={styles.quantity}>{product.quantity}</div>
							<FiPlus
								onClick={() => handleAddToBasket()}
								size={32}
								className={styles.plus_button}
							/>
						</div>
						<div className={styles.prise}>{product.totalPrise}₽</div>
						<div
							onClick={() => handleRemoveFormBasket()}
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
