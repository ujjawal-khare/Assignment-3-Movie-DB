import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "./Search";
import Spinner from "../layout/Spinner";
import FilterAndSort from "./../FilterAndSort";
import Navbar from "./../layout/Navbar";
import MoviesContainer from "./MoviesContainer";

export class Landing extends Component {
	render() {
		const { loading } = this.props;
		return (
			<div>
				<Search />
				<Navbar />
				<FilterAndSort />
				{/* {loading ? <Spinner /> : <MoviesContainer />} */}
				<MoviesContainer />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	loading: state.movies.loading,
});

export default connect(mapStateToProps)(Landing);
