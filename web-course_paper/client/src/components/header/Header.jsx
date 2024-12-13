import { Link } from 'react-router-dom'
import { Logo } from '../logo/Logo'
import { Timer } from '../timer/Timer'
import '../variables.css'
import styles from './Header.module.css'

export function Header() {
	return (
		<header className={styles.header}>
			<Logo />
			<nav className={styles.nav}>
				<Link className={styles.link} to={'/'}>
					Доставка
				</Link>
				<Link className={styles.link} to={'/booking'}>
					Банкетные залы
				</Link>
				<Link className={styles.link} to={'/events'}>
					Мероприятия
				</Link>
				<Link className={styles.link} to={'/contacts'}>
					Контакты
				</Link>
			</nav>
			<div className={styles.actions}>
				<div href='tel:+7XXXXXXXXXX' className={styles.phone}>
					+7 (926) 927-32-76
				</div>
				<Timer className={styles.timer} />
			</div>
		</header>
	)
}
