import React, { Component } from "react";
import { searchMovie, fetchMovie } from "../../actions/searchAction";
import { connect } from "react-redux";

export class Search extends Component {
	onChange = (e) => {
		e.preventDefault();
		//console.log(e.target.value);
		this.props.searchMovie(e.target.value);
	};

	onSubmit = (e) => {
		e.preventDefault();
		//console.log(this.props.text);
		this.props.fetchMovie(this.props.text);
		// this.props.setLoading();
	};

	render() {
		return (
			<div>
				<form className="search" onSubmit={this.onSubmit}>
					<input
						type="text"
						placeholder="Search.."
						name="search"
						onChange={this.onChange}
					/>
					<button type="submit">
						<i className="fa fa-search"></i>
					</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	text: state.movies.text,
});
export default connect(mapStateToProps, { searchMovie, fetchMovie })(Search);
