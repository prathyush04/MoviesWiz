import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";



function App() {
  return (
  <Router>
    <div className="p-6">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  </Router>
  );;
}

export default App;