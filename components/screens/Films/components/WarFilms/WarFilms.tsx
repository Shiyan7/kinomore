import {useGetWarFilmsQuery} from "@/services/KinopoiskService";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {Catalog} from "@/components/Catalog/Catalog";

export const WarFilms = () => {

  const {filters} = useTypedSelector(state => state.filtersReducer);
  const {page} = useTypedSelector(state => state.paginationReducer);
  const {data, isLoading, isFetching} = useGetWarFilmsQuery({
    page: page,
    filters
  });

  const {Container, Heading, Desc, Body, Nav} = Catalog;

  return (
    <Catalog>
      <Container>
        <Nav />
        <Heading>Военные фильмы</Heading>
        <Desc>Все фильмы мира про войну</Desc>
        <Body data={data} isFetching={isFetching} isLoading={isLoading} />
      </Container>
    </Catalog>
  )
}