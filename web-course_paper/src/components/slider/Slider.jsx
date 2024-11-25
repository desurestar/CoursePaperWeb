import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import styles from './Slider.module.css'

export function Slider({ images }) {
	const [currentIndex, setCurrentIndex] = useState(0)
	const nextSlide = () => {
		setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
	}
	const prevSlide = () => {
		setCurrentIndex(
			prevIndex => (prevIndex - 1 + images.length) % images.length
		)
	}

	return (
		<div className={styles.slider}>
			<div className='buttons'>
				<FiChevronLeft
					onClick={prevSlide}
					className={`${styles.button} ${styles.left}`}
					size={35}
				/>
				<FiChevronRight
					onClick={nextSlide}
					className={`${styles.button} ${styles.right}`}
					size={35}
				/>
			</div>

			<div
				className={styles.slide_container}
				style={{
					transform: `translateX(-${currentIndex * 100}%)`,
				}}
			>
				{images.map((image, index) => (
					<img
						key={index}
						className={styles.image}
						src={image}
						alt={`Slide ${index}`}
					/>
				))}
			</div>
		</div>
	)
}
