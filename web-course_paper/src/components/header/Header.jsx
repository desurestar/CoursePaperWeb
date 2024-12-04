import { Link } from 'react-router-dom'
import { Logo } from '../logo/Logo'
import '../variables.css'
import styles from './Header.module.css'

export function Header() {
	return (
		<header className={styles.header}>
			<Logo />
			<nav className={styles.nav}>
				<Link to={'/'}>Доставка</Link>
				<Link to={'booking'}>Бронирование</Link>
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
