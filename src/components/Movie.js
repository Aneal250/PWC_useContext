import React from "react";
import { ListGroup, Button, Badge } from "react-bootstrap";

const Movie = ({ movie }) => {
	return (
		<div className="text-center">
			<ListGroup.Item as="li">
				<span> {movie.title}</span>
				<Button variant="light" className="mx-5">
					&#36; <Badge bg="info">{movie.price}</Badge>
				</Button>
			</ListGroup.Item>
		</div>
	);
};

export default Movie;
