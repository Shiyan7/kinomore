import {FC} from "react"
import {useActions} from "@/hooks/useActions";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {IMovie} from "@/types/IMovie"
import {useRouter} from "next/router";

interface SearchItemProps {
    item: IMovie
}

export const SearchItem: FC<SearchItemProps> = ({item}) => {

  	const {name, id, year} = item;

	const {search} = useTypedSelector(state => state.searchReducer)
	const {submitForm} = useActions()
	const router = useRouter();

	const handleSearch = () => {
		submitForm(search)
		router.push(`/film/${id}`)
	}

    return (
		<li onClick={handleSearch}>
			<span style={{color: '#fff', display: 'block'}}>{name} ({year})</span>
		</li>
    )
}