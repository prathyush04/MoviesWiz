import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
            <h1 className="text-2xl font-bold text-yellow-400">MovieWiz</h1>

            <div className="space-x-6">
                <a href="/" className="hover:text-yellow-400">Home</a>
                <a href="/movies" className="hover:text-yellow-400">Movies</a>
                <a href="/about" className="hover:text-yellow-400">About</a>
            </div>
        </nav>
    )
}

export default Navbar;