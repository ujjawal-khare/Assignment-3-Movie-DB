import React, { Component } from "react";

export class MovieCard extends Component {
	render() {
		const movie = this.props;
		console.log(movie + " hc");
		return (
			<div className="MovieSeriesBox">
				{console.log("hhvdhv")};
				<img src={movie.poster} alt="Movie Poster" />
			</div>
		);
	}
}

export default MovieCard;
