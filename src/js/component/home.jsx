import React from "react";
import "../../styles/index.css"
//create your first component
const Home = () => {
	return (
		<>
		<h1>Todo List</h1>
		<div className="container d-flex justify-content-center">
			<ul>
				<li className="border"><input type="text" /></li>
				<li className="border"></li>
				<li className="border"></li>
				<li className="border"></li>
				<li className="border"></li>
			</ul>
		</div>	
		</>
	);
};

export default Home;
