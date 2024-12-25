import { useEffect, useState } from 'react'
import { GoPlusCircle } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, fetchCart } from '../../redux/slices/cartSlice'
import { FullDescDashModal } from '../molal/full_desc_dash/FullDescDashModal'
import { LoginModal } from '../molal/register/RegisterModal'
import '../variables.css'
import styles from './Dish.module.css'

export function Dish({ className, product }) {
	const [isModalOpen, setIsModalOpen] = useState(false)
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

	const handleIsRegisterOpen = e => {
		e.stopPropagation()
		setIsRegisterOpen(!isRegisterOpen)
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
<<<<<<< HEAD
						src={`http://localhost:5000/dish/image/${product.imageId}`}
=======
						src={`http://localhost:5000${product.imageUrl}`}
>>>>>>> test
						alt={`Image for dish with id: ${product.id}`}
					/>
				</div>
				<div className={styles.content}>
					<div className={styles.title}>{product.title}</div>
					<div className={styles.size}>{product.weight} г</div>
<<<<<<< HEAD
					<div className={styles.desc}>{product.desc}</div>
=======
					<div className={styles.desc}>{product.description}</div>
>>>>>>> test
				</div>
				<div className={styles.foot}>
					<div className={styles.price}>{product.price}₽</div>
					<div
						onClick={e => handleAddToBasket(e, product.id)}
						className={styles.adding}
					>
						<GoPlusCircle size={35} />
					</div>
				</div>
				<LoginModal
					isOpen={isRegisterOpen}
					onClose={e => handleIsRegisterOpen(e)}
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
