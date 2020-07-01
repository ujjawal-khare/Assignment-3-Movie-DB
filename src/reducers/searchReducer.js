import { ACTION_TYPE } from "../actions/type";

const initialState = {
	text: "",
	tab: "movie",
	genreFilter: "none",
	langFilter: "none",
	moviesSeries: [],
	loading: false,
	movies: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case ACTION_TYPE.SEARCH_MOVIE:
			return {
				...state,
				text: action.payload,
				loading: false,
			};
		case ACTION_TYPE.FETCH_MOVIE:
			return {
				...state,
				moviesSeries: action.payload,
			};
		case ACTION_TYPE.FETCH_MOVIES:
			return {
				...state,
				moviesSeries: action.payload,
			};
		case ACTION_TYPE.FETCH_SERIES:
			return {
				...state,
				moviesSeries: action.payload,
			};
		case ACTION_TYPE.FETCH_TRENDING:
			return {
				...state,
				moviesSeries: action.payload,
			};
		case ACTION_TYPE.FILTER_GENRE:
			return {
				...state,
				moviesSeries: action.payload,
				genreFilter: action.filterGenre,
			};
		case ACTION_TYPE.FILTER_LANGUAGE:
			return {
				...state,
				moviesSeries: action.payload,
				langFilter: action.filterLanguage,
			};
		default:
			return state;
	}
}
