import { CiShoppingBasket } from 'react-icons/ci'
import Modal from 'react-modal'
import image_dash from '../../../assets/dish.jpg'
import styles from './FullDescDashModal.module.css'

export function FullDescDashModal({ isOpen, onClose, children }) {
	return (
		<Modal
			ariaHideApp={false}
			closeTimeoutMS={200}
			overlayClassName={{
				base: styles.overlay,
				afterOpen: styles['overlay--after-open'],
				beforeClose: styles['overlay--before-close'],
			}}
			className={{
				base: styles.modal,
				afterOpen: styles['modal--after-open'],
				beforeClose: styles['modal--before-close'],
			}}
			isOpen={isOpen}
			onRequestClose={onClose}
			contentLabel='Description Dash'
		>
			<div className={styles.button}>
				<button onClick={onClose} className={styles.close}></button>
			</div>
			<div className={styles.content}>
				<div className={styles.image_container}>
					<img className={styles.image} src={image_dash} alt='image dash' />
				</div>
				<div className={styles.description}>
					<h2 className={styles.title}>Dash</h2>
					<p className={styles.ingredients}>
						Баранина, лук репчатый, масло растительное, соль, лаваш, зерна
						граната, специи, укроп, петрушка
					</p>
					<div className={styles.nutritional_value}>
						<div className={styles.nutritional_value_elem}>
							Калорийность — 318,8 ккал/100 г
						</div>
						<div className={styles.nutritional_value_elem}>Белки — 29,2</div>
						<div className={styles.nutritional_value_elem}>Жиры — 18,7</div>
						<div className={styles.nutritional_value_elem}>Углеводы — 8,4</div>
					</div>
					<div className={styles.tableau}>
						<div className={styles.prise_and_wight}>
							<div className={styles.price}>900 P</div>
							<div className={styles.wight}>600 г</div>
						</div>
						<div className={styles.adding}>
							<CiShoppingBasket className={styles.basket} size={40} />
							<div className={styles.add_to_basket}>В корзину</div>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	)
}
