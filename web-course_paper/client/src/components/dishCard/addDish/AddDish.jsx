import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../../../redux/slices/basketSlice'
import { AddDishModal } from '../../molal/addDishModal/AddDishModal'
import '../../variables.css'
import styles from './AddDish.module.css'

export function AddDish({ className }) {
	const [isModalOpen, setIsModalOpen] = useState(false)

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
				{' '}
				Добавить{' '}
			</div>
			<AddDishModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(!isModalOpen)}
			/>
		</div>
	)
}
