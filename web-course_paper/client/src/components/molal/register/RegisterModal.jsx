import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Modal from 'react-modal'
import { useDispatch } from 'react-redux'
import { login, register } from '../../../redux/slices/authSlice'
import '../../variables.css'
import styles from './RegisterModal.module.css'

export function LoginModal({ isOpen, onClose }) {
	const dispatch = useDispatch()
	const [isRegister, setIsRegister] = useState(false)
	const [registerForm, setRegisterForm] = useState({
		name: '',
		email: '',
		password: '',
	})
	const [loginForm, setLoginForm] = useState({
		email: '',
		password: '',
	})

	const handleChangeRegister = e => {
		setRegisterForm({ ...registerForm, [e.target.name]: e.target.value })
	}

	const handleChangeLogin = e => {
		setLoginForm({ ...loginForm, [e.target.name]: e.target.value })
	}

	const handleSubmitRegister = async e => {
		e.preventDefault()
		try {
			await dispatch(register(registerForm)).unwrap()
			setIsRegister(!isRegister)
		} catch (error) {
			alert('Ошибка при регистрации')
		}
	}

	const handleSubmitLogin = async e => {
		e.preventDefault()
		try {
			await dispatch(login(loginForm)).unwrap()
			onClose()
		} catch (error) {
			alert('Ошибка входа')
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
					<>
						<Helmet>
							<title>Zagrebin Restaurant | Регистрация</title>
						</Helmet>
						<form
							method='POST'
							action='/register'
							onSubmit={handleSubmitRegister}
							className={styles.form}
						>
							<input
								className={styles.input}
								name='name'
								type='text'
								placeholder='Имя'
								onChange={handleChangeRegister}
							/>
							<input
								className={styles.input}
								name='email'
								type='email'
								placeholder='Email'
								onChange={handleChangeRegister}
							/>
							<input
								className={styles.input}
								name='password'
								type='password'
								placeholder='Пароль'
								onChange={handleChangeRegister}
							/>
							<button type='submit' className={styles.push_button}>
								Создать аккаунт
							</button>
						</form>
					</>
				) : (
					<>
						<Helmet>
							<title>Zagrebin Restaurant | Вход</title>
						</Helmet>
						<form
							method='POST'
							action='/login'
							onSubmit={handleSubmitLogin}
							className={styles.form}
						>
							<input
								className={styles.input}
								name='email'
								type='email'
								placeholder='Email'
								onChange={handleChangeLogin}
							/>
							<input
								className={styles.input}
								name='password'
								type='password'
								placeholder='Пароль'
								onChange={handleChangeLogin}
							/>
							<button type='submit' className={styles.push_button}>
								Войти
							</button>
						</form>
					</>
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
