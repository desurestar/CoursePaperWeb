import { useState } from 'react'
import { GoPlusCircle } from 'react-icons/go'
import { useBasket } from '../../context/BasketContext'
import { FullDescDashModal } from '../molal/full_desc_dash/FullDescDashModal'
import '../variables.css'
import styles from './Dish.module.css'

export function Dish({ product }) {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const { addToBasket } = useBasket()
	const handleAddToBasket = e => {
		e.stopPropagation()
		addToBasket(product)
		console.log(addToBasket)
	}
	return (
		<div onClick={() => setIsModalOpen(true)} className={styles.container}>
			<div className={styles.image}>
				<img
					className={styles.image_ex}
					src={product.image}
					alt={`Image for dish with id: ${product.id}`}
				/>
			</div>
			<div className={styles.content}>
				<div className={styles.title}>{product.title}</div>
				<div className={styles.size}>{product.size}</div>
				<div className={styles.desc}>{product.desc}</div>
			</div>
			<div className={styles.foot}>
				<div className={styles.prise}>от {product.prise}</div>
				<div
					onClick={e => {
						handleAddToBasket(e)
					}}
					className={styles.adding}
				>
					<GoPlusCircle size={35} />
				</div>
			</div>
			<FullDescDashModal
				product={product}
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</div>
	)
}
