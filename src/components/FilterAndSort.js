import React, { Component } from "react";
import { connect } from "react-redux";
import { filterGenre, filterLanguage, sortBy } from "../actions/searchAction";

class FilterAndSort extends Component {
	onClick = (e) => {
		e.preventDefault();
		const tab = this.props.tab;
		const genre = this.props.genre;
		const lang = this.props.lang;

		if (e.target.className === "filter-genre") {
			this.props.filterGenre(e.target.value, tab, lang);
		} else if (e.target.className === "filter-language") {
			this.props.filterLanguage(e.target.value, tab, genre);
		} else {
			this.props.sortBy(tab, lang, genre, e.target.value);
		}
	};

	render() {
		return (
			<div className="filter-sort-dropbtn">
				<span className="tesr">
					<label htmlFor="filter"> Filters </label>
					<select
						name="filterby"
						id="genre-filter"
						className="filter-genre"
						onClick={this.onClick}
					>
						<option value="">Genre</option>
						<option value="28">Action</option>
						<option value="12">Adventure</option>
						<option value="16">Animation</option>
						<option value="35">Comedy</option>
						<option value="80">Crime</option>
						<option value="18">Drama</option>
						<option value="9648">Mysterty</option>
						<option value="10749">Romance</option>
						<option value="53">Thriller</option>
					</select>
				</span>

				<span id="language-filter">
					<select
						name="filterby"
						id="language-filter"
						className="filter-language"
						onClick={this.onClick}
					>
						<option value="">Language</option>
						<option value="he">Hibrew</option>
						<option value="en">English</option>
						<option value="es">Spanish</option>
						<option value="ko">Korean</option>
					</select>
				</span>

				<span id="sort">
					<select
						id="sort-filter"
						className="filterSort"
						onClick={this.onClick}
					>
						<option value="">Sort By</option>
						<option value="vote_average.desc">Rating</option>
						<option value="primary_release_date.desc">Release Date</option>
						<option value="popularity.desc">Popularity</option>
						<option value="revenue.desc">Revenue</option>
					</select>
				</span>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	movies: state.movies.moviesSeries,
	tab: state.movies.tab,
	genre: state.movies.genre,
	lang: state.movies.lang,
});

export default connect(mapStateToProps, {
	filterGenre,
	filterLanguage,
	sortBy,
})(FilterAndSort);
