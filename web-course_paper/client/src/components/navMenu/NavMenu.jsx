import { useState } from 'react'
import { CiShoppingBasket, CiUser } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { logout } from '../../redux/slices/authSlice'
import { LoginModal } from '../molal/register/RegisterModal'
import styles from './NavMenu.module.css'

export function NavMenu() {
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const user = useSelector(state => state.auth.user)
	const { totalPrice } = useSelector(state => state.basket)
	const getTotalPrise = totalPrice
	const dispatch = useDispatch()

	const handleLogout = async () => {
		try {
			await dispatch(logout()).unwrap()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.nav_menu}>
				<NavLink
					to={'/salads'}
					className={({ isActive }) =>
						isActive ? styles.nav_menu_item_active : styles.nav_menu_item
					}
				>
					Салаты
				</NavLink>
				<NavLink
					to={'/snacks'}
					className={({ isActive }) =>
						isActive ? styles.nav_menu_item_active : styles.nav_menu_item
					}
				>
					Закуски
				</NavLink>
				<NavLink
					to={'/soups'}
					className={({ isActive }) =>
						isActive ? styles.nav_menu_item_active : styles.nav_menu_item
					}
				>
					Супы
				</NavLink>
				<NavLink
					to={'/grilled-meat'}
					className={({ isActive }) =>
						isActive ? styles.nav_menu_item_active : styles.nav_menu_item
					}
				>
					Мясо на гриле
				</NavLink>
				<NavLink
					to={'/grilled-fish'}
					className={({ isActive }) =>
						isActive ? styles.nav_menu_item_active : styles.nav_menu_item
					}
				>
					Рыба на гриле
				</NavLink>
				<NavLink
					to={'/bakery'}
					className={({ isActive }) =>
						isActive ? styles.nav_menu_item_active : styles.nav_menu_item
					}
				>
					Выпечка
				</NavLink>
				<NavLink
					to={'/desserts'}
					className={({ isActive }) =>
						isActive ? styles.nav_menu_item_active : styles.nav_menu_item
					}
				>
					Десерты
				</NavLink>
				<NavLink
					to={'/drinks'}
					className={({ isActive }) =>
						isActive ? styles.nav_menu_item_active : styles.nav_menu_item
					}
				>
					Напитки
				</NavLink>
			</div>
			<div className={styles.user}>
				{isAuthenticated ? (
					<>
						<div onClick={() => handleLogout()} className={styles.login}>
							{user.name}
						</div>
					</>
				) : (
					<>
						<CiUser
							onClick={() => setIsModalOpen(true)}
							size={45}
							className={styles.login}
						/>

						<LoginModal
							isOpen={isModalOpen}
							onClose={() => setIsModalOpen(false)}
						/>
					</>
				)}

				<Link to={'/basket'} className={styles.shopping_basket}>
					<CiShoppingBasket size={45} className={styles.shopping_cart} />
					{getTotalPrise > 0 ? (
						<p className={styles.price}>{getTotalPrise}</p>
					) : (
						<></>
					)}
				</Link>
			</div>
		</div>
	)
}
