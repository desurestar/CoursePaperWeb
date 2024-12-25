import { HiOutlineArrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import styles from './BookingNav.module.css'

export function BookingNav({ className = '', title }) {
	const navigate = useNavigate()

	const goBack = () => {
		navigate(-1)
	}

	return (
		<div className={className}>
			<div className={styles.container}>
				<div className={styles.exit}>
					<div onClick={() => goBack()} className={styles.left}>
						<HiOutlineArrowLeft className={styles.left} />
					</div>
				</div>
				<span className={styles.title}>{title}</span>
			</div>
		</div>
	)
}
