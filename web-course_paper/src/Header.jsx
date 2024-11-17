import './Header.css'

export function Header() {
	return (
		<>
			<header className='header'>
				<div className='header'>
					LOGO
					<p>LOGO</p>
				</div>
				<nav className='header-navigation'>
					<ul className='list-navigation'>
						<li className='header-list_elem'>
							<a>Доставка и оплата</a>
						</li>
						<li className='header-list_elem'>
							<a>Программа лояльности</a>
						</li>
						<li className='header-list_elem'>
							<a>О нас</a>
						</li>
						<li className='header-list_elem'>
							<a>Публичная оферта</a>
						</li>
						<li className='header-list_elem'>
							<a>Политика конфиденциальности</a>
						</li>
					</ul>
				</nav>
				<div className='header-actions'>
					<button className='button-login'>Регистрация</button>
					<button className='button-sing_up'>Войти</button>
				</div>
			</header>
		</>
	)
}
