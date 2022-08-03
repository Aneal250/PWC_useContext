import React, { useContext } from "react";
import { MovieContext } from "../store/MovieContext";

const Footer = () => {
	const [movies, setMovies] = useContext(MovieContext);

	const last = movies[movies.length - 1];

	return (
		<footer>
			<h2></h2>
			<p> The lastest Movie Added: {last.title}</p>
		</footer>
	);
};

export default Footer;
