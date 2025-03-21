import { Link } from "react-router-dom";
import logistoceanImage from './assets/images/logo.png';  
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm fixed-top" style={{ backgroundColor: "#2972b6" }}>
            <div className="container">
                {/* Logo */}
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src={logistoceanImage} width={60} alt="Logistocean Logo" className="me-2" />
                    <span className="fw-bold text-white">Logistocean</span>
                </Link>

                {/* Navbar Toggler */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-1">
                            <Link className="nav-link text-white fw-semibold px-3 py-2 rounded-pill" to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link className="nav-link text-white fw-semibold px-3 py-2 rounded-pill" to="/Product">All Products</Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link className="nav-link text-white fw-semibold px-3 py-2 rounded-pill" to="/About">About Us</Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link className="nav-link text-white fw-semibold px-3 py-2 rounded-pill" to="/Contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
