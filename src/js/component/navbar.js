import React from "react";
import { Link } from "react-router-dom";
import Formulario from "../views/Formulario";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">CONTACT LIST</span>
			</Link>
			<div className="ml-auto">
				<Link to="/formulario">
					<button className="btn btn-primary">Add New Contact</button>
				</Link>
			</div>
		</nav>
	);
};
