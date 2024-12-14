import { useState } from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import Modal from 'react-modal'
import styles from './AddDishModal.module.css'

export function AddDishModal({ isOpen, onClose, onSubmit }) {
	const [formData, setFormData] = useState({
		title: '',
		category: '',
		calories: '',
		proteins: '',
		fats: '',
		carbohydrates: '',
		weight: '',
		price: '',
		image: null,
	})

	const [previewImage, setPreviewImage] = useState(null)

	const categories = [
		'Салаты',
		'Закуски',
		'Супы',
		'Мясо на гриле',
		'Рыба на гриле',
		'Выпечка',
		'Десерты',
		'Напитки',
	]

	const handleInputChange = e => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleImageChange = e => {
		const file = e.target.files[0]
		if (file) {
			setFormData({ ...formData, image: file })
			setPreviewImage(URL.createObjectURL(file))
		}
	}

	const handleSubmit = e => {
		e.preventDefault()
		onSubmit(formData)
	}

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
			contentLabel='Add Dish'
		>
			<div className={styles.button} onClick={onClose}>
				<VscChromeClose size={40} className={styles.close} />
			</div>
			<div className={styles.container}>
				{previewImage && (
					<div className={styles.preview}>
						<img src={previewImage} alt='Preview' />
					</div>
				)}
				<form onSubmit={handleSubmit} className={styles.form}>
					<h2 className={styles.title}>Добавить блюдо</h2>
					<div className={styles.field}>
						<label>Название блюда:</label>
						<input
							type='text'
							name='title'
							value={formData.title}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div className={styles.field}>
						<label>Категория:</label>
						<select
							name='category'
							value={formData.category}
							onChange={handleInputChange}
							required
						>
							<option value=''>Выберите категорию</option>
							{categories.map(category => (
								<option key={category} value={category}>
									{category}
								</option>
							))}
						</select>
					</div>
					<div className={styles.fieldGroup}>
						<div className={styles.field}>
							<label>Калорийность:</label>
							<input
								type='number'
								name='calories'
								value={formData.calories}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div className={styles.field}>
							<label>Белки:</label>
							<input
								type='number'
								name='proteins'
								value={formData.proteins}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div className={styles.field}>
							<label>Жиры:</label>
							<input
								type='number'
								name='fats'
								value={formData.fats}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div className={styles.field}>
							<label>Углеводы:</label>
							<input
								type='number'
								name='carbohydrates'
								value={formData.carbohydrates}
								onChange={handleInputChange}
								required
							/>
						</div>
					</div>
					<div className={styles.field}>
						<label>Вес (г):</label>
						<input
							type='number'
							name='weight'
							value={formData.weight}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div className={styles.field}>
						<label>Цена (₽):</label>
						<input
							type='number'
							name='price'
							value={formData.price}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div className={styles.field}>
						<label>Фото блюда:</label>
						<input
							type='file'
							accept='image/*'
							onChange={handleImageChange}
							required
						/>
					</div>
					<button type='submit' className={styles.submit}>
						Добавить
					</button>
				</form>
			</div>
		</Modal>
	)
}
