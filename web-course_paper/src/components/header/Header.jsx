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
				<Link to={'/booking'}>Банкетные залы</Link>
				<Link to={'/events'}>Мероприятия</Link>
				<Link to={'/contacts'}>Программа лояльности</Link>
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
