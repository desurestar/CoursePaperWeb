import { Logo } from '../logo/Logo'
import '../variables.css'
import styles from './Header.module.css'

export function Header() {
	return (
		<header className={styles.header}>
			<Logo />
			<nav className={styles.nav}>
				<a href='#menu'>Доставка и оплата</a>
				<a href='#about'>Публичная оферта</a>
				<a href='#delivery'>Политика конфиденциальности</a>
				<a href='#delivery'>Программа лояльности</a>
			</nav>
			<div className={styles.actions}>
				<a href='tel:+7XXXXXXXXXX' className={styles.phone}>
					+7 (XXX) XXX-XX-XX
				</a>
				<a href='#cart' className={styles.cart}>
					Корзина
				</a>
			</div>
		</header>
	)
}
