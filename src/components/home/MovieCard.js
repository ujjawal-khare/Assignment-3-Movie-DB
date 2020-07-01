import React, { Component } from "react";

export class MovieCard extends Component {
	render() {
		const movie = this.props;
		let title = "";

		//if (movie !== undefined) console.log("Check " + movie.movie.name);
		if (movie.movie.title !== undefined) {
			title = movie.movie.title;
		} else if (movie.movie.orignal_name !== undefined)
			title = movie.movie.orignal_name;
		else if (movie.movie.name !== undefined) {
			title = movie.movie.name;
		}

		let url = `https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`;
		if (
			movie.movie.poster_path !== undefined &&
			movie.movie.poster_path !== null
		)
			url = `http://image.tmdb.org/t/p/w185${movie.movie.poster_path}`;
		return (
			<div className="MovieSeriesBox">
				<img src={url} alt="Not found" />
				<h5>{title}</h5>
			</div>
		);
	}
}

export default MovieCard;
