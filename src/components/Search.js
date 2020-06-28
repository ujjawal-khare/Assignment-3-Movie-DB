import React from "react";

function Search() {
	return (
		<div>
			<form className="search">
				<input type="text" placeholder="Search.." name="search" />
				<button type="submit">
					<i className="fa fa-search"></i>
				</button>
			</form>
		</div>
	);
}

export default Search;
