import React, { Component } from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";

export class MoviesContainer extends Component {
	render() {
		let content = "";
		const { movies } = this.props;
		let data = Array.from(this.props);

		console.log(data);
		// let data = Array.from(this.props);
		// console.log(this.props + "hhh");
		// console.log(data);
		// content =
		// 	data.length > 0
		// 		? data.map((movie, id) => <MovieCard key={id} movie={movie} />)
		// 		: null;

		return <div>{content}</div>;
	}
}
const mapStateToProps = (state) => ({
	movies: state.movies.moviesSeries,
});

export default connect(mapStateToProps)(MoviesContainer);
