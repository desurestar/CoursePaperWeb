import { useState } from 'react'
import { GoPlusCircle } from 'react-icons/go'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../../redux/slices/basketSlice'
import { FullDescDashModal } from '../molal/full_desc_dash/FullDescDashModal'
import '../variables.css'
import styles from './Dish.module.css'

export function Dish({ className, product }) {
	const [isModalOpen, setIsModalOpen] = useState(false)
	// const { addToBasket } = useBasket()
	const dispatch = useDispatch()

	const handleAddToBasket = e => {
		e.stopPropagation()
		dispatch(addToBasket(product))
	}

	return (
		<div className={className}>
			<div
				onClick={() => setIsModalOpen(!isModalOpen)}
				className={styles.container}
			>
				<div className={styles.image}>
					<img
						className={styles.image_ex}
						src={`http://localhost:5000/dish/image/${product.imageId}`}
						alt={`Image for dish with id: ${product.id}`}
					/>
				</div>
				<div className={styles.content}>
					<div className={styles.title}>{product.title}</div>
					<div className={styles.size}>{product.weight} г</div>
					<div className={styles.desc}>{product.desc}</div>
				</div>
				<div className={styles.foot}>
					<div className={styles.price}>{product.price}</div>
					<div onClick={e => handleAddToBasket(e)} className={styles.adding}>
						<GoPlusCircle size={35} />
					</div>
				</div>
				<FullDescDashModal
					product={product}
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
				/>
			</div>
		</div>
	)
}
