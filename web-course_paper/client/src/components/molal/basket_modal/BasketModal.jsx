import { CiTrash } from 'react-icons/ci'
import { FiMinus, FiPlus } from 'react-icons/fi'
import Modal from 'react-modal'
import styles from './BasketModal.module.css'

export function BasketModal({ className, isOpen, onClose, products }) {
	// const totalPrice = 0

	return (
		<Modal
			ariaHideApp={false}
			isOpen={isOpen}
			onRequestClose={onClose}
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
		>
			<div className={styles.container}>
				<div className={styles.products_list}>
					{products.map(product => (
						<div key={product.id} className={styles.item}>
							<div className={styles.image_container}>
								<img
									className={styles.image}
									src={product.image}
									alt={`Image dish with id: ${product.id}`}
								/>
							</div>

							<div className={styles.content}>
								<div className={styles.main_content}>
									<h3 className={styles.title}>{product.title}</h3>
									<div className={styles.count}>
										<FiMinus size={40} className={styles.minus_button} />
										<div className={styles.quantity}>1</div>
										<FiPlus size={40} className={styles.plus_button} />
									</div>
								</div>

								<div className={styles.delete}>
									<CiTrash size={20} className={styles.delete_button} />
									<div className={styles.price}>9000 ₽</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</Modal>
	)
}
