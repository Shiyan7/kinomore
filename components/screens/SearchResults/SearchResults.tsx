import {All_FILMS_ROUTE} from "@/constants/routes";
import {useGetFilmByNameQuery} from "@/services/KinopoiskService";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {useRouter} from "next/router";
import {Catalog} from "@/components/Catalog/Catalog";
import styles from './SearchResults.module.scss'
import Link from "next/link";

export const SearchResults = () => {

  const {query: {id}} = useRouter()
  const {filters} = useTypedSelector(state => state.filtersReducer);
  const {page} = useTypedSelector(state => state.paginationReducer);
  const {data, isLoading, isFetching} = useGetFilmByNameQuery({
    search: id,
    page: page,
    filters
  });
  
  const {Container, Heading, Desc, Body} = Catalog;

  return (
    <Catalog className={styles.section}>
      <Container className={styles.container}>
        <Heading>Результаты поиска по запросу: {id}</Heading>
        <Desc>Ничего не нашли?&nbsp;<Link href={All_FILMS_ROUTE}><a>Список всех фильмов</a></Link></Desc>
        <Body data={data} isFetching={isFetching} isLoading={isLoading} />
      </Container>
    </Catalog>
  )
}