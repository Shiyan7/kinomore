import {useGetFavouritesQuery} from "@/services/KinopoiskService";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {Catalog} from "@/components/Catalog/Catalog";
import {Filters} from "@/components/Filters/Filters";
import {useFavourites} from "@/hooks/useFavourite";
import {useEffect} from "react";
import {useActions} from "@/hooks/useActions";

export const Favourites = () => {

  const {favourites} = useFavourites()
  const query = favourites.map(el => `search=${el}&field=id`).join('&')
  const {filters} = useTypedSelector(state => state.filtersReducer);
  const {page} = useTypedSelector(state => state.paginationReducer);
  const {resetFilters} = useActions()
  const {data, isLoading, isFetching} = useGetFavouritesQuery({
    page: page,
    filters,
    query
  });

  useEffect(() => {
    resetFilters()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const {Container, Heading, Desc, Body, Content, Subtitle} = Catalog;

  return (
    <Catalog>
      <Container>
        <Heading>Избранное</Heading>
        <Desc>Список избранного кино</Desc>
        <Body>
          <Filters />
          {query ? <Content data={data} isLoading={isLoading} isFetching={isFetching} /> : <Subtitle>Список избранного пуст</Subtitle>}
        </Body>
      </Container>
    </Catalog>
  )
}