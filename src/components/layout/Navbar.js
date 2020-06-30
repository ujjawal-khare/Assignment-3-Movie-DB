import React from "react";

function Navbar() {
	return (
		<div className="navbar">
			<span id="movie-nav">
				<a href="#movies">Movies</a>
			</span>

			<span id="series-nav">
				<a href="#series">Series</a>
			</span>
		</div>
	);
}

export default Navbar;
