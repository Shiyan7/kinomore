import { useEffect } from 'react';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import { Filter } from './components/Filter/Filter';
import { Slider } from '@/UI/Slider/Slider';
import { Radio } from '@/UI/Radio/Radio';
import { Button } from '@/UI/Button/Button';
import { Select } from '@/UI/Select/Select';
import { getCurrentYear } from '@/helpers/getCurrentYear/getCurrentYear';
import { Controller, useForm } from 'react-hook-form';
import { Title } from '@/UI/Title/Title';
import { ButtonBase } from '@/UI/ButtonBase/ButtonBase';
import { FiX } from 'react-icons/fi';
import { FiltersChoices } from './components/FiltersChoices/FiltersChoices';
import { Device } from '@/components/Device/Device';
import styles from './Filters.module.scss';
import classNames from 'classnames';

export const Filters = () => {
	const {
		setFilterRatings,
		setFiterYears,
		setSortByRelease,
		setFilterGenre,
		setPage,
		toggleFilters,
		resetFilters,
	} = useActions();
	const { openedFilters } = useTypedSelector((state) => state.toggleReducer);

	const genres = [
		{ label: 'Все жанры', value: '' },
		{ label: 'Семейные', value: 'семейный' },
		{ label: 'Биографии', value: 'биография' },
		{ label: 'Боевики', value: 'боевик' },
		{ label: 'Вестерны', value: 'вестерн' },
		{ label: 'Военные', value: 'военный' },
		{ label: 'Детективы', value: 'детектив' },
		{ label: 'Детские', value: 'детский' },
		{ label: 'Документальные', value: 'документальный' },
		{ label: 'Драмы', value: 'драма' },
		{ label: 'Исторические', value: 'история' },
		{ label: 'Комедии', value: 'комедия' },
		{ label: 'Короткометражки', value: 'короткометражка' },
		{ label: 'Криминал', value: 'криминал' },
		{ label: 'Мелодрамы', value: 'мелодрама' },
		{ label: 'Музыкальные', value: 'музыка' },
		{ label: 'Мюзиклы', value: 'мюзикл' },
		{ label: 'Новости', value: 'новости' },
		{ label: 'Приключения', value: 'приключения' },
		{ label: 'Спортивные', value: 'спорт' },
		{ label: 'Триллеры', value: 'триллер' },
		{ label: 'Ужасы', value: 'ужасы' },
		{ label: 'Фантастика', value: 'фантастика' },
		{ label: 'Фильмы-нуар', value: 'фильм-нуар' },
		{ label: 'Фэнтези', value: 'фэнтези' },
	];

	const handleClose = () => {
		toggleFilters(false);
	};

	const { handleSubmit, control, getValues, reset } = useForm({
		defaultValues: {
			sort: '-1',
			genres: genres[0],
			rating: [1, 10],
			year: [1960, getCurrentYear()],
		},
	});

	const onSubmit = handleSubmit((data) => {
		const { sort, rating, year, genres } = data;

		const ratingString = `${rating[0]}-${rating[1]}`;
		const yearString = `${year[0]}-${year[1]}`;
		const ratings = rating[0] !== rating[1] ? ratingString : rating[0];
		const years = year[0] !== year[1] ? yearString : year[0];
		const genre = genres.value !== '' ? `search[]=${genres.value}&field[]=genres.name` : '';

		setPage(1);
		setFilterRatings(ratings);
		setFiterYears(years);
		setSortByRelease(sort);
		setFilterGenre(genre);
		handleClose();
	});

	const handleReset = () => {
		resetFilters();
		reset();
	};

	useEffect(() => {
		handleReset();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<form
			action="#"
			onSubmit={onSubmit}
			noValidate
			className={classNames(styles.filters, openedFilters && styles.opened)}
		>
			<div className={styles.top}>
				<Button type="button" onClick={handleReset} variant="sm">
					Сбросить
				</Button>
				<Title variant="h3" className={styles.title}>
					Фильтры
				</Title>
				<ButtonBase type="button" className={styles.close} onClick={handleClose}>
					<FiX />
				</ButtonBase>
			</div>
			<div className={styles.container}>
				<FiltersChoices choices={getValues()} />
				<div className={styles.content}>
					<Filter name="Рейтинг">
						<Controller
							name="rating"
							control={control}
							render={({ field: { value, onChange } }) => {
								return (
									<Slider
										min={1}
										max={10}
										values={value}
										onChange={onChange}
										step={1}
									/>
								);
							}}
						/>
					</Filter>
					<Filter name="Года производства">
						<Controller
							name="year"
							control={control}
							render={({ field: { value, onChange } }) => {
								return (
									<Slider
										min={1887}
										max={getCurrentYear()}
										values={value}
										onChange={onChange}
									/>
								);
							}}
						/>
					</Filter>
					<Filter name="Жанры">
						<Controller
							name="genres"
							control={control}
							render={({ field: { value, onChange } }) => {
								return (
									<Select
										value={value}
										onChange={onChange}
										name="genres"
										options={genres}
									/>
								);
							}}
						/>
					</Filter>
					<Filter name="Год выхода">
						<div className={styles.radios}>
							<Controller
								name="sort"
								control={control}
								render={({ field: { onChange } }) => {
									return (
										<>
											<Radio
												className={styles.radio}
												label="Сначала новые"
												value="-1"
												defaultChecked
												name="sort"
												onChange={onChange}
											/>
											<Radio
												className={styles.radio}
												label="Сначала старые"
												value="1"
												name="sort"
												onChange={onChange}
											/>
										</>
									);
								}}
							/>
						</div>
					</Filter>
				</div>
			</div>
			<div className={styles.btns}>
				<Button className={styles.btn}>Применить</Button>
				<Device desktop>
					<Button type="button" className={styles.btn} onClick={handleReset} variant="stroke">
						Сбросить
					</Button>
				</Device>
				<Device mobile>
					<Button type="button" className={styles.btn} onClick={handleClose} variant="stroke">
						Закрыть
					</Button>
				</Device>
			</div>
		</form>
	);
};
