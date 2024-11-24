import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import './Slider.css'

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
		<div className='slider'>
			<div className='buttons'>
				<FiChevronLeft onClick={prevSlide} className='button left' size={35} />
				<FiChevronRight
					onClick={nextSlide}
					className='button right'
					size={35}
				/>
			</div>

			<div
				className='slide_container'
				style={{
					transform: `translateX(-${currentIndex * 100}%)`, // Смещение влево на 100% за каждый слайд
				}}
			>
				{images.map((image, index) => (
					<img
						key={index}
						className='image'
						src={image}
						alt={`Slide ${index}`}
					/>
				))}
			</div>
		</div>
	)
}
