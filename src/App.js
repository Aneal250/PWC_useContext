import logo from "./logo.svg";
import "./App.css";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./store/MovieContext";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddMovieList from "./components/AddMovieList";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<MovieProvider>
					<NavBar />
					<Routes>
						<Route path="/" element={<MovieList />} />
						<Route path="/addMovie" element={<AddMovieList />} />
					</Routes>
					<Footer />
				</MovieProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
