import logo from '../../assets/logo.svg'
import '../variables.css'
import styles from './Header.module.css'

export function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img className={styles.logo__svg} src={logo} alt='logo' width={35} />
				<h2>Zagrebin Delivery</h2>
			</div>
			<nav className={styles.nav}>
				<a href='#menu'>Доставка и оплата</a>
				<a href='#about'>Публичная оферта</a>
				<a href='#delivery'>Политика конфиденциальности</a>
				<a href='#delivery'>Программа лояльности</a>
			</nav>
			<div className={styles.actions}>
				<a href='tel:+7XXXXXXXXXX' className='phone'>
					+7 (XXX) XXX-XX-XX
				</a>
				<a href='#cart' className='cart'>
					Корзина
				</a>
			</div>
		</header>
	)
}
