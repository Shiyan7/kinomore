import {useGetHorrorFilmsQuery} from "@/services/KinopoiskService";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {Catalog} from "@/components/Catalog/Catalog";

export const HorrorFilms = () => {

  const {filters} = useTypedSelector(state => state.filtersReducer);
  const {page} = useTypedSelector(state => state.paginationReducer);
  const {data, isLoading, isFetching} = useGetHorrorFilmsQuery({
    page: page,
    filters
  });

  const {Container, Heading, Desc, Body, Nav} = Catalog;

  return (
    <Catalog>
      <Container>
        <Nav />
        <Heading>Фильмы ужасов</Heading>
        <Desc>Все фильмы ужасов</Desc>
        <Body data={data} isFetching={isFetching} isLoading={isLoading} />
      </Container>
    </Catalog>
  )
}