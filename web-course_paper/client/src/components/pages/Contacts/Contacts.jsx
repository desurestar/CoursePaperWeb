import { Helmet } from 'react-helmet-async'
import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import styles from './Contacts.module.css'

export function Contacts() {
	return (
		<div className={styles.page}>
			<Helmet>
				<title>Zagrebin Restaurant | Контакты</title>
			</Helmet>
			<Header />
			<div className={styles.contact_container}>
				<h1 className={styles.contact_title}>КОНТАКТЫ</h1>
				<div className={styles.contact_list}>
					<div className={styles.contact_item}>
						<h2 className={styles.contact_subtitle}>
							Контакты для Мероприятия
						</h2>
						<p className={styles.contact_description}>
							Телефон: +7 (123) 456-78-90
						</p>
						<p className={styles.contact_description}>
							Email: events@example.com
						</p>
					</div>
					<div className={styles.contact_item}>
						<h2 className={styles.contact_subtitle}>Банкетные залы</h2>
						<p className={styles.contact_description}>
							Телефон: +7 (987) 654-32-10
						</p>
						<p className={styles.contact_description}>
							Email: banquets@example.com
						</p>
					</div>
					<div className={styles.contact_item}>
						<h2 className={styles.contact_subtitle}>Доставка</h2>
						<p className={styles.contact_description}>
							Телефон: +7 (555) 123-45-67
						</p>
						<p className={styles.contact_description}>
							Email: delivery@example.com
						</p>
					</div>
				</div>
			</div>
			<Footer className={styles.footer} />
		</div>
	)
}
