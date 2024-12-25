import { Helmet } from 'react-helmet-async'
import { CiShoppingBasket } from 'react-icons/ci'
import { VscChromeClose } from 'react-icons/vsc'
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, fetchCart } from '../../../redux/slices/cartSlice'
import { deleteDish } from '../../../redux/slices/dishSlice'
import styles from './FullDescDashModal.module.css'
export function FullDescDashModal({ isOpen, onClose, product }) {
	const dispatch = useDispatch()
	const { isAuthenticated, user } = useSelector(state => state.auth)

	const handleAddToBasket = async (e, dishId) => {
		e.stopPropagation()

		if (isAuthenticated) {
			try {
				await dispatch(addToCart({ userId: user.id, dishId, quantity: 1 }))
				onClose()
				dispatch(fetchCart(user.id))
			} catch (error) {
				console.error('Ошибка при добавлении в корзину:', error)
			}
		} else {
			onClose()
		}
	}

	const handleDeleteDish = dishId => {
		try {
			dispatch(deleteDish(dishId))
			onClose()
			dispatch(fetchCart(user.id))
		} catch (error) {
			console.log('Ошибка при удалении: ', error)
		}
	}

	return (
		<Modal
			ariaHideApp={false}
			closeTimeoutMS={200}
			overlayClassName={{
				base: styles.overlay,
				afterOpen: styles['overlay--after-open'],
				beforeClose: styles['overlay--before-close'],
			}}
			className={{
				base: styles.modal,
				afterOpen: styles['modal--after-open'],
				beforeClose: styles['modal--before-close'],
			}}
			isOpen={isOpen}
			onRequestClose={onClose}
			contentLabel='Description Dash'
		>
			<Helmet>
				<title>Zagrebin Restaurant | Описание блюда</title>
			</Helmet>
			<div className={styles.buttons} onClick={onClose}>
				{isAuthenticated && user.role === 'admin' && (
					<div
						onClick={() => handleDeleteDish(product.id)}
						className={styles.delete}
					>
						Удалить
					</div>
				)}
				<div>.</div>
				<VscChromeClose size={40} className={styles.close} />
			</div>
			<div className={styles.content}>
				<div className={styles.image_container}>
					<img
						className={styles.image}
						src={`http://localhost:5000${product.imageUrl}`}
						alt='image dash'
					/>
				</div>
				<div className={styles.description}>
					<div className={styles.header}>
						<h2 className={styles.title}>{product.title}</h2>
						<p className={styles.ingredients}>{product.description}</p>
					</div>
					<div className={styles.footer}>
						<div className={styles.nutritional_value}>
							<div className={styles.nutritional_value_elem}>
								Калорийность — {product.calories} ккал/100 г
							</div>
							<div className={styles.nutritional_value_elem}>
								Белки — {product.proteins}
							</div>
							<div className={styles.nutritional_value_elem}>
								Жиры — {product.fats}
							</div>
							<div className={styles.nutritional_value_elem}>
								Углеводы — {product.carbohydrates}
							</div>
						</div>
						<div className={styles.tableau}>
							<div className={styles.prise_and_wight}>
								<div className={styles.price}>{product.price} P</div>
								<div className={styles.wight}>{product.weight} г</div>
							</div>
							<div
								onClick={e => handleAddToBasket(e, product.id)}
								className={styles.adding}
							>
								<CiShoppingBasket className={styles.basket} size={40} />
								<div className={styles.add_to_basket}>В корзину</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	)
}
