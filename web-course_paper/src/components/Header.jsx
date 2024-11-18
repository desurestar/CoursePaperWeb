import './Header.css'

export function Header() {
	return (
		<header className='header'>
			<div className='header__container'>
				<div className='header__logo'>
					<img
						src='https://via.placeholder.com/150'
						alt='Logo'
						className='header__logo-img'
					/>
				</div>
				<nav className='header__nav'>
					<ul className='header__nav-list'>
						<li className='header__nav-item'>
							<a href='#delivery' className='header__nav-link'>
								Доставка и оплата
							</a>
						</li>
						<li className='header__nav-item'>
							<a href='#loyalty' className='header__nav-link'>
								Программа лояльности
							</a>
						</li>
						<li className='header__nav-item'>
							<a href='#offer' className='header__nav-link'>
								Публичная оферта
							</a>
						</li>
						<li className='header__nav-item'>
							<a href='#privacy' className='header__nav-link'>
								Политика конфиденциальности
							</a>
						</li>
					</ul>
				</nav>
				<div className='header__buttons'>
					<button className='header__button'>Регистрация</button>
					<button className='header__button header__button--login'>
						Войти
					</button>
				</div>
			</div>
		</header>
	)
}
