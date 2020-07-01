import React, { Component } from "react";
import { connect, fetchMovies } from "react-redux";
import { filterGenre } from "../actions/searchAction";

class FilterAndSort extends Component {
	onClick = (e) => {
		e.preventDefault();
		console.log(e.target.className);
		if (e.target.className === "filter-genre") {
			this.props.filterGenre(e.target.value);
		} else {
			this.props.filterLanguage(e.target.value);
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
						<option value="Genre" className="filter">
							Genre
						</option>
						<option value="28" className="filter">
							Action
						</option>
						<option value="12" className="filter">
							Adventure
						</option>
						<option value="16" className="filter">
							Animation
						</option>
						<option value="35" className="filter">
							Comedy
						</option>
						<option value="80" className="filter">
							Crime
						</option>
						<option value="18" className="filter">
							Drama
						</option>
						<option value="9648" className="filter">
							Mysterty
						</option>
						<option value="10749" className="filter">
							Romance
						</option>
						<option value="53" className="filter">
							Thriller
						</option>
					</select>
				</span>

				<span id="language-filter">
					<select
						name="filterby"
						id="language-filter"
						className="filter-language"
						onClick={this.onClick}
					>
						<option value="Language" className="filter">
							Language
						</option>
						<option value="Hindi" className="filter">
							Hindi
						</option>
						<option value="English" className="filter">
							English
						</option>
						<option value="French" className="filter">
							French
						</option>
						<option value="Marathi" className="filter">
							Marathi
						</option>
					</select>
				</span>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	movies: state.movies.moviesSeries,
});

export default connect(mapStateToProps, { filterGenre })(FilterAndSort);
