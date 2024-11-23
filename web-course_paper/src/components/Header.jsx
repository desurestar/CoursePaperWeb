import logo from '../assets/logo.svg'
import './Header.css'
import './variables.css'

export function Header() {
	return (
		<header className='header'>
			<div className='logo'>
				<img className='logo__svg' src={logo} alt='logo' width={35} />
				<h2>Zagrebin Delivery</h2>
			</div>
			<nav className='nav'>
				<a href='#menu'>Доставка и оплата</a>
				<a href='#about'>Публичная оферта</a>
				<a href='#delivery'>Политика конфиденциальности</a>
				<a href='#delivery'>Программа лояльности</a>
			</nav>
			<div className='actions'>
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
