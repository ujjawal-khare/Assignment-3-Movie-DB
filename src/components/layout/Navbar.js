import React, { Component } from "react";
import { fetchMovies, fetchSeries } from "../../actions/searchAction";
import { connect } from "react-redux";

export class Navbar extends Component {
	onClickMovies = (e) => {
		e.preventDefault();
		//	console.log("Check Movies");
		this.props.fetchMovies();
	};

	onClickSeries = (e) => {
		e.preventDefault();
		//	console.log("check Series");
		this.props.fetchSeries();
	};

	render() {
		return (
			<div className="navbar">
				<span id="movie-nav">
					<a href="Movies" onClick={this.onClickMovies}>
						Movies{" "}
					</a>
				</span>

				<span id="series-nav">
					<a href="#series" onClick={this.onClickSeries}>
						Series
					</a>
				</span>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	movies: state.movies.moviesSeries,
});

export default connect(mapStateToProps, { fetchMovies, fetchSeries })(Navbar);
