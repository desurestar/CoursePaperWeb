import styles from './DescHall.module.css'

export function DescHall() {
	return (
		<div>
			<header className={styles.header_image}>
				<img src={''} alt='hall image' />
			</header>
			<h1 className={styles.title}>Банкетный зал</h1>
			<div className={styles.desc}>
				<div className={styles.elem}>
					<h2 className={styles.name_elem}>Площадь</h2>
					<ul className={styles.list}>
						<li className={styles.elem_list}>140 м</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
