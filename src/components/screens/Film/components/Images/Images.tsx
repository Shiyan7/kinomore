import { FC } from 'react';
import { IImages } from '@/types/IImages';
import { Title } from '@/components/UI/Title/Title';
import { LoadMoreButton } from '@/components/LoadMoreButton/LoadMoreButton';
import { useActions } from '@/hooks/useActions';
import styles from './Images.module.scss';
import classNames from 'classnames';
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
			<ul className={classNames('list-reset', styles.grid)}>
				{docs?.map((image, idx) => {
					return (
						<li className={styles.item} key={idx}>
							<Image layout="fill" className={styles.image} src={image.url} alt="" />
						</li>
					);
				})}
			</ul>
			<LoadMoreButton
				className={styles.btn}
				isFetching={isFetching}
				condition={condition}
				onClick={() => loadMoreImages()}
			/>
		</div>
	);
};
