import Modal from 'react-modal'
import '../../variables.css'
import styles from './LoginModal.module.css'

export function LoginModal({ isOpen, onClose }) {
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
			contentLabel='example modal window'
		>
			<button onClick={onClose} className={styles.close_button}>
				Закрыть
			</button>
			<div className={styles.content}>
				<h2 className={styles.title}>Вход на сайт</h2>
				<p className={styles.desc}>
					ПИН-код для входа на сайт будет передан в телефонном номере
				</p>
				<input
					className={styles.input}
					type='text'
					placeholder='Номер телефона'
				/>
				<button className={styles.push_button}>Отправить код</button>
				<p className={styles.footer}>
					Нажимая кнопку «Получить код», вы принимаете условия обработки
					персональных данных
				</p>
			</div>
		</Modal>
	)
}
