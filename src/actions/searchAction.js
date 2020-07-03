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
	let url = `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&query=${text}`;
	axios
		.get(url)
		.then((res) => {
			dispatch({
				type: ACTION_TYPE.FETCH_MOVIE,
				payload: res.data.results,
				genre: "",
				lang: "",
				prevUrl: url,
				page: 1,
			});
		})
		.catch((err) => console.log(err));
};

export const fetchMovies = () => (dispatch) => {
	let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`;
	axios
		.get(url)
		.then((res) => {
			//	console.log("Fetch Movies " + res.data.results);
			dispatch({
				type: ACTION_TYPE.FETCH_MOVIES,
				payload: res.data.results,
				tab: "movie",
				genre: "",
				lang: "",
				prevUrl: url,
				page: 1,
			});
		})
		.catch((err) => console.log(err));
};

export const fetchSeries = () => (dispatch) => {
	let url = `https://api.themoviedb.org/3/trending/tv/day?api_key=${api_key}`;
	axios
		.get(url)
		.then((res) => {
			//	console.log("Fetch series" + res.data.results);
			dispatch({
				type: ACTION_TYPE.FETCH_SERIES,
				payload: res.data.results,
				tab: "tv",
				genre: "",
				lang: "",
				prevUrl: url,
				page: 1,
			});
		})
		.catch((err) => console.log(err));
};

export const filterGenre = (genre, tab, lang) => (dispatch) => {
	let url = `https://api.themoviedb.org/3/discover/${tab}?api_key=${api_key}&language=${lang}&sort_by=popularity.desc&with_genres=${genre}`;
	axios
		.get(url)
		.then((res) => {
			//console.log(res);
			dispatch({
				type: ACTION_TYPE.FILTER_GENRE,
				payload: res.data.results,
				filterGenre: genre,
				prevUrl: url,
				page: 1,
			});
		})
		.catch((err) => console.log(err));
};

export const filterLanguage = (lang, tab, genre) => (dispatch) => {
	let url = `https://api.themoviedb.org/3/discover/${tab}?api_key=${api_key}&language=${lang}&sort_by=popularity.desc&with_genres=${genre}`;
	axios
		.get(url)
		.then((res) => {
			//console.log(res);
			dispatch({
				type: ACTION_TYPE.FILTER_LANGUAGE,
				payload: res.data.results,
				filterLanguage: lang,
				prevUrl: url,
				page: 1,
			});
		})
		.catch((err) => console.log(err));
};

export const sortBy = (tab, lang, genre, sortBy) => (dispatch) => {
	let url = `https://api.themoviedb.org/3/discover/${tab}?api_key=${api_key}&language=${lang}&sort_by=popularity.desc&with_genres=${genre}&sort_by=${sortBy}`;
	axios
		.get(url)
		.then((res) => {
			//	console.log(res.data);
			dispatch({
				type: ACTION_TYPE.SORT_BY,
				payload: res.data.results,
				prevUrl: url,
				page: 1,
			});
		})
		.catch((err) => console.log(err));
};

export const fetchMore = (url, currentPage) => (dispatch) => {
	axios
		.get(url + `&page=${currentPage + 1}`)
		.then((res) => {
			//console.log(res);
			dispatch({
				type: ACTION_TYPE.FETCH_MORE,
				payload: res.data.results,
				prevUrl: url,
				page: currentPage + 1,
			});
		})
		.catch((err) => console.log(err));
};

// https://api.themoviedb.org/3/search/movie?api_key=9f87899c764a89d33d71e275531b640d&query=Jack+Reacher &sort_by=original_title.desc
// https://api.themoviedb.org/3/movie/343611?api_key=9f87899c764a89d33d71e275531b640d&append_to_response=videos
