import { useRef, useState } from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import Modal from 'react-modal'
import { useDispatch } from 'react-redux'
import { addDish } from '../../../redux/slices/dishSlice'
import styles from './AddDishModal.module.css'

export function AddDishModal({ isOpen, onClose }) {
	const dispatch = useDispatch()
	const [formData, setFormData] = useState({
		title: '',
		category: '',
		calories: '',
		proteins: '',
		fats: '',
		carbohydrates: '',
		weight: '',
		price: '',
		description: '',
		image: null,
	})
	const [previewImage, setPreviewImage] = useState(null)
	const descriptionRef = useRef(null)

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

	// Обработчик изменений в текстовых полях и селектах
	const handleInputChange = e => {
		const { name, value } = e.target
		setFormData(prevState => ({
			...prevState,
			[name]: value,
		}))
	}

	// Обработчик изменения изображения
	const handleImageChange = e => {
		const file = e.target.files[0]
		if (file) {
			setFormData(prevState => ({
				...prevState,
				image: file,
			}))

			// Создание URL для предпросмотра изображения
			const reader = new FileReader()
			reader.onload = () => {
				setPreviewImage(reader.result)
			}
			reader.readAsDataURL(file)
		}
	}

	// Отправка формы
	const handleSubmit = async e => {
		e.preventDefault()

		dispatch(addDish(formData))

		onClose()
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
		>
			<div className={styles.button} onClick={onClose}>
				<VscChromeClose size={40} className={styles.close} />
			</div>
			<div className={styles.container}>
				{previewImage ? (
					<div className={styles.preview}>
						<img src={previewImage} alt='Preview' />
					</div>
				) : (
					<div className={styles.empty_preview}>IMAGE</div>
				)}
				<form onSubmit={handleSubmit} className={styles.form}>
					<h2 className={styles.title}>Добавить блюдо</h2>
					<div className={styles.field}>
						<p>Название блюда:</p>
						<input
							className={styles.input}
							type='text'
							name='title'
							value={formData.title}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div className={styles.field}>
						<p>Категория:</p>
						<select
							className={styles.input}
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
							<p>Калорийность:</p>
							<input
								className={styles.input}
								type='number'
								name='calories'
								value={formData.calories}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div className={styles.field}>
							<p>Белки:</p>
							<input
								className={styles.input}
								type='number'
								name='proteins'
								value={formData.proteins}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div className={styles.field}>
							<p>Жиры:</p>
							<input
								className={styles.input}
								type='number'
								name='fats'
								value={formData.fats}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div className={styles.field}>
							<p>Углеводы:</p>
							<input
								className={styles.input}
								type='number'
								name='carbohydrates'
								value={formData.carbohydrates}
								onChange={handleInputChange}
								required
							/>
						</div>
					</div>
					<div className={styles.field}>
						<p>Вес (г):</p>
						<input
							className={styles.input}
							type='number'
							name='weight'
							value={formData.weight}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div className={styles.field}>
						<p>Цена (₽):</p>
						<input
							className={styles.input}
							type='number'
							name='price'
							value={formData.price}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div className={styles.field}>
						<p>Описание:</p>
						<div
							ref={descriptionRef}
							contentEditable={true}
							className={styles.description}
							onInput={e => {
								if (descriptionRef.current) {
									setFormData(prevState => ({
										...prevState,
										description: descriptionRef.current.textContent,
									}))
								}
							}}
							dangerouslySetInnerHTML={{ __html: formData.description }}
						/>
					</div>
					<div className={styles.field}>
						<p>Фото блюда:</p>
						<input
							className={styles.input_image}
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
