import {useGetAllFilmsQuery} from "@/services/KinopoiskService";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {Catalog} from "@/components/Catalog/Catalog";

export const AllFilms = () => {

  const {filters} = useTypedSelector(state => state.filtersReducer);
  const {page} = useTypedSelector(state => state.paginationReducer);
  const {data, isLoading, isFetching} = useGetAllFilmsQuery({
    page: page,
    filters
  });

  const {Container, Heading, Desc, Body, Nav} = Catalog;

  return (
    <Catalog>
      <Container>
        <Nav />
        <Heading>Все фильмы</Heading>
        <Desc>Фильмы всего мира</Desc>
        <Body data={data} isFetching={isFetching} isLoading={isLoading} />
      </Container>
    </Catalog>
  )
}