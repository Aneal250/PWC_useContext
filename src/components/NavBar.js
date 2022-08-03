import React, { useContext } from "react";
import { Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MovieContext } from "../store/MovieContext";

const NavBar = () => {
	const [movies, setMovies] = useContext(MovieContext);

	return (
		<nav>
			<div className="nav-wrapper">
				<Link to="/">
					<p>My Movie Application</p>
				</Link>
			</div>
			<div>
				<Button variant="light">
					Number of Movies <Badge bg="danger">{movies.length}</Badge>
				</Button>
				<Link to="/addMovie">
					<span className="mx-4">Add</span>
				</Link>
			</div>
		</nav>
	);
};

export default NavBar;
