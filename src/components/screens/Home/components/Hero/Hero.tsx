import {FiArrowRight} from 'react-icons/fi';
import {Button} from '@/UI/Button/Button';
import {Title} from '@/UI/Title/Title';
import {Autoplay, EffectFade} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react';
import {useRouter} from 'next/router';
import classNames from 'classnames';
import styles from './Hero.module.scss';
import 'swiper/css';
import 'swiper/css/effect-fade';

export const Hero = () => {

	const {push} = useRouter()
	const items = [
		{title: 'Анчартед: На картах не значится', desc: 'Нейтан Дрейк и Виктор «Салли» Салливан, два искателя приключений, отправляются на поиски величайшего сокровища мира.', id: 468373, imageSource: '/bg1.jpg'},
		{title: 'Тор: Любовь и гром', desc: 'Джейн Фостер берет на себя обязанности Бога-громовержца и становится обладательницей молота Мьёльнира.', id: 1282688, imageSource: '/bg2.jpg'}
	]

	return (
		<section className={styles.section}>
			<h1 className='visually-hidden'>Kinomore — бесплатные фильмы и сериалы</h1>
			<Swiper
				modules={[Autoplay, EffectFade]}
				autoplay
				effect='fade'
			>
				{items.map(item => {

					const {title, desc, id, imageSource} = item

					return (
						<SwiperSlide key={id}>
							<div className={styles.content} style={{backgroundImage: `url(${imageSource})`}}>
								<div className={classNames('container', styles.container)}>
									<Title variant='h2' className={styles.title}>{title}</Title>
									<p className={styles.desc}>{desc}</p>
									<Button onClick={() => push(`/film/${id}`)} endIcon={<FiArrowRight />}>
										Подробнее
									</Button>
								</div>
							</div>
						</SwiperSlide>
					)
					})}
			</Swiper>
		</section>
	)
}