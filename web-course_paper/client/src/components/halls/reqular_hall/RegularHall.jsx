import { BookingNav } from '../../booking_nav/BookingNav'
import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import { images } from '../../images'
import { Slider } from '../../slider/Slider'
import styles from './RegularHall.module.css'

export function RegularHall() {
	return (
		<div className={styles.page}>
			<Header />
			<BookingNav title={'Обычный зал'} />
			<Slider className={styles.slider} images={images} />
			<div className={styles.hall_container}>
				<h1 className={styles.hall_title}>Обычный зал</h1>
				<div className={styles.hall_content}>
					<p className={styles.hall_section_title}>Площадь:</p>
					<ul className={styles.hall_list}>
						<li>Открытый зал площадью 21 кв.м.</li>
					</ul>

					<p className={styles.hall_section_title}>Вместимость:</p>
					<ul className={styles.hall_list}>
						<li>до 20 человек.</li>
					</ul>

					<p className={styles.hall_section_title}>Стоимость аренды:</p>
					<ul className={styles.hall_list}>
						<li>Будние дни: 2000 руб./час;</li>
						<li>
							Выходные и праздничные дни: 2500 руб./час. Минимальная бронь - 1
							час.
						</li>
					</ul>

					<p className={styles.hall_section_title}>Оснащение:</p>
					<ul className={styles.hall_list}>
						<li>Телевизор;</li>
						<li>Флипчарт (маркеры и бумага для флипчарта по запросу).</li>
					</ul>
				</div>
			</div>
			<div className={styles.contact}>
				<span className={styles.text}>
					Заинтересованны? Тогда позвоните:{' '}
					<span className={styles.phone}>+7 (999) 999 99 99</span>
				</span>
			</div>
			<Footer className={styles.footer} />
		</div>
	)
}
