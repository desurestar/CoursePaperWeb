import { CiShoppingBasket, CiUser } from 'react-icons/ci'
import './NavMenu.css'

export function NavMenu() {
	return (
		<div className='container'>
			<div className='list_menu'>
				<div className='nav_menu'>
					<a href='#' className='nav_menu_item'>
						Салаты
					</a>
					<a href='#' className='nav_menu_item'>
						Закуски
					</a>
					<a href='#' className='nav_menu_item'>
						Супы
					</a>
					<a href='#' className='nav_menu_item'>
						Мясо на гриле
					</a>
					<a href='#' className='nav_menu_item'>
						Рыба на гриле
					</a>
					<a href='#' className='nav_menu_item'>
						Выпечка
					</a>
					<a href='#' className='nav_menu_item'>
						Десерты
					</a>
					<a href='#' className='nav_menu_item'>
						Напитки
					</a>
				</div>
			</div>
			<div className='user'>
				<CiUser size={45} className='login' />
				<CiShoppingBasket size={45} className='shopping_cart' />
			</div>
		</div>
	)
}
