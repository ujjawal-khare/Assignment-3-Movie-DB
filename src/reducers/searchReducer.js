import { ACTION_TYPE } from "../actions/type";

const initialState = {
	text: "",
	moviesSeries: [],
	loading: false,
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
		default:
			return state;
	}
}
