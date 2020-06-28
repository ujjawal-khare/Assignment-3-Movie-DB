import React from "react";

function FilterAndSort() {
	return (
		<div id="filter-sort-dropbtn">
			<div className="filter-sort">
				<li>
					<label htmlFor="filter"> Filters </label>
					<select name="filterby" id="filter-info">
						<option value="None">None</option>
						<option value="Thriller">Thriller</option>
						<option value="Suspense">Suspense</option>
						<option value="Comedy">Comedy</option>
						<option value="Action">Action</option>
						<option value="Drama">Drama</option>
					</select>
				</li>
			</div>
		</div>
	);
}

export default FilterAndSort;
