import { CiShoppingBasket, CiUser } from 'react-icons/ci'
import styles from './NavMenu.module.css'

export function NavMenu() {
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
				<CiUser size={45} className={styles.login} />
				<CiShoppingBasket size={45} className={styles.shopping_cart} />
			</div>
		</div>
	)
}
