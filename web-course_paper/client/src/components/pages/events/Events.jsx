import { Link } from 'react-router-dom'
import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import styles from './Events.module.css'

export function Events() {
	return (
		<div className={styles.page}>
			<Header />
			<div className={styles.event_container}>
				<h1 className={styles.event_title}>
					СВАДЬБЫ, КОРПОРАТИВЫ, БАНКЕТЫ И КЕЙТЕРИНГ
				</h1>
				<div className={styles.event_sections}>
					<div className={styles.event_section}>
						<div className={styles.container_image}>
							<img
								src='https://i.pinimg.com/736x/d7/ad/ea/d7adeafca9176bc724cd5727284ced1b.jpg'
								alt='Свадьбы'
								className={styles.event_image}
							/>
						</div>
						<h2 className={styles.event_subtitle}>СВАДЬБЫ</h2>
						<p className={styles.event_description}>
							Создайте свадьбу Вашей мечты в нашем ресторане: романтичная
							атмосфера, прекрасная кухня и великолепная организация.
						</p>
						<button className={styles.event_button}>
							<Link className={styles.link} to={'/contacts'}>
								Подробнее
							</Link>
						</button>
					</div>
					<div className={styles.event_section}>
						<div className={styles.container_image}>
							<img
								src='https://i.pinimg.com/736x/bc/62/4f/bc624fef75ee3a95e593ebd8ffa96b71--banquet-tables-reception-food.jpg'
								alt='Банкеты'
								className={styles.event_image}
							/>
						</div>
						<h2 className={styles.event_subtitle}>БАНКЕТЫ</h2>
						<p className={styles.event_description}>
							У Вас есть повод провести банкет? Будем рады помочь Вам в
							организации банкета Вашей мечты. Для проведения банкета Вы сможете
							снять зал полностью, либо провести банкет на небольшое количество
							гостей.
						</p>
						<button className={styles.event_button}>
							<Link className={styles.link} to={'/contacts'}>
								Подробнее
							</Link>
						</button>
					</div>
					<div className={styles.event_section}>
						<div className={styles.container_image}>
							<img
								src='https://avatars.mds.yandex.net/get-ydo/11397567/2a0000018f0733ead83c93f5ca95f24b6565/diploma'
								alt='Корпоративы'
								className={styles.event_image}
							/>
						</div>
						<h2 className={styles.event_subtitle}>КОРПОРАТИВЫ</h2>
						<p className={styles.event_description}>
							Корпоратив в ресторане - выгоден тем, что здесь гарантировано
							вкусная еда, интерьер с продуманным дизайном и обслуживание на
							высоком уровне.
						</p>
						<button className={styles.event_button}>
							<Link className={styles.link} to={'/contacts'}>
								Подробнее
							</Link>
						</button>
					</div>
					<div className={styles.event_section}>
						<div className={styles.container_image}>
							<img
								src='https://organizator.ru/wp-content/uploads/2024/03/furshet-na-14-fevralya-11.jpg'
								alt='Кейтеринг'
								className={styles.event_image}
							/>
						</div>
						<h2 className={styles.event_subtitle}>КЕЙТЕРИНГ</h2>
						<p className={styles.event_description}>
							Красивая сервировка, безупречная итальянская кухня, пицца, паста,
							ризотто, закуски, натуральные авторские десерты ручной работы
							сделают ваше мероприятие незабываемым.
						</p>
						<button className={styles.event_button}>
							<Link className={styles.link} to={'/contacts'}>
								Подробнее
							</Link>
						</button>
					</div>
				</div>
			</div>
			<Footer className={styles.footer} />
		</div>
	)
}
