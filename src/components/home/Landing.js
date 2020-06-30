import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "./Search";
import Spinner from "../layout/Spinner";
import MoviesContainer from "./MoviesContainer";

export class Landing extends Component {
	render() {
		const { loading } = this.props;
		return (
			<div>
				<Search />
				{/* {loading ? <Spinner /> : <MoviesContainer />} */}
				<MoviesContainer />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	loding: state.movies.loading,
});

export default connect(mapStateToProps)(Landing);
