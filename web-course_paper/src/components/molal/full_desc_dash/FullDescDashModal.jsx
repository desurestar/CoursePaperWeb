import { CiShoppingBasket } from 'react-icons/ci'
import { VscChromeClose } from 'react-icons/vsc'
import Modal from 'react-modal'
import styles from './FullDescDashModal.module.css'

export function FullDescDashModal({ isOpen, onClose, product }) {
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
				<VscChromeClose size={40} onClick={onClose} className={styles.close} />
			</div>
			<div className={styles.content}>
				z
				<div className={styles.image_container}>
					<img className={styles.image} src={product.image} alt='image dash' />
				</div>
				<div className={styles.description}>
					<div className={styles.header}>
						<h2 className={styles.title}>{product.title}</h2>
						<p className={styles.ingredients}>{product.desc}</p>
					</div>
					<div className={styles.footer}>
						<div className={styles.nutritional_value}>
							<div className={styles.nutritional_value_elem}>
								Калорийность — {product.calories} ккал/100 г
							</div>
							<div className={styles.nutritional_value_elem}>
								Белки — {product.proteins}
							</div>
							<div className={styles.nutritional_value_elem}>
								Жиры — {product.fats}
							</div>
							<div className={styles.nutritional_value_elem}>
								Углеводы — {product.carbohydrates}
							</div>
						</div>
						<div className={styles.tableau}>
							<div className={styles.prise_and_wight}>
								<div className={styles.price}>{product.prise} P</div>
								<div className={styles.wight}>{product.size} г</div>
							</div>
							<div className={styles.adding}>
								<CiShoppingBasket className={styles.basket} size={40} />
								<div className={styles.add_to_basket}>В корзину</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	)
}
