import { useState } from 'react'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import styles from './Address.module.css'

export function Address({ className }) {
	const { user } = useSelector(state => state.auth)
	const [addressForm, setAddressForm] = useState({
		street: '',
		house: '',
		entrance: '',
		floor: '',
		apartment: '',
	})

	const handleInputChange = e => {
		const { name, value } = e.target
		setAddressForm(prevState => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleSubmit = e => {}

	return (
		<div className={className}>
			<div className={styles.content}>
				<Header />
				<div className={styles.container}>
					<button className={styles.exit}>
						<Link className={styles.left} to='/basket'>
							<HiOutlineArrowLeft className={styles.left} />
						</Link>
					</button>
					<h2 className={styles.name}>Оформление заказа</h2>
					<form onSubmit={handleSubmit} className={styles.form}>
						<h3 className={styles.h3_title}>Контактная информация</h3>
						<div className={styles.contact_information}>
							<p className={styles.information_elem}>{user.name}</p>
							<p className={styles.information_elem}>{user.email}</p>
						</div>
						<h3 className={styles.h3_title}>Адрес доставки</h3>
						<div className={styles.inputs}>
							<div className={styles.field}>
								<p className={styles.p_address}>Улица:</p>
								<input
									className={styles.input}
									type='text'
									name='street'
									value={addressForm.street}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div className={styles.field}>
								<p className={styles.p_address}>Дом:</p>
								<input
									className={styles.input}
									type='text'
									name='house'
									value={addressForm.house}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div className={styles.field}>
								<p className={styles.p_address}>Подъезд:</p>
								<input
									className={styles.input}
									type='text'
									name='entrance'
									value={addressForm.entrance}
									onChange={handleInputChange}
								/>
							</div>
							<div className={styles.field}>
								<p className={styles.p_address}>Этаж:</p>
								<input
									className={styles.input}
									type='text'
									name='floor'
									value={addressForm.floor}
									onChange={handleInputChange}
								/>
							</div>
							<div className={styles.field}>
								<p className={styles.p_address}>Квартира:</p>
								<input
									className={styles.input}
									type='text'
									name='apartment'
									value={addressForm.apartment}
									onChange={handleInputChange}
								/>
							</div>
						</div>
						<button type='submit' className={styles.submit}>
							Доставить
						</button>
					</form>
				</div>
				<Footer className={styles.footer} />
			</div>
		</div>
	)
}
