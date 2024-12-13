import { Logo } from '../logo/Logo'
import styles from './Footer.module.css'

export function Footer() {
	return (
		<footer className={styles.container}>
			<div className={styles.logo}>
				<Logo />
			</div>
			<div className={styles.background_content}>
				<a href='#' className={styles.link}>
					Доставка и оплата
				</a>
				<a href='#' className={styles.link}>
					Программа лояльности
				</a>
				<a href='#' className={styles.link}>
					О нас
				</a>
				<a href='#' className={styles.link}>
					Публичная оферта
				</a>
				<a href='#' className={styles.link}>
					Политика конфиденциальности
				</a>
			</div>
			<div className={styles.applications}>
				<div className={styles.app}>Приложение 1</div>
				<div className={styles.app}>Приложение 2</div>
			</div>
		</footer>
	)
}
