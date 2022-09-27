import { FilmItem } from '@/components/FilmItem/FilmItem';
import { useGetNewFilmsQuery } from '@/services/KinomoreService';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { RoutesEnum } from '@/constants/routes';
import { Button } from '@/UI/Button/Button';
import { Title } from '@/UI/Title/Title';
import { Grid } from '@/components/Grid/Grid';
import { useRouter } from 'next/router';
import { useActions } from '@/hooks/useActions';
import { LoadMoreButton } from '@/components/LoadMoreButton/LoadMoreButton';
import styles from './NewMovies.module.scss';
import classNames from 'classnames';

export const NewFilms = () => {
	const { push } = useRouter();
	const { filmsLimit } = useTypedSelector((state) => state.loadReducer);
	const { data, isFetching } = useGetNewFilmsQuery(filmsLimit);
	const { loadMoreFilms } = useActions();
	const condition = data?.docs?.length === data?.total;

	return (
		<section>
			<div className={classNames('container', styles.container)}>
				<div className={styles.top}>
					<Title variant="h2">Новые фильмы</Title>
					<Button onClick={() => push(RoutesEnum.Films)}>Смотреть все</Button>
				</div>
				<Grid>
					{data?.docs?.map((el) => (
						<FilmItem key={el.id} item={el} />
					))}
				</Grid>
				<LoadMoreButton
					isFetching={isFetching}
					condition={condition}
					onClick={() => loadMoreFilms()}
				/>
			</div>
		</section>
	);
};
