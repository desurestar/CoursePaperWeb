import { useState } from 'react'
import { CiShoppingBasket, CiUser } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { useBasket } from '../../context/BasketContext'
import { LoginModal } from '../molal/login/LoginModal'
import styles from './NavMenu.module.css'

export function NavMenu() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isBasketModalOpen, setIsBasketModalOpen] = useState(false)
	const { basketItems } = useBasket()

	const totalPrice =
		basketItems.length === 0
			? 0
			: basketItems.reduce((total, item) => {
					return total + item.prise
			  })
	// const totalPrice = 0
	return (
		<div className={styles.container}>
			<div className={styles.list_menu}>
				<div className={styles.nav_menu}>
					<a href='#' className={styles.nav_menu_item}>
						Салаты
					</a>
					<a href='#' className={styles.nav_menu_item}>
						Закуски
					</a>
					<a href='#' className={styles.nav_menu_item}>
						Супы
					</a>
					<a href='#' className={styles.nav_menu_item}>
						Мясо на гриле
					</a>
					<a href='#' className={styles.nav_menu_item}>
						Рыба на гриле
					</a>
					<a href='#' className={styles.nav_menu_item}>
						Выпечка
					</a>
					<a href='#' className={styles.nav_menu_item}>
						Десерты
					</a>
					<a href='#' className={styles.nav_menu_item}>
						Напитки
					</a>
				</div>
			</div>
			<div className={styles.user}>
				<CiUser
					onClick={() => setIsModalOpen(true)}
					size={45}
					className={styles.login}
				/>
				<LoginModal
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
				/>

				<Link to={'/basket'} className={styles.shopping_basket}>
					<CiShoppingBasket size={45} className={styles.shopping_cart} />
					{totalPrice > 0 ? (
						<p className={styles.prise}>{totalPrice}</p>
					) : (
						<></>
					)}
				</Link>
			</div>
		</div>
	)
}
