import React, { useState, createContext } from "react";

export const MovieContext = createContext();

const moviesList = [
	{ id: 1, title: "Star Wars", price: "$10", director: "George Lucas" },
	{ id: 2, title: "The Matrix", price: "$15", director: "Lilly Wachowski" },
	{ id: 3, title: "The Notebook", price: "$20", director: "Wes Anderson" },
	{ id: 4, title: "Memento", price: "$25", director: "Christopher Nolan" },
	{ id: 5, title: "Inception", price: "$30", director: "Christopher Nolan" },
	{ id: 6, title: "Interstellar", price: "$35", director: "Christopher Nolan" },
];

export const MovieProvider = (props) => {
	const [movies, setMovies] = useState([...moviesList]);
	return (
		<div>
			<MovieContext.Provider value={[movies, setMovies]}>
				{props.children}
			</MovieContext.Provider>
		</div>
	);
};
