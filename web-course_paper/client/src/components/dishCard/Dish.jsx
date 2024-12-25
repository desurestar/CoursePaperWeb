import { useEffect, useState } from 'react'
import { FiEdit } from 'react-icons/fi'
import { GoPlusCircle } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, fetchCart } from '../../redux/slices/cartSlice'
import { EditDishModal } from '../molal/editDishModal/EditDishModal'
import { FullDescDashModal } from '../molal/full_desc_dash/FullDescDashModal'
import { LoginModal } from '../molal/register/RegisterModal'
import '../variables.css'
import styles from './Dish.module.css'

export function Dish({ className, product }) {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isEditModalOpen, setIsEditModalOpen] = useState(false)
	const [isRegisterOpen, setIsRegisterOpen] = useState(false)
	const { isAuthenticated } = useSelector(state => state.auth)
	const user = useSelector(state => state.auth.user)
	const dispatch = useDispatch()

	useEffect(() => {
		if (isAuthenticated && user) {
			dispatch(fetchCart(user.id))
		}
	}, [isAuthenticated, user, dispatch])

	const handleAddToBasket = async (e, dishId) => {
		e.stopPropagation()

		if (isAuthenticated) {
			try {
				await dispatch(addToCart({ userId: user.id, dishId, quantity: 1 }))
				dispatch(fetchCart(user.id))
			} catch (error) {
				console.error('Ошибка при добавлении в корзину:', error)
			}
		} else {
			setIsRegisterOpen(true)
			setIsModalOpen(false)
		}
	}

	return (
		<div className={className}>
			<div className={styles.container}>
				<div
					className={styles.image}
					onClick={e => {
						e.stopPropagation()
						setIsModalOpen(isModalOpen ? false : true)
					}}
				>
					<img
						className={styles.image_ex}
						src={`http://localhost:5000${product.imageUrl}`}
						alt={`Image for dish with id: ${product.id}`}
					/>
				</div>
				<div className={styles.content}>
					<div className={styles.title}>{product.title}</div>
					<div className={styles.size}>{product.weight} г</div>
					<div className={styles.desc}>{product.description}</div>
				</div>
				<div className={styles.foot}>
					<div className={styles.price}>{product.price}₽</div>
					<div className={styles.edit}>
						{isAuthenticated && (
							<>
								<div
									onClick={e => {
										e.stopPropagation()
										setIsEditModalOpen(true)
									}}
									className={styles.edit_icon}
								>
									<FiEdit size={35} />
								</div>
								<EditDishModal
									isOpen={isEditModalOpen}
									onClose={e => {
										e.stopPropagation()
										setIsEditModalOpen(false)
									}}
									product={product}
								/>
							</>
						)}
						<div
							onClick={e => handleAddToBasket(e, product.id)}
							className={styles.adding}
						>
							<GoPlusCircle size={35} />
						</div>
					</div>
				</div>
				<LoginModal
					isOpen={isRegisterOpen}
					onClose={e => {
						e.stopPropagation()
						setIsRegisterOpen(false)
					}}
				/>
				<FullDescDashModal
					product={product}
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
				/>
			</div>
		</div>
	)
}
