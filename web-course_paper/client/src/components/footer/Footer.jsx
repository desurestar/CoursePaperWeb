import { Logo } from '../logo/Logo'
import styles from './Footer.module.css'

export function Footer({ className }) {
	return (
		<div className={className}>
			<footer className={styles.container}>
				<div className={styles.logo}>
					<Logo />
				</div>
				<div className={styles.background_content}>
					<a href='#' className={styles.link}>
						Программа лояльности
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
		</div>
	)
}
