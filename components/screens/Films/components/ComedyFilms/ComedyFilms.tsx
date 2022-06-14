import {useGetComedyFilmsQuery} from "@/services/KinopoiskService";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {Catalog} from "@/components/Catalog/Catalog";

export const ComedyFilms = () => {

  const {filters} = useTypedSelector(state => state.filtersReducer);
  const {page} = useTypedSelector(state => state.paginationReducer);
  const {data, isLoading, isFetching} = useGetComedyFilmsQuery({
    page: page,
    filters
  });

  const {Container, Heading, Desc, Body, Nav} = Catalog;

  return (
    <Catalog>
      <Container>
        <Nav />
        <Heading>Комедии</Heading>
        <Desc>Комедии для просмотра всей семьей.</Desc>
        <Body data={data} isFetching={isFetching} isLoading={isLoading} />
      </Container>
    </Catalog>
  )
}