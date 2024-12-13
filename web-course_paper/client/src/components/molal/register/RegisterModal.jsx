import { useState } from 'react'
import Modal from 'react-modal'
import '../../variables.css'
import styles from './RegisterModal.module.css'

export function LoginModal({ isOpen, onClose }) {
	const [isRegister, setIsRegister] = useState(false)
	const [form, setForm] = useState({ name: '', email: '', password: '' })

	const handleChange = e => {
		setForm({ ...form, [e.target.name]: e.target.name })
	}

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			await axios.post('/api/register', form)
			alert('Вы успешно зарегистрировались!')
		} catch (error) {
			alert('Ошибка при регистрации')
		}
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
			<button onClick={onClose} className={styles.close_button}>
				Закрыть
			</button>

			<div className={styles.content}>
				<h2 className={styles.title}>{isRegister ? 'Регистрация' : 'Вход'}</h2>
				{isRegister ? (
					<form
						action='register'
						onSubmit={handleSubmit}
						className={styles.form}
					>
						<input
							className={styles.input}
							name='name'
							type='text'
							placeholder='Имя'
							onChange={handleChange}
						/>
						<input
							className={styles.input}
							name='email'
							type='text'
							placeholder='Email'
							onChange={handleChange}
						/>
						<input
							className={styles.input}
							name='name'
							type='password'
							placeholder='Пароль'
							onChange={handleChange}
						/>
						<button type='submit' className={styles.push_button}>
							Создать аккаунт
						</button>
					</form>
				) : (
					<form action='login' onSubmit={handleSubmit} className={styles.form}>
						<input
							className={styles.input}
							name='email'
							type='text'
							placeholder='Email'
							onChange={handleChange}
						/>
						<input
							className={styles.input}
							name='name'
							type='password'
							placeholder='Пароль'
							onChange={handleChange}
						/>
						<button type='submit' className={styles.push_button}>
							Войти
						</button>
					</form>
				)}
				{isRegister ? (
					<>
						<p className={styles.login}>
							Уже зарегистрированы?{' '}
							<button
								onClick={() => setIsRegister(!isRegister)}
								className={`${styles.login_button} ${styles.login}`}
							>
								Войдите
							</button>
						</p>
					</>
				) : (
					<>
						<p className={styles.login}>
							Нет аккаунта?{' '}
							<button
								onClick={() => setIsRegister(!isRegister)}
								className={`${styles.login_button} ${styles.login}`}
							>
								Зарегистрируйтесь
							</button>
						</p>
					</>
				)}
				<p className={styles.footer}>
					Нажимая кнопку «Регистрация», вы принимаете условия обработки
					персональных данных
				</p>
			</div>
		</Modal>
	)
}
