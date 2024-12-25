import { useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { VscChromeClose } from 'react-icons/vsc'
import Modal from 'react-modal'
import { useDispatch } from 'react-redux'

import { editDish } from '../../../redux/slices/dishSlice'
import styles from './EditDishModal.module.css'

export function EditDishModal({ isOpen, onClose, product }) {
	const dispatch = useDispatch()
	const [formData, setFormData] = useState({
		title: product.title,
		category: product.category,
		calories: product.calories,
		proteins: product.proteins,
		fats: product.fats,
		carbohydrates: product.carbohydrates,
		weight: product.weight,
		price: product.price,
		description: product.description,
		image: product.imageUrl,
	})
	const [previewImage, setPreviewImage] = useState(
		`http://localhost:5000${product.imageUrl}` || null
	)
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

	const handleInputChange = e => {
		const { name, value } = e.target
		setFormData(prevState => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleImageChange = e => {
		const file = e.target.files[0]
		if (file) {
			setFormData(prevState => ({
				...prevState,
				image: file,
			}))

			const reader = new FileReader()
			reader.onload = () => {
				setPreviewImage(reader.result)
			}
			reader.readAsDataURL(file)
		}
	}

	const handleSubmit = async e => {
		e.preventDefault()
		onClose()
		dispatch(editDish({ id: product.id, ...formData }))
	}

	return (
		<Modal
			ariaHideApp={false}
			closeTimeoutMS={200}
			overlayClassName={{
				base: styles.overlay,
				afterOpen: styles.overlay_after_open,
				beforeClose: styles.overlay_before_close,
			}}
			className={{
				base: styles.modal,
				afterOpen: styles.modal_after_open,
				beforeClose: styles.modal_before_close,
			}}
			isOpen={isOpen}
			onRequestClose={onClose}
		>
			<Helmet>
				<title>Zagrebin Restaurant | Редактировать блюдо</title>
			</Helmet>
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
					<h2 className={styles.title}>Редактировать блюдо</h2>
					<div className={styles.field}>
						<p>Название блюда:</p>
						<input
							className={styles.input}
							type='text'
							name='title'
							value={formData.title}
							onChange={handleInputChange}
							required
							aria-label='Название блюда'
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
							aria-label='Категория'
						>
							<option value=''>Выберите категорию</option>
							{categories.map(category => (
								<option key={category} value={category}>
									{category}
								</option>
							))}
						</select>
					</div>
					<div className={styles.field_group}>
						<div className={styles.field}>
							<p>Калорийность:</p>
							<input
								className={styles.input}
								type='number'
								name='calories'
								value={formData.calories}
								onChange={handleInputChange}
								required
								aria-label='Калорийность'
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
								aria-label='Белки'
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
								aria-label='Жиры'
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
								aria-label='Углеводы'
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
							aria-label='Вес'
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
							aria-label='Цена'
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
							aria-label='Фото блюда'
						/>
					</div>
					<button
						type='submit'
						className={styles.submit}
						aria-label='Редактировать блюдо'
					>
						Редактировать
					</button>
				</form>
			</div>
		</Modal>
	)
}
