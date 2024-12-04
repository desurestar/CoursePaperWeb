import { GoPlusCircle } from 'react-icons/go'
import '../variables.css'
import styles from './Dish.module.css'

export function Dish({ onClick, product, addToBasket }) {
	return (
		<div onClick={onClick} className={styles.container}>
			<div className={styles.image}>
				<img
					className={styles.image_ex}
					src={product.image}
					alt={`Image for dish with id: ${product.id}`}
				/>
			</div>
			<div className={styles.content}>
				<div className={styles.title}>{product.title}</div>
				<div className={styles.size}>{product.size}</div>
				<div className={styles.desc}>{product.desc}</div>
			</div>
			<div className={styles.foot}>
				<div className={styles.prise}>от {product.prise}</div>
				<div onClick={addToBasket} className={styles.adding}>
					<GoPlusCircle size={35} />
				</div>
			</div>
		</div>
	)
}
