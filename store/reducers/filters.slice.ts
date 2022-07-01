import { getCurrentYear } from "@/helpers/getCurrentYear/getCurrentYear";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    genres: [
        {label: "Все жанры", value: ""},
        {label: "Семейные", value: "семейный"},
        {label: "Биографии", value: "биография"},
        {label: "Боевики", value: "боевик"},
        {label: "Вестерны", value: "вестерн"},
        {label: "Военные", value: "военный"},
        {label: "Детективы", value: "детектив"},
        {label: "Детские", value: "детский"},
        {label: "Документальные", value: "документальный"},
        {label: "Драмы", value: "драма"},
        {label: "Исторические", value: "история"},
        {label: "Комедии", value: "комедия"},
        {label: "Короткометражки", value: "короткометражка"},
        {label: "Криминал", value: "криминал"},
        {label: "Мелодрамы", value: "мелодрама"},
        {label: "Музыкальные", value: "музыка"},
        {label: "Мюзиклы", value: "мюзикл"},
        {label: "Новости", value: "новости"},
        {label: "Приключения", value: "приключения"},
        {label: "Спортивные", value: "спорт"},
        {label: "Триллеры", value: "триллер"},
        {label: "Ужасы", value: "ужасы"},
        {label: "Фантастика", value: "фантастика"},
        {label: "Фильмы-нуар", value: "фильм-нуар"},
        {label: "Фэнтези", value: "фэнтези"}
    ],
    filters: {
        year: `1960-${getCurrentYear()}`,
        rating: '1-10',
        sortByRelease: '-1',
        genre: ''
    }
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFiterYears: (state, action) => {
            state.filters.year = action.payload
        },
        setFilterRatings: (state, action) => {
            state.filters.rating = action.payload
        },
        setSortByRelease: (state, action) => {
            state.filters.sortByRelease = action.payload
        },
        setFilterGenre: (state, action) => {
            state.filters.genre = action.payload
        },
        resetFilters: state => {
            state.filters = initialState.filters
        }
    }
})

export const {
    setFiterYears,
    setFilterRatings,
    setSortByRelease,
    setFilterGenre,
    resetFilters
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;