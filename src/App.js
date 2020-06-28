import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import FilterAndSort from "./components/FilterAndSort";

function App() {
	return (
		<div className="myDiv">
			<Search />
			<Navbar />
			<FilterAndSort />
		</div>
	);
}

export default App;
