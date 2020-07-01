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
			`https://api.themoviedb.org/3/search/multi?api_key=${api_key}&query=${text}
			`
		)
		.then((res) => {
			dispatch({
				type: ACTION_TYPE.FETCH_MOVIE,
				payload: res.data,
			});
		})
		.catch((err) => console.log(err));
};

export const fetchMovies = () => (dispatch) => {
	axios
		.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`)
		.then((res) => {
			console.log("Fetch Movies " + res);
			dispatch({
				type: ACTION_TYPE.FETCH_MOVIES,
				payload: res.data,
			});
		})
		.catch((err) => console.log(err));
};

export const fetchSeries = () => (dispatch) => {
	axios
		.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${api_key}`)
		.then((res) => {
			console.log(res);
			dispatch({
				type: ACTION_TYPE.FETCH_SERIES,
				payload: res.data,
			});
		})
		.catch((err) => console.log(err));
};

export const filterGenre = (genre) => (dispatch) => {
	axios
		.get(
			`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${genre}`
		)
		.then((res) => {
			//console.log(res);
			dispatch({
				type: ACTION_TYPE.FILTER_GENRE,
				payload: res.data,
				filterGenre: genre,
			});
		})
		.catch((err) => console.log(err));
};

export const filterLanguage = (lang) => (dispatch) => {
	axios
		.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${api_key}`)
		.then((res) => {
			//console.log(res);
			dispatch({
				type: ACTION_TYPE.FILTER_GENRE,
				payload: res.data,
				filterLanguage: lang,
			});
		})
		.catch((err) => console.log(err));
};

// https://api.themoviedb.org/3/search/movie?api_key=9f87899c764a89d33d71e275531b640d&query=Jack+Reacher
// https://api.themoviedb.org/3/movie/343611?api_key=9f87899c764a89d33d71e275531b640d&append_to_response=videos
