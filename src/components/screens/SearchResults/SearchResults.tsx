import { useGetFilmByNameQuery } from '@/services/KinomoreService';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useRouter } from 'next/router';
import { Catalog } from '@/components/Catalog/Catalog';
import { Filters } from '@/components/Filters/Filters';
import { RoutesEnum } from '@/constants/routes';
import Link from 'next/link';

export const SearchResults = () => {
	const {
		query: { id },
	} = useRouter();
	const { filters } = useTypedSelector((state) => state.filtersReducer);
	const { page } = useTypedSelector((state) => state.paginationReducer);
	const { data, isLoading, isFetching } = useGetFilmByNameQuery({ id, page, filters });

	const { Container, Heading, Description, Body, Content } = Catalog;

	return (
		<Catalog>
			<Container>
				<Heading>Результаты поиска по запросу: {id}</Heading>
				<Description>
					Ничего не нашли?&nbsp;
					<Link href={RoutesEnum.Films}>
						<a>Список всех фильмов</a>
					</Link>
				</Description>
				<Body>
					<Filters />
					<Content data={data} isLoading={isLoading} isFetching={isFetching} />
				</Body>
			</Container>
		</Catalog>
	);
};
