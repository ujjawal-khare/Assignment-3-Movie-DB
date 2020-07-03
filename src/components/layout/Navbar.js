import React, { Component } from "react";
import { fetchMovies, fetchSeries } from "../../actions/searchAction";
import { connect } from "react-redux";

export class Navbar extends Component {
	resetFilters() {
		document.getElementById("genre-filter").value = "";
		document.getElementById("language-filter").value = "";
		document.getElementById("sort-filter").value = "";
		document.getElementById("search-form").reset();
	}

	onClickMovies = (e) => {
		e.preventDefault();
		this.resetFilters();
		document.getElementById("movie-nav").className = "selectedTab";
		document.getElementById("series-nav").className = "";
		this.props.fetchMovies();
	};

	onClickSeries = (e) => {
		e.preventDefault();
		this.resetFilters();
		document.getElementById("movie-nav").className = "";
		document.getElementById("series-nav").className = "selectedTab";
		this.props.fetchSeries();
	};

	render() {
		return (
			<div className="navbar">
				<span id="movie-nav" className="selectedTab">
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
