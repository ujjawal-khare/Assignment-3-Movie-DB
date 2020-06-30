import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Navbar from "./components/layout/Navbar";
import Search from "./components/home/Search";
import Landing from "./components/home/Landing";
import FilterAndSort from "./components/FilterAndSort";
import store from "./store/Store";

function App() {
	return (
		<Provider store={store}>
			<div className="myDiv">
				<Landing />
				<Navbar />
				<FilterAndSort />
			</div>
		</Provider>
	);
}

export default App;
