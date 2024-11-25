import logo from '../../assets/logo.svg'
import styles from './Logo.module.css'

export function Logo() {
	return (
		<div className={styles.logo}>
			<img className={styles.logo_svg} src={logo} alt='logo' width={35} />
			<h2>Zagrebin Delivery</h2>
		</div>
	)
}
