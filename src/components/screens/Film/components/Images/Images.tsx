import { FC } from 'react';
import { IImages } from '@/types/IImages';
import { Title } from '@/UI/Title/Title';
import { LoadMoreButton } from '@/components/LoadMoreButton/LoadMoreButton';
import { useActions } from '@/hooks/useActions';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import lgZoom from 'lightgallery/plugins/zoom';
import styles from './Images.module.scss';
import Image from 'next/image';

interface ImagesProps {
	data: IImages | undefined;
	isFetching: boolean;
}

export const Images: FC<ImagesProps> = ({ data, isFetching }) => {
	const { docs, total } = { ...data };

	const condition = data?.docs?.length === data?.total;

	const { loadMoreImages } = useActions();

	return (
		<div className={styles.container}>
			<Title className={styles.title}>
				Изображения <span>({total})</span>
			</Title>
			<LightGallery
				plugins={[lgZoom]}
				download={false}
				elementClassNames={styles.wrapper}
				speed={500}
			>
				{docs?.map((image, idx) => {
					return (
						<a className={styles.item} key={idx} href={image.url}>
							<Image unoptimized layout="fill" className={styles.image} src={image.url} alt="" />
						</a>
					);
				})}
			</LightGallery>
			<LoadMoreButton
				className={styles.btn}
				isFetching={isFetching}
				condition={condition}
				onClick={() => loadMoreImages()}
			/>
		</div>
	);
};
