import React from "react";
/* import {Routes, Route, Link} from 'react-router-dom' */
import { Router, Outlet, ReactLocation, Link } from "react-location";
import Home from "./Home";
import Contact from "./Contact";
import Info from "./Info";
import "./App.css";

const routes = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/contact",
		element: <Contact />,
	},
	{
		path: "/info",
		element: <Info />,
	},
];

const location = new ReactLocation();

function App() {
	return (
		<div className="App">
			{/* <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/info" element={<Info/>}></Route>
      </Routes> */}

			<Router routes={routes} location={location}>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<Link to="/info">Info</Link>
					</li>
				</ul>
				<Outlet />
			</Router>
		</div>
	);
}

export default App;
