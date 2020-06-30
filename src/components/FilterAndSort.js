import React from "react";

function FilterAndSort() {
	return (
		<div className="filter-sort-dropbtn">
			<span className="tesr">
				<label htmlFor="filter"> Filters </label>
				<select name="filterby" id="genre-filter" className="filter">
					<option value="Genre" className="filter">
						Genre
					</option>
					<option value="Thriller" className="filter">
						Thriller
					</option>
					<option value="Suspense" className="filter">
						Suspense
					</option>
					<option value="Comedy" className="filter">
						Comedy
					</option>
					<option value="Action" className="filter">
						Action
					</option>
					<option value="Drama" className="filter">
						Drama
					</option>
				</select>
			</span>

			<span id="language-filter">
				<select name="filterby" id="language-filter" className="filter">
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

			<span>
				{/* <select name="filterby" id="language-filter">
					<option value="Language">Language</option>
					<option value="Hindi">Hindi</option>
					<option value="English">English</option>
					<option value="French">French</option>
					<option value="Marathi">Marathi</option>
				</select> */}
			</span>
		</div>
	);
}

export default FilterAndSort;
