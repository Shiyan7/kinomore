import { FC, PropsWithChildren, useRef } from 'react';
import { Swiper } from 'swiper/react';
import { SliderBtn } from '@/UI/SliderBtn/SliderBtn';
import { Title } from '@/UI/Title/Title';
import SwiperClass, { Navigation } from 'swiper';
import styles from './Carousel.module.scss';
import 'swiper/css';

const breakpoints = {
	577: {
		slidesPerGroup: 3,
		slidesPerView: 3,
		spaceBetween: 15,
	},
	769: {
		slidesPerGroup: 3,
		slidesPerView: 3,
		spaceBetween: 30,
	},
	1025: {
		slidesPerGroup: 4,
		slidesPerView: 4,
		spaceBetween: 30,
	},
	1200: {
		slidesPerGroup: 5,
		slidesPerView: 5,
		spaceBetween: 30,
	},
};

interface CarouselProps {
	title?: string;
	quantity?: number;
	className?: string;
}

export const Carousel: FC<PropsWithChildren<CarouselProps>> = ({
	className,
	children,
	quantity,
	title,
}) => {
	const navigationPrevRef = useRef<HTMLButtonElement>(null);
	const navigationNextRef = useRef<HTMLButtonElement>(null);

	const navigation = {
		prevEl: navigationPrevRef.current,
		nextEl: navigationNextRef.current,
	};

	const onSwiper = (swiper: SwiperClass) => {
		setTimeout(() => {
			// @ts-ignore
			swiper.params.navigation.prevEl = navigationPrevRef.current;
			// @ts-ignore
			swiper.params.navigation.nextEl = navigationNextRef.current;

			// Re-init navigation
			swiper.navigation.destroy();
			swiper.navigation.init();
			swiper.navigation.update();
		});
	};

	return (
		<>
			<div className={styles.top}>
				<Title variant="h2" className={styles.title}>
					{title}
					{quantity && <span> ({quantity})</span>}
				</Title>
				<div className={styles.btns}>
					<SliderBtn dir="left" ref={navigationPrevRef} />
					<SliderBtn dir="right" ref={navigationNextRef} />
				</div>
			</div>
			<Swiper
				modules={[Navigation]}
				slidesPerView={2}
				slidesPerGroup={2}
				spaceBetween={15}
				navigation={navigation}
				onSwiper={onSwiper}
				breakpoints={breakpoints}
				className={styles.slider}
			>
				{children}
			</Swiper>
		</>
	);
};
