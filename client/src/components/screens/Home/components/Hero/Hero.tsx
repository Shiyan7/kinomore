import {FiArrowRight} from 'react-icons/fi';
import {Button} from '@/UI/Button/Button';
import {Title} from '@/UI/Title/Title';
import {Autoplay, EffectFade} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react';
import {useRouter} from 'next/router';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './Hero.module.scss';
import 'swiper/css';
import 'swiper/css/effect-fade';

export const Hero = () => {

	const {push} = useRouter()

	return (
		<section className={styles.section} style={{backgroundImage: 'url(/bg1.jpg)'}}>
			<h1 className='visually-hidden'>Kinomore — бесплатные фильмы и сериалы</h1>
			<div className={classNames('container', styles.container)}>
				<div className={styles.content}>
					<Title variant='h2' className={styles.title}>Тор: Любовь и гром</Title>
					<p className={styles.desc}>Джейн Фостер берет на себя обязанности Бога-громовержца и становится обладательницей молота Мьёльнира.</p>
					<Button onClick={() => push(`/film/1282688`)} endIcon={<FiArrowRight />}>
						Подробнее
					</Button>
				</div>
			</div>
		</section>
	)
}