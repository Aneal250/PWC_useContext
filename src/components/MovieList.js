import React, { useContext, useState } from "react";
import Movie from "./Movie";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { MovieContext } from "../store/MovieContext";

const MovieList = () => {
	const [movies, setMovies] = useContext(MovieContext);

	const last = movies[movies.length - 1];
	console.log(last);
	//get the first object in the array
	const first = movies[0];
	console.log(first);

	return (
		<>
			<div className="container mt-5">
				<ListGroup as="ol" numbered>
					{movies.map((movie) => (
						<Movie key={movie.id} movie={movie} />
					))}
				</ListGroup>
			</div>
		</>
	);
};

export default MovieList;
