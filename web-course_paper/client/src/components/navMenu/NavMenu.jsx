import { useEffect, useState } from 'react'
import { CiShoppingBasket, CiUser } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { logout } from '../../redux/slices/authSlice'
import { clearCart, fetchCart } from '../../redux/slices/cartSlice'
import { LoginModal } from '../molal/register/RegisterModal'
import styles from './NavMenu.module.css'

export function NavMenu() {
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const user = useSelector(state => state.auth.user)
	const totalPrice = useSelector(state => state.cart.totalPrice)
	const dispatch = useDispatch()

	useEffect(() => {
		if (isAuthenticated && user) {
			dispatch(fetchCart(user.id))
		}
	}, [isAuthenticated, user, dispatch])

	const handleLogout = async () => {
		try {
			await dispatch(logout()).unwrap()
			dispatch(clearCart())
		} catch (error) {
			console.error('Ошибка при выходе:', error)
		}
	}

	const handleModalKeyDown = event => {
		if (event.key === 'Escape') {
			setIsModalOpen(false)
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.nav_menu}>
				{[
					{ to: '/salads', label: 'Салаты' },
					{ to: '/snacks', label: 'Закуски' },
					{ to: '/soups', label: 'Супы' },
					{ to: '/grilled-meat', label: 'Мясо на гриле' },
					{ to: '/grilled-fish', label: 'Рыба на гриле' },
					{ to: '/bakery', label: 'Выпечка' },
					{ to: '/desserts', label: 'Десерты' },
					{ to: '/drinks', label: 'Напитки' },
				].map(({ to, label }) => (
					<NavLink
						key={to}
						to={to}
						className={({ isActive }) =>
							isActive ? styles.nav_menu_item_active : styles.nav_menu_item
						}
					>
						{label}
					</NavLink>
				))}
			</div>
			<div className={styles.user}>
				{isAuthenticated ? (
					<div
						onClick={handleLogout}
						role='button'
						aria-label='Выход из аккаунта'
						className={styles.login}
					>
						{user.name}
					</div>
				) : (
					<>
						<CiUser
							onClick={() => setIsModalOpen(true)}
							onKeyDown={handleModalKeyDown}
							role='button'
							aria-label='Вход в аккаунт'
							tabIndex={0}
							size={45}
							className={styles.login}
						/>

						<LoginModal
							isOpen={isModalOpen}
							onClose={() => setIsModalOpen(false)}
						/>
					</>
				)}

				<Link
					to={isAuthenticated ? '/basket' : '#'}
					className={styles.shopping_basket}
					aria-label='Корзина'
				>
					<CiShoppingBasket size={45} className={styles.shopping_cart} />
					{totalPrice > 0 && <p className={styles.price}>{totalPrice}₽</p>}
				</Link>
			</div>
		</div>
	)
}
