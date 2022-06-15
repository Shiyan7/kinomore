import {useGetFilmByNameQuery} from "@/services/KinopoiskService";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {useRouter} from "next/router";
import {Catalog} from "@/components/Catalog/Catalog";
import {Filters} from "@/components/Filters/Filters";
import { FILMS_ROUTE } from "@/constants/routes";
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
  
  const {Container, Heading, Desc, Body, Content} = Catalog;

  return (
    <Catalog>
      <Container>
        <Heading>Результаты поиска по запросу: {id}</Heading>
        <Desc>Ничего не нашли?&nbsp;<Link href={FILMS_ROUTE}><a>Список всех фильмов</a></Link></Desc>
        <Body>
          <Filters />
          <Content data={data} isLoading={isLoading} isFetching={isFetching} />
        </Body>
      </Container>
    </Catalog>
  )
}