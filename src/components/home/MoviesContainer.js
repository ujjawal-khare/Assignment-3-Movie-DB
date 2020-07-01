import React, { Component } from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";

export class MoviesContainer extends Component {
	render() {
		let content = "";
		const { movies } = this.props;
		const res = movies.results;

		if (res !== undefined) {
			content =
				res.length > 0
					? res.map((movie, id) => <MovieCard key={id} movie={movie} />)
					: null;
		}
		return <div>{content}</div>;
	}
}
const mapStateToProps = (state) => ({
	movies: state.movies.moviesSeries,
});

export default connect(mapStateToProps)(MoviesContainer);
