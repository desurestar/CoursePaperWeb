import image from '../../assets/dish.jpg'
import styles from './Dish.module.css'

export function Dish() {
	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<img className={styles.image_ex} src={image} alt={`Image for dish`} />
			</div>
			<div className={styles.content}>
				<div className={styles.title}>Dish</div>
				<div className={styles.size}>600 g</div>
				<div className={styles.desc}>
					Баранина, лук репчатый, масло растительное, соль, лаваш, зерна
					граната, специи, укроп, петрушка
				</div>
			</div>
			<div className={styles.foot}>
				<div className={styles.prise}>от 900</div>
				<div className={styles.dding}>добавить</div>
			</div>
		</div>
	)
}
