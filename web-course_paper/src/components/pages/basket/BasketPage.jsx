import { CiTrash } from 'react-icons/ci'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { useBasket } from '../../../context/BasketContext'
import { Header } from '../../header/Header'
import styles from './BasketPage.module.css'

export function BasketPage() {
	// const totalPrice = 0
	const { basketItems } = useBasket()
	return (
		<div className={styles.basket}>
			<div className={styles.container}>
				<div className={styles.products_list}>
					{basketItems.length === 0 ? (
						<div className={styles.empty}>
							<Header />
							<div className={styles.empty_message}>Здесь пусто</div>
						</div>
					) : (
						basketItems.map(product => (
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
										<div className={styles.prise}>9000 ₽</div>
									</div>
								</div>
							</div>
						))
					)}
				</div>
			</div>
		</div>
	)
}
