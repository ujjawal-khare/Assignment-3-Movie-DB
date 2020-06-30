import { ACTION_TYPE } from "./type";
import axios from "axios";
const api_key = "9f87899c764a89d33d71e275531b640d";

export const searchMovie = (text) => (dispatch) => {
	dispatch({
		type: ACTION_TYPE.SEARCH_MOVIE,
		payload: text,
	});
};

export const fetchMovie = (text) => (dispatch) => {
	axios
		.get(
			`http://api.themoviedb.org/3/movie/550?api_key=${api_key}&query=${text}`
		)
		.then((res) => {
			//	console.log(res.data);
			dispatch({
				type: ACTION_TYPE.FETCH_MOVIE,
				payload: res.data,
			});
		})
		.catch((err) => console.log(err));
};

export const fetchMovies = () => (dispatch) => {
	axios
		.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`)
		.then((res) => {
			//	console.log(res.data);
			dispatch({
				type: ACTION_TYPE.fetchMovies,
				payload: res.data,
			});
		})
		.catch((err) => console.log(err));
};

export const fetchSeries = () => (dispatch) => {
	axios
		.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${api_key}`)
		.then((res) => {
			//	console.log(res.data);
			dispatch({
				type: ACTION_TYPE.fetchSeries,
				payload: res.data,
			});
		})
		.catch((err) => console.log(err));
};

export const fetchTrending = () => (dispatch) => {
	axios
		.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`)
		.then((res) => {
			//	console.log(res.data);
			dispatch({
				type: ACTION_TYPE.fetchTrending,
				payload: res.data,
			});
		})
		.catch((err) => console.log(err));
};

// https://api.themoviedb.org/3/search/movie?api_key=9f87899c764a89d33d71e275531b640d&query=Jack+Reacher
// https://api.themoviedb.org/3/movie/343611?api_key=9f87899c764a89d33d71e275531b640d&append_to_response=videos
