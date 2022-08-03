import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { MovieContext } from "../store/MovieContext";
import { useNavigate } from "react-router-dom";

const AddMovieList = () => {
	const [inputValue, setInputValue] = useState({});

	const navigate = useNavigate();

	const [movies, setMovies] = useContext(MovieContext);

	const handleChange = (e) => {
		setInputValue({
			...inputValue,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(inputValue);
		setMovies([...movies, inputValue]);
		setInputValue({});
		navigate("/");
	};

	return (
		<div className="form_container mt-5">
			<h1 className="text-center">Movie Form List</h1>
			<form onSubmit={handleSubmit}>
				<div className="input_div">
					<label htmlFor="username">Title</label>
					<input
						type="text"
						placeholder="title"
						id="title"
						name="title"
						value={inputValue.title}
						onChange={handleChange}
					/>
				</div>
				<div className="input_div">
					<label htmlFor="username">Price</label>
					<input
						type="number"
						placeholder="price"
						id="price"
						name="price"
						value={inputValue.price}
						onChange={handleChange}
					/>
				</div>
				<div className="input_div">
					<label htmlFor="username">Director</label>
					<input
						type="text"
						placeholder="director"
						id="director"
						name="director"
						value={inputValue.director}
						onChange={handleChange}
					/>
				</div>
				<Button type="submit"> Submit</Button>
			</form>
		</div>
	);
};

export default AddMovieList;
